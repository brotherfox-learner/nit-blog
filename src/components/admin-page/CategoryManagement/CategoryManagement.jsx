import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchBox } from "@/components/common/SearchBox";
import { Plus } from "lucide-react";
import { CategoryList } from "../shared/CategoryList";
import { ConfirmationDialog } from "../shared/ConfirmationDialog";

// Dummy data for demonstration
const dummyCategories = [
  { id: 1, name: "Cat" },
  { id: 2, name: "General" },
  { id: 3, name: "Inspiration" },
];

/**
 * CategoryManagement - List view component
 * Follows SRP - only responsible for displaying the category list
 */
export function CategoryManagement({ onEdit, onCreate }) {
  const [categories] = useState(dummyCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (categoryToDelete) {
      // TODO: Implement actual delete logic
      console.log("Delete category:", categoryToDelete.id);
      setDeleteDialogOpen(false);
      setCategoryToDelete(null);
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
