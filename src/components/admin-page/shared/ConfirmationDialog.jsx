import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

/**
 * Reusable confirmation dialog component
 * Follows SRP - single responsibility for confirmation dialogs
 * Follows DRY - reusable for any confirmation action
 */
export function ConfirmationDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default", // "default" | "destructive"
  confirmLoading = false, // ป้องกัน double-click ขณะรอ response
}) {
  if (!open) return null;

  const handleClose = () => {
    if (!confirmLoading) onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={confirmLoading}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Close dialog"
        >
          <X className="size-4 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-6">{message}</p>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              onClick={handleClose}
              disabled={confirmLoading}
              className="px-8 rounded-full"
            >
              {cancelLabel}
            </Button>
            <Button
              onClick={onConfirm}
              disabled={confirmLoading}
              variant={variant === "destructive" ? "destructive" : "default"}
              className={`px-8 rounded-full ${
                variant === "destructive"
                  ? "bg-black hover:bg-gray-800 text-white"
                  : ""
              }`}
            >
              {confirmLoading ? "Please wait..." : confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
