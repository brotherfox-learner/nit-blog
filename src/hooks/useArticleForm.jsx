import { useState, useEffect } from "react";

/**
 * Hook for managing article form state
 * Follows SRP - single responsibility for form data management
 */
export function useArticleForm(initialData = null) {
  const [formData, setFormData] = useState({
    thumbnailImage: null,
    category: "",
    authorName: "Thompson P.",
    title: "",
    introduction: "",
    content: "",
  });

  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        thumbnailImage: initialData.thumbnailImage || null,
        category: initialData.category || "",
        authorName: initialData.authorName || "Thompson P.",
        title: initialData.title || "",
        introduction: initialData.introduction || "",
        content: initialData.content || "",
      });
      if (initialData.thumbnailUrl) {
        setThumbnailPreview(initialData.thumbnailUrl);
      }
    }
  }, [initialData]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleThumbnailUpload = (file) => {
    if (file) {
      setFormData((prev) => ({ ...prev, thumbnailImage: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      thumbnailImage: null,
      category: "",
      authorName: "Thompson P.",
      title: "",
      introduction: "",
      content: "",
    });
    setThumbnailPreview(null);
  };

  return {
    formData,
    thumbnailPreview,
    updateField,
    handleThumbnailUpload,
    resetForm,
    setFormData,
  };
}
