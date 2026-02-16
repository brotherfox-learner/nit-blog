import Header from '../layout/NavBar';
import { useAuth } from "../../contexts/AuthContext";
import { updateUser, changePassword } from "@/api/usersAPI";

// Components
import Sidebar from './components/Sidebar';
import MobileTabs from './components/MobileTabs';
import ProfileSection from './components/ProfileSection';
import ActivitySection from './components/ActivitySection';
import NotificationsSection from './components/NotificationsSection';
import PreferencesSection from './components/PreferencesSection';
import SecuritySection from './components/SecuritySection';

// Hooks and utilities
import { useMemberPage } from './hooks/useMemberPage';
import { calculatePasswordStrength, getPasswordStrengthColor, getPasswordStrengthText, withTimeout } from './utils/helpers';

export default function MemberPageComponent() {
  const { user, profile, token, fetchProfile } = useAuth();
  
  // Use custom hook for state management
  const {
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
  } = useMemberPage(user, profile);

  // Handler functions
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

  // ฟังก์ชันการจัดการการเปลี่ยนแปลงข้อมูลการกรอก
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ฟังก์ชันการจัดการการเปลี่ยนแปลงข้อมูลการกรอกรหัสผ่าน
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

  // ฟังก์ชันการจัดการการเปลี่ยนแปลงข้อมูลการกรอกรหัสผ่าน
  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  // ฟังก์ชันการจัดการการบันทึกข้อมูล
  const handleSave = async () => {
    if (!token || !user) {
      setFormError("You must be logged in to save changes.");
      return;
    }
    
    // Client-side validation ก่อนส่ง
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

  // ฟังก์ชันการจัดการการเปลี่ยนแปลงรหัสผ่าน
  const handleChangePassword = async () => {
    // Client-side validation
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

  // ฟังก์ชันการจัดการการทำเครื่องหมายการแจ้งเตือนที่ไม่อ่าน
  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  // ฟังก์ชันการจัดการการทำเครื่องหมายการแจ้งเตือนที่ไม่อ่านทั้งหมด
  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // ฟังก์ชันการจัดการการลบการแจ้งเตือน
  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
      <Header />

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-73px)]">
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

        <main className="flex-1 px-0 pb-0 lg:px-8 lg:py-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-none lg:rounded-2xl p-6 sm:p-8 lg:p-10 lg:max-w-[65vw] shadow-none lg:shadow-xl lg:border lg:border-slate-100">
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
              <ActivitySection activityStats={activityStats} />
            )}

            {activeTab === 'notifications' && (
              <NotificationsSection
                notifications={notifications}
                unreadCount={unreadCount}
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