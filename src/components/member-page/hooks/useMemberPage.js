import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { notificationDummy, activityStatsData } from '../data/notificationData';
import { calculatePasswordStrength, withTimeout } from '../utils/helpers';

export const useMemberPage = (user, profile) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileImage, setProfileImage] = useState(null);
  const [notifications, setNotifications] = useState(notificationDummy);
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

  const activityStats = activityStatsData;
  const unreadCount = notifications.filter(n => !n.read).length;

  return {
    activeTab,
    setActiveTab,
    profileImage,
    setProfileImage,
    notifications,
    setNotifications,
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
    activityStats,
    unreadCount
  };
};
