import { useState, useCallback } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { ArticleManagement } from "./ArticleManagement";
import { CreateArticle } from "./ArticleManagement";
import { CategoryManagement } from "./CategoryManagement";
import { CreateCategory } from "./CategoryManagement";
import { Profile } from "./Profile";
import { Notification } from "./Notification";
import { ResetPassword } from "./ResetPassword";
import { ConfirmationDialog } from "./shared/ConfirmationDialog";
import { deletePost } from "@/api/postsAPI";
import { deleteCategory } from "@/api/categoryAPI";
import { useAuth } from "@/contexts";

/**
 * AdminPage - Main admin page component that handles navigation
 * Follows SRP - single responsibility for routing/navigation
 * Uses loose coupling - components communicate via callbacks
 */
export function AdminPage() {
  const { token, session } = useAuth();
  const accessToken = token ?? session?.access_token;

  const [currentView, setCurrentView] = useState("article");
  const [viewMode, setViewMode] = useState("list"); // "list" | "create" | "edit"
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Used to trigger re-fetch

  const refreshData = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  const handleNavigation = (view) => {
    setCurrentView(view);
    setViewMode("list");
    setSelectedItem(null);
  };

  const handleArticleCreate = () => {
    setViewMode("create");
    setSelectedItem(null);
  };

  const handleArticleEdit = (article) => {
    setViewMode("edit");
    setSelectedItem(article);
  };

  const handleArticleDelete = (article) => {
    setItemToDelete({ type: "article", data: article });
    setDeleteDialogOpen(true);
  };

  const handleCategoryCreate = () => {
    setViewMode("create");
    setSelectedItem(null);
  };

  const handleCategoryEdit = (category) => {
    setViewMode("edit");
    setSelectedItem(category);
  };

  const handleCategoryDelete = (category) => {
    setItemToDelete({ type: "category", data: category });
    setDeleteDialogOpen(true);
  };

  const handleBackToList = () => {
    setViewMode("list");
    setSelectedItem(null);
    refreshData(); // Refresh data when going back to list
  };

  const handleDeleteConfirm = async () => {
    if (!itemToDelete || !accessToken || isDeleting) return;
    setIsDeleting(true);
    try {
      if (itemToDelete.type === "article") {
        await deletePost(itemToDelete.data.id, accessToken);
      } else if (itemToDelete.type === "category") {
        await deleteCategory(itemToDelete.data.id, accessToken);
      }

      setDeleteDialogOpen(false);
      setItemToDelete(null);

      if (viewMode === "edit") {
        handleBackToList();
      } else {
        refreshData();
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed: " + (err.response?.data?.message || err.message));
    } finally {
      setIsDeleting(false);
    }
  };

  const getActiveItem = () => {
    if (currentView === "article") return "article";
    if (currentView === "category") return "category";
    if (currentView === "profile") return "profile";
    if (currentView === "notification") return "notification";
    if (currentView === "reset") return "reset";
    return "article";
  };

  const renderContent = () => {
    // Article Management Views
    if (currentView === "article") {
      if (viewMode === "create") {
        return <CreateArticle onBack={handleBackToList} />;
      }
      if (viewMode === "edit") {
        return (
          <CreateArticle
            onBack={handleBackToList}
            initialData={selectedItem}
            onDelete={() => handleArticleDelete(selectedItem)}
          />
        );
      }
      return (
        <ArticleManagement
          key={`articles-${refreshKey}`}
          onCreate={handleArticleCreate}
          onEdit={handleArticleEdit}
        />
      );
    }

    // Category Management Views
    if (currentView === "category") {
      if (viewMode === "create") {
        return <CreateCategory onBack={handleBackToList} />;
      }
      if (viewMode === "edit") {
        return (
          <CreateCategory onBack={handleBackToList} initialData={selectedItem} />
        );
      }
      return (
        <CategoryManagement
          key={`categories-${refreshKey}`}
          onCreate={handleCategoryCreate}
          onEdit={handleCategoryEdit}
        />
      );
    }

    // Other Views
    if (currentView === "profile") {
      return <Profile />;
    }
    if (currentView === "notification") {
      return <Notification />;
    }
    if (currentView === "reset") {
      return <ResetPassword />;
    }

    return null;
  };

  return (
    <div className="flex min-h-screen bg-[#FAFAF5]">
      <AdminSidebar activeItem={getActiveItem()} onNavigate={handleNavigation} />
      <main className="flex-1 ml-64 p-8">
        {renderContent()}
      </main>

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title={
          itemToDelete?.type === "article"
            ? "Delete article"
            : "Delete category"
        }
        message={
          itemToDelete?.type === "article"
            ? "Do you want to delete this article?"
            : "Do you want to delete this category?"
        }
        confirmLabel="Delete"
        variant="destructive"
        confirmLoading={isDeleting}
      />
    </div>
  );
}
