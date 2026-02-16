import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useMemberPage = (user, profile) => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'profile';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [saveStatus, setSaveStatus] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    notifications: true,
    language: "en",
    theme: "light",
    autoSave: true,
  });
  const [formError, setFormError] = useState(null);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Set form data when profile changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name: profile?.name ?? "",
      username: profile?.username ?? "",
      email: user?.email ?? "",
      bio: profile?.bio ?? "",
    }));
  }, [profile, user]);

  // Set profile image when profile changes
  useEffect(() => {
    setProfileImage(profile?.profile_pic ?? null);
  }, [profile]);

  return {
    activeTab,
    setActiveTab,
    profileImage,
    setProfileImage,
    showPassword,
    setShowPassword,
    saveStatus,
    setSaveStatus,
    passwordStrength,
    setPasswordStrength,
    formData,
    setFormData,
    formError,
    setFormError,
    passwordData,
    setPasswordData,
  };
};
