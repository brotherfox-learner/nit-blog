import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

export function DeleteArticleDialog({ open, onOpenChange, onConfirm, articleTitle }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Close dialog"
        >
          <X className="size-4 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Delete article
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Do you want to delete this article?
          </p>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="px-8 rounded-full"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="px-8 bg-black hover:bg-gray-800 text-white rounded-full"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
