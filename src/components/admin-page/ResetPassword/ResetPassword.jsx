import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePasswordReset } from "@/hooks/usePasswordReset";
import { ConfirmationDialog } from "../shared/ConfirmationDialog";
import { Eye, EyeOff } from "lucide-react";

/**
 * ResetPassword - Password reset component
 * Follows SRP - single responsibility for password reset
 * Uses hook for form state management (loose coupling)
 */
export function ResetPassword() {
  const { formData, updateField, validatePasswords } = usePasswordReset();
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleResetClick = () => {
    const validation = validatePasswords();
    if (validation.isValid) {
      setResetDialogOpen(true);
    } else {
      alert(validation.error);
    }
  };

  const handleResetConfirm = () => {
    console.log("Reset password:", formData);
    // TODO: Implement reset logic
    setResetDialogOpen(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Reset password</h1>
        <Button
          onClick={handleResetClick}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
        >
          Reset password
        </Button>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Current Password */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Current password
          </Label>
          <div className="relative">
            <Input
              type={showCurrentPassword ? "text" : "password"}
              value={formData.currentPassword}
              onChange={(e) => updateField("currentPassword", e.target.value)}
              placeholder="Current password"
              className="w-full bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showCurrentPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            New password
          </Label>
          <div className="relative">
            <Input
              type={showNewPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={(e) => updateField("newPassword", e.target.value)}
              placeholder="New password"
              className="w-full bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showNewPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Confirm new password
          </Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => updateField("confirmPassword", e.target.value)}
              placeholder="Confirm new password"
              className="w-full bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Dialog */}
      <ConfirmationDialog
        open={resetDialogOpen}
        onOpenChange={setResetDialogOpen}
        onConfirm={handleResetConfirm}
        title="Reset password"
        message="Do you want to reset your password?"
        confirmLabel="Reset"
        variant="default"
      />
    </div>
  );
}
