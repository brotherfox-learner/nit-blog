import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SearchBox } from "@/components/common/SearchBox";
import { Plus } from "lucide-react";
import { CategoryList } from "../shared/CategoryList";
import { ConfirmationDialog } from "../shared/ConfirmationDialog";
import { fetchCategories, deleteCategory } from "@/api/categoryAPI";
import { useAuth } from "@/contexts";

/**
 * CategoryManagement - List view component
 * Follows SRP - only responsible for displaying the category list
 */
export function CategoryManagement({ onEdit, onCreate }) {
  const { token, session } = useAuth();
  const accessToken = token ?? session?.access_token;

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Fetch categories from API
  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (categoryToDelete && accessToken) {
      try {
        await deleteCategory(categoryToDelete.id, accessToken);
        setCategories((prev) => prev.filter((c) => c.id !== categoryToDelete.id));
        setDeleteDialogOpen(false);
        setCategoryToDelete(null);
      } catch (err) {
        console.error("Failed to delete category:", err);
        alert("Failed to delete category: " + (err.response?.data?.message || err.message));
      }
    }
  };

  const handleEditClick = (category) => {
    if (onEdit) {
      onEdit(category);
    }
  };

  const handleCreateClick = () => {
    if (onCreate) {
      onCreate();
    }
  };

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <div className="text-gray-500">Loading categories...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Category management
        </h1>
        <Button
          onClick={handleCreateClick}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6 flex items-center gap-2"
        >
          <Plus className="size-4" />
          Create category
        </Button>
      </div>

      {/* Search */}
      <div className="my-10 mx-15">
        <SearchBox
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category List */}
      <CategoryList
        categories={filteredCategories}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />

      {/* Delete Dialog */}
      <ConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title="Delete category"
        message="Do you want to delete this category?"
        confirmLabel="Delete"
        variant="destructive"
      />
    </div>
  );
}
