import { supabase } from '../../../lib/supabase';
import { calculatePasswordStrength, withTimeout } from '../utils/helpers';

export const useMemberActions = ({
  user,
  profileImage,
  formData,
  passwordData,
  setSaveStatus,
  setFormError,
  setPasswordStrength,
  setPasswordData,
  setShowPassword,
  setNotifications
}) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // This would need to be passed to parent or use a setter
        // For now, we'll handle this in the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // This would need to be passed to parent or use a setter
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'newPassword') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = async () => {
    setSaveStatus("saving");
    setFormError(null);

    try {
      const payload = {
        name: formData.name.trim(),
        username: formData.username.trim(),
        profile_pic: profileImage ?? null,
      };

      const { data, error } = await withTimeout(
        supabase
          .from("users")
          .update(payload)
          .eq("id", user.id)
          .select("id, name, username, profile_pic, role")
          .single()
      );

      if (error) {
        if (error.code === "23505") {
          throw new Error("This username is already taken.");
        }
        throw error;
      }

      setSaveStatus("success");
      setTimeout(() => setSaveStatus(null), 2000);
    } catch (err) {
      console.error("Save profile error:", err);
      setFormError(err.message || "Unable to save changes. Please try again.");
      setSaveStatus(null);
    }
  };

  const handleResetPassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (calculatePasswordStrength(passwordData.newPassword) < 2) {
      alert('Password is too weak. Please use a stronger password.');
      return;
    }
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('success');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setTimeout(() => setSaveStatus(null), 2000);
    }, 1000);
  };

  const handleMarkAsRead = (id) => {
    setNotifications(prev => prev.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleDeleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return {
    handleImageUpload,
    handleInputChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleSave,
    handleResetPassword,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification
  };
};
