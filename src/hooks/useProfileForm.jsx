import { useState, useEffect } from "react";

/**
 * Hook for managing profile form state
 * Follows SRP - single responsibility for profile form data management
 */
export function useProfileForm(initialData = null) {
  const [formData, setFormData] = useState({
    profilePicture: null,
    name: "Thompson P.",
    username: "thompson",
    email: "thompson.p@gmail.com",
    bio: "",
  });

  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        profilePicture: initialData.profilePicture || null,
        name: initialData.name || "Thompson P.",
        username: initialData.username || "thompson",
        email: initialData.email || "thompson.p@gmail.com",
        bio: initialData.bio || "",
      });
      if (initialData.profilePictureUrl) {
        setProfilePicturePreview(initialData.profilePictureUrl);
      }
    }
  }, [initialData]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfilePictureUpload = (file) => {
    if (file) {
      setFormData((prev) => ({ ...prev, profilePicture: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    formData,
    profilePicturePreview,
    updateField,
    handleProfilePictureUpload,
    setFormData,
  };
}
