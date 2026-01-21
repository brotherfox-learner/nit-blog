import { useState } from "react";
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

// Dummy data for demonstration
const dummyArticles = [
  {
    id: 1,
    title: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They D...",
    category: "Cat",
    status: "Published",
  },
  {
    id: 2,
    title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    category: "Cat",
    status: "Draft",
  },
  {
    id: 3,
    title: "Finding Motivation: How to Stay Inspired Through Life's Challenges",
    category: "General",
    status: "Published",
  },
  {
    id: 4,
    title: "The Science of the Cat's Purr: How It Benefits Cats and Humans Alike",
    category: "Cat",
    status: "Published",
  },
  {
    id: 5,
    title: "Top 10 Health Tips to Keep Your Cat Happy and Healthy",
    category: "Cat",
    status: "Draft",
  },
  {
    id: 6,
    title: "Unlocking Creativity: Simple Habits to Spark Inspiration Daily",
    category: "Inspiration",
    status: "Published",
  },
];

const categories = ["Category", "Cat", "General", "Inspiration"];
const statuses = ["Status", "Published", "Draft"];

/**
 * ArticleManagement - List view component
 * Follows SRP - only responsible for displaying the article list
 * Uses hooks for filtering logic (loose coupling)
 */
export function ArticleManagement({ onEdit, onCreate }) {
  const [articles] = useState(dummyArticles);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

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

  const handleDeleteConfirm = () => {
    if (articleToDelete) {
      // TODO: Implement actual delete logic
      console.log("Delete article:", articleToDelete.id);
      setDeleteDialogOpen(false);
      setArticleToDelete(null);
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
      />
    </div>
  );
}
