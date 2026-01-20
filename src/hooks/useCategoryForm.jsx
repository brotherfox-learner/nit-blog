import { useState, useEffect } from "react";

/**
 * Hook for managing category form state
 * Follows SRP - single responsibility for category form data management
 */
export function useCategoryForm(initialData = null) {
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (initialData) {
      setCategoryName(initialData.name || "");
    }
  }, [initialData]);

  const resetForm = () => {
    setCategoryName("");
  };

  return {
    categoryName,
    setCategoryName,
    resetForm,
  };
}
