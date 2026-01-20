import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCategoryForm } from "@/hooks/useCategoryForm";

/**
 * CreateCategory - Form component for creating/editing categories
 * Follows SRP - single responsibility for category form
 * Uses hook for form state management (loose coupling)
 */
export function CreateCategory({ onBack, initialData }) {
  const isEditMode = !!initialData;
  const { categoryName, setCategoryName } = useCategoryForm(initialData);

  const handleSave = () => {
    console.log("Save category:", categoryName);
    // TODO: Implement save logic
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
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
        >
          Save
        </Button>
      </div>

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
      </div>
    </div>
  );
}
