import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SearchBox } from "@/components/common/SearchBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useArticleFilters } from "@/hooks/useArticleFilters";
import { ArticleTable } from "../shared/ArticleTable";
import { ConfirmationDialog } from "../shared/ConfirmationDialog";
import { getPosts, deletePost } from "@/api/postsAPI";
import { fetchCategories } from "@/api/categoryAPI";
import { useAuth } from "@/contexts";

const statuses = ["Status", "Published", "Draft"];

/**
 * ArticleManagement - List view component
 * Follows SRP - only responsible for displaying the article list
 * Uses hooks for filtering logic (loose coupling)
 */
export function ArticleManagement({ onEdit, onCreate }) {
  const { token, session } = useAuth();
  const accessToken = token ?? session?.access_token;

  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState(["Category"]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch articles and categories from API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [postsRes, categoriesRes] = await Promise.all([
          getPosts({ limit: 100, all: true }),
          fetchCategories(),
        ]);

        // Map posts to article format for the table
        // Use status_id (number) as source of truth: 1 = Draft, 2 = Published
        const getStatusLabel = (statusId) => {
          if (statusId === 2) return "Published";
          return "Draft"; // default / status_id 1
        };

        const mappedArticles = (postsRes.posts || postsRes || []).map((post) => ({
          ...post,
          id: post.id,
          title: post.title,
          category: post.category_name || post.category || "General",
          status: getStatusLabel(post.status_id),
        }));

        setArticles(mappedArticles);

        // Build category list for filter
        const categoryNames = ["Category", ...categoriesRes.map((c) => c.name)];
        setCategories(categoryNames);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    filteredArticles,
  } = useArticleFilters(articles);

  const handleDeleteClick = (article) => {
    setArticleToDelete(article);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!articleToDelete || !accessToken || isDeleting) return;
    setIsDeleting(true);
    try {
      await deletePost(articleToDelete.id, accessToken);
      setArticles((prev) => prev.filter((a) => a.id !== articleToDelete.id));
      setDeleteDialogOpen(false);
      setArticleToDelete(null);
    } catch (err) {
      console.error("Failed to delete article:", err);
      alert("Failed to delete article: " + (err.response?.data?.message || err.message));
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditClick = (article) => {
    if (onEdit) {
      onEdit(article);
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
        <div className="text-gray-500">Loading articles...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-semibold text-gray-900">
          Article management
        </h1>
        <Button
          onClick={handleCreateClick}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6 flex items-center gap-2"
        >
          <Plus className="size-4" />
          Create article
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 mx-15">
        <div className="flex-1">
          <SearchBox
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <ArticleTable
        articles={filteredArticles}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />

      {/* Delete Dialog */}
      <ConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title="Delete article"
        message="Do you want to delete this article?"
        confirmLabel="Delete"
        variant="destructive"
        confirmLoading={isDeleting}
      />
    </div>
  );
}
