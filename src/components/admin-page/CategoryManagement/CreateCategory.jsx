import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { useCategoryForm } from "@/hooks/useCategoryForm";
import { createCategory, updateCategory, deleteCategory } from "@/api/categoryAPI";
import { useAuth } from "@/contexts";
import { ConfirmationDialog } from "../shared/ConfirmationDialog";

/**
 * CreateCategory - Form component for creating/editing categories
 * Follows SRP - single responsibility for category form
 * Uses hook for form state management (loose coupling)
 */
export function CreateCategory({ onBack, initialData }) {
  const { token, session } = useAuth();
  const accessToken = token ?? session?.access_token;

  const isEditMode = !!initialData;
  const { categoryName, setCategoryName } = useCategoryForm(initialData);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleSave = async () => {
    if (!accessToken) {
      setError("You must be logged in");
      return;
    }

    if (!categoryName.trim()) {
      setError("Category name is required");
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      if (isEditMode) {
        await updateCategory(initialData.id, { name: categoryName.trim() }, accessToken);
      } else {
        await createCategory({ name: categoryName.trim() }, accessToken);
      }
      if (onBack) onBack();
    } catch (err) {
      console.error("Failed to save category:", err);
      setError(err.response?.data?.message || err.message || "Failed to save category");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!accessToken || !initialData?.id) return;

    try {
      await deleteCategory(initialData.id, accessToken);
      setDeleteDialogOpen(false);
      if (onBack) onBack();
    } catch (err) {
      console.error("Failed to delete category:", err);
      setError(err.response?.data?.message || err.message || "Failed to delete category");
      setDeleteDialogOpen(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          {isEditMode ? "Edit category" : "Create category"}
        </h1>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
        >
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Form */}
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Category name
          </Label>
          <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category name"
            className="w-full bg-white"
          />
        </div>

        {/* Delete Category Button - Only in Edit Mode */}
        {isEditMode && (
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={handleDeleteClick}
              className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              <Trash2 className="size-4" />
              Delete category
            </button>
            <Button variant="outline" className="rounded-full px-6" onClick={onBack}>
              Cancel
            </Button>
          </div>
        )}

        {!isEditMode && (
          <Button variant="outline" className="rounded-full px-6" onClick={onBack}>
            Cancel
          </Button>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title="Delete category"
        message="Do you want to delete this category? This may affect articles using this category."
        confirmLabel="Delete"
        variant="destructive"
      />
    </div>
  );
}
