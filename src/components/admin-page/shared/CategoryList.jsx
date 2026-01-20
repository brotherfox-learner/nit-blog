import { Pencil, Trash2 } from "lucide-react";

/**
 * Reusable category list component
 * Follows SRP - single responsibility for displaying categories
 * Follows DRY - reusable list structure
 */
export function CategoryList({ categories, onEdit, onDelete }) {
  if (categories.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No categories found
      </div>
    );
  }

  return (
    <div className="space-y-2 mx-15">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="text-sm text-gray-900">{category.name}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(category)}
              className="p-1.5 hover:bg-gray-200 rounded transition-colors"
              aria-label="Edit category"
            >
              <Pencil className="size-4 text-gray-600" />
            </button>
            <button
              onClick={() => onDelete(category)}
              className="p-1.5 hover:bg-gray-200 rounded transition-colors"
              aria-label="Delete category"
            >
              <Trash2 className="size-4 text-gray-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
