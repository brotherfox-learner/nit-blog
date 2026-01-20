import { useState } from "react";

/**
 * Hook for managing password reset form state
 * Follows SRP - single responsibility for password reset form data management
 */
export function usePasswordReset() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const validatePasswords = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      return { isValid: false, error: "Passwords do not match" };
    }
    if (formData.newPassword.length < 8) {
      return { isValid: false, error: "Password must be at least 8 characters" };
    }
    return { isValid: true, error: null };
  };

  return {
    formData,
    updateField,
    resetForm,
    validatePasswords,
  };
}
