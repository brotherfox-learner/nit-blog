import Header from '../layout/NavBar';
import { useAuth } from "../../contexts/AuthContext";
import { updateUser, changePassword } from "@/api/usersAPI";

import Sidebar from './components/Sidebar';
import MobileTabs from './components/MobileTabs';
import ProfileSection from './components/ProfileSection';
import ActivitySection from './components/ActivitySection';
import NotificationsSection from './components/NotificationsSection';
import PreferencesSection from './components/PreferencesSection';
import SecuritySection from './components/SecuritySection';

import { useMemberPage } from './hooks/useMemberPage';
import { useNotifications } from '@/hooks/useNotifications';
import { useStatistics } from '@/hooks/useStatistics';
import { calculatePasswordStrength, getPasswordStrengthColor, getPasswordStrengthText, withTimeout } from './utils/helpers';

export default function MemberPageComponent() {
  const { user, profile, token, fetchProfile } = useAuth();

  const {
    notifications,
    unreadCount,
    isLoading: isLoadingNotifications,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
  } = useNotifications();

  const { activityStats, isLoading: isLoadingStats } = useStatistics();

  const {
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
  } = useMemberPage(user, profile);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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
    if (!token || !user) {
      setFormError("You must be logged in to save changes.");
      return;
    }

    const trimmedUsername = formData.username ? String(formData.username).trim() : "";
    if (!trimmedUsername || trimmedUsername.length === 0) {
      setFormError("Username cannot be empty.");
      return;
    }

    setSaveStatus("saving");
    setFormError(null);

    try {
      const payload = {
        id: user.id,
        name: formData.name ? String(formData.name).trim() : "",
        username: trimmedUsername,
        bio: formData.bio ? String(formData.bio).trim() : "",
        profile_pic: profileImage ?? null,
      };

      await withTimeout(updateUser(payload, token));
      await fetchProfile(token);

      setSaveStatus("success");
      setTimeout(() => setSaveStatus(null), 2000);
    } catch (err) {
      console.error("Save profile error:", err);
      console.error("Response data:", err.response?.data);
      console.error("Response status:", err.response?.status);

      let message = "Unable to save changes. Please try again.";

      if (err.response?.data) {
        const data = err.response.data;
        if (Array.isArray(data.errors) && data.errors.length > 0) {
          message = data.errors.join(", ");
        } else if (data.message) {
          message = data.message;
        } else if (data.error) {
          message = data.error;
        }
      } else if (err.message) {
        message = err.message;
      }

      setFormError(message);
      setSaveStatus(null);
    }
  };

  const handleChangePassword = async () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setFormError("Please fill in all password fields.");
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setFormError("Passwords do not match!");
      return;
    }
    if (passwordStrength < 2) {
      setFormError("Password is too weak. Please use a stronger password.");
      return;
    }

    setSaveStatus("saving");
    setFormError(null);

    try {
      await changePassword(passwordData, token);
      setSaveStatus("success");
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setPasswordStrength(0);
      setTimeout(() => setSaveStatus(null), 2000);
    } catch (err) {
      console.error("Change password error:", err);

      let message = "Unable to change password. Please try again.";

      if (err.response?.data) {
        const data = err.response.data;
        if (Array.isArray(data.errors) && data.errors.length > 0) {
          message = data.errors.join(", ");
        } else if (data.message) {
          message = data.message;
        } else if (data.error) {
          message = data.error;
        }
      } else if (err.message) {
        message = err.message;
      }

      setFormError(message);
      setSaveStatus(null);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-50 text-neutral-800">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_40%,#f5f5f5_100%)]" />
      <Header />

      <div className="relative mx-auto flex min-h-[calc(100vh-60px)] max-w-[1440px] flex-col px-0 pb-8 lg:min-h-[calc(100vh-73px)] lg:flex-row lg:px-6 lg:pb-10">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formData={formData}
          profileImage={profileImage}
          unreadCount={unreadCount}
          activityStats={activityStats}
        />

        <MobileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          unreadCount={unreadCount}
        />

        <main className="flex-1 px-4 pb-6 pt-3 sm:px-5 lg:px-8 lg:py-8">
          <div className="min-h-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm sm:p-7 lg:rounded-3xl lg:p-10">
            {activeTab === 'profile' && (
              <ProfileSection
                formData={formData}
                profileImage={profileImage}
                formError={formError}
                saveStatus={saveStatus}
                handleInputChange={handleInputChange}
                handleImageUpload={handleImageUpload}
                handleSave={handleSave}
              />
            )}

            {activeTab === 'activity' && (
              <ActivitySection activityStats={activityStats} isLoading={isLoadingStats} />
            )}

            {activeTab === 'notifications' && (
              <NotificationsSection
                notifications={notifications}
                unreadCount={unreadCount}
                isLoading={isLoadingNotifications}
                handleMarkAsRead={handleMarkAsRead}
                handleMarkAllAsRead={handleMarkAllAsRead}
                handleDeleteNotification={handleDeleteNotification}
              />
            )}

            {activeTab === 'preferences' && (
              <PreferencesSection
                formData={formData}
                saveStatus={saveStatus}
                handleInputChange={handleInputChange}
                handleSave={handleSave}
              />
            )}

            {activeTab === 'security' && (
              <SecuritySection
                passwordData={passwordData}
                showPassword={showPassword}
                passwordStrength={passwordStrength}
                saveStatus={saveStatus}
                formError={formError}
                handlePasswordChange={handlePasswordChange}
                togglePasswordVisibility={togglePasswordVisibility}
                handleChangePassword={handleChangePassword}
                getPasswordStrengthColor={() => getPasswordStrengthColor(passwordStrength)}
                getPasswordStrengthText={() => getPasswordStrengthText(passwordStrength)}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
