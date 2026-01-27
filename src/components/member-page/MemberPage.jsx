import { useState } from 'react';
import { User, Key, Bell, Camera, Check, X, Eye, EyeOff, Shield, Mail, AtSign, Activity, FileText, Heart, MessageCircle, Clock, BookOpen, Globe, Moon, Zap, Settings, Trash2 } from 'lucide-react';
import Header from '../layout/NavBar';

// Dummy notification data
const notificationDummy = [
  {
    id: 1,
    user: {
      name: "Jacob Lash",
      avatar: null,
    },
    type: "comment",
    articleTitle: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    comment:
      "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.",
    timestamp: "4 hours ago",
    read: false,
  },
  {
    id: 2,
    user: {
      name: "Jacob Lash",
      avatar: null,
    },
    type: "like",
    articleTitle: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    timestamp: "4 hours ago",
    read: false,
  },
  {
    id: 3,
    user: {
      name: "Sarah Williams",
      avatar: null,
    },
    type: "comment",
    articleTitle: "10 Tips for Better Sleep",
    comment: "Great tips! I tried the breathing technique and it worked wonders.",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: 4,
    user: {
      name: "Mike Chen",
      avatar: null,
    },
    type: "like",
    articleTitle: "Understanding JavaScript Closures",
    timestamp: "2 days ago",
    read: true,
  },
];

const MemberPage = () => {
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
    name: 'Moodeng ja',
    username: 'moodeng.cute',
    email: 'moodeng.cute@gmail.com',
    bio: '',
    notifications: true,
    language: 'en',
    theme: 'light',
    autoSave: true
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Mock activity data
  const activityStats = {
    postsCount: 42,
    likesCount: 1234,
    commentsCount: 567,
    lastActive: '2 hours ago',
    totalReadingTime: '12h 34m'
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

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

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(null), 2000);
    }, 1000);
  };

  const handleResetPassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (passwordStrength < 2) {
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

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-orange-500';
    if (passwordStrength === 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  // Notification handlers
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
      {/* Desktop Header */}
      <Header />

      {/* Mobile Header */}
      <header className="flex lg:hidden justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-lg shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent m-0">hh.</h1>
        <button className="bg-transparent border-none cursor-pointer p-2 flex flex-col gap-1 hover:opacity-70 transition-opacity">
          <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
        </button>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-73px)]">
        {/* Sidebar - Desktop Only */}
        <aside className="hidden lg:block w-[320px] bg-white/90 backdrop-blur-lg border-r border-slate-200 py-8 shadow-sm">
          <div className="flex flex-col items-center px-6 pb-8 border-b border-slate-200 mb-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mb-4 shadow-lg ring-4 ring-white">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h2 className="text-lg font-bold text-slate-800 m-0 mb-2">{formData.name}</h2>
            <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full text-xs font-medium text-indigo-700">
              {activeTab === 'profile' ? '👤 Profile' : activeTab === 'activity' ? '📊 Activity' : activeTab === 'notifications' ? '🔔 Notifications' : activeTab === 'preferences' ? '⚙️ Preferences' : '🔐 Security'}
            </span>
          </div>

          <nav className="flex flex-col gap-2 px-4 mb-6">
            <button
              className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-xl transition-all duration-300 text-left group ${
                activeTab === 'profile'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} className={`${activeTab === 'profile' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} transition-opacity`} />
              <span>Profile Settings</span>
            </button>
            <button
              className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-xl transition-all duration-300 text-left group ${
                activeTab === 'activity'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('activity')}
            >
              <Activity size={18} className={`${activeTab === 'activity' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} transition-opacity`} />
              <span>Activity & Stats</span>
            </button>
            <button
              className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-xl transition-all duration-300 text-left group ${
                activeTab === 'notifications'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              <div className="relative">
                <Bell size={18} className={`${activeTab === 'notifications' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} transition-opacity`} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </div>
              <span>Notifications</span>
            </button>
            <button
              className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-xl transition-all duration-300 text-left group ${
                activeTab === 'preferences'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('preferences')}
            >
              <Settings size={18} className={`${activeTab === 'preferences' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} transition-opacity`} />
              <span>Preferences</span>
            </button>
            <button
              className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-xl transition-all duration-300 text-left group ${
                activeTab === 'security'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('security')}
            >
              <Key size={18} className={`${activeTab === 'security' ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} transition-opacity`} />
              <span>Security</span>
            </button>
          </nav>

          {/* Quick Stats */}
          <div className="px-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-indigo-600" />
                <span className="text-sm font-semibold text-slate-700">Account Security</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                <span>Password strength:</span>
                <span className="font-semibold text-green-600">Strong</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>2FA:</span>
                <span className="font-semibold text-slate-400">Not enabled</span>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={16} className="text-purple-600" />
                <span className="text-sm font-semibold text-slate-700">Quick Stats</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Posts</span>
                  <span className="font-bold text-purple-600">{activityStats.postsCount}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Total Likes</span>
                  <span className="font-bold text-purple-600">{activityStats.likesCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Last Active</span>
                  <span className="font-semibold text-slate-700">{activityStats.lastActive}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden gap-0 px-4 mb-6 border-b border-slate-200 bg-white/90 backdrop-blur-lg overflow-x-auto">
          <button
            className={`flex items-center gap-2 px-4 py-4 sm:px-6 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px font-medium whitespace-nowrap ${
              activeTab === 'profile'
                ? 'text-indigo-600 border-b-indigo-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={20} className={activeTab === 'profile' ? 'opacity-100' : 'opacity-70'} />
            <span className="hidden sm:inline">Profile</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-4 sm:px-6 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px font-medium whitespace-nowrap ${
              activeTab === 'activity'
                ? 'text-indigo-600 border-b-indigo-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            onClick={() => setActiveTab('activity')}
          >
            <Activity size={20} className={activeTab === 'activity' ? 'opacity-100' : 'opacity-70'} />
            <span className="hidden sm:inline">Activity</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-4 sm:px-6 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px font-medium whitespace-nowrap ${
              activeTab === 'notifications'
                ? 'text-indigo-600 border-b-indigo-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            onClick={() => setActiveTab('notifications')}
          >
            <div className="relative">
              <Bell size={20} className={activeTab === 'notifications' ? 'opacity-100' : 'opacity-70'} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Notif</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-4 sm:px-6 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px font-medium whitespace-nowrap ${
              activeTab === 'preferences'
                ? 'text-indigo-600 border-b-indigo-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            <Settings size={20} className={activeTab === 'preferences' ? 'opacity-100' : 'opacity-70'} />
            <span className="hidden sm:inline">Settings</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-4 sm:px-6 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px font-medium whitespace-nowrap ${
              activeTab === 'security'
                ? 'text-indigo-600 border-b-indigo-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            onClick={() => setActiveTab('security')}
          >
            <Key size={20} className={activeTab === 'security' ? 'opacity-100' : 'opacity-70'} />
            <span className="hidden sm:inline">Security</span>
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 px-0 pb-0 lg:px-8 lg:py-8">
          {/* Content Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-none lg:rounded-2xl p-6 sm:p-8 lg:p-10 lg:max-w-[65vw] shadow-none lg:shadow-xl lg:border lg:border-slate-100">
            {/* Profile Section */}
            {activeTab === 'profile' && (
              <div>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">Profile Settings</h2>
                  <p className="text-slate-500">Manage your account information</p>
                </div>

                {/* Profile Picture Section */}
                <div className="flex flex-col items-center mb-10 pb-10 border-b border-slate-100">
                  <div className="relative group">
                    <div className="w-[120px] sm:w-[140px] lg:w-[180px] h-[120px] sm:h-[140px] lg:h-[180px] rounded-full overflow-hidden mb-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl ring-4 ring-white">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
                      )}
                    </div>
                    <label
                      htmlFor="file-upload"
                      className="absolute bottom-6 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg border-4 border-white hover:bg-indigo-50 transition-all duration-300 group-hover:scale-110"
                    >
                      <Camera size={20} className="text-indigo-600" />
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-sm text-slate-500 text-center">Click the camera icon to update your profile picture</p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-6 lg:gap-7 mb-10">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
                      <User size={16} className="text-indigo-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
                      <AtSign size={16} className="text-indigo-600" />
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Choose a username"
                      className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
                      <Mail size={16} className="text-indigo-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      disabled
                      className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base bg-slate-50 text-slate-500 cursor-not-allowed transition-all duration-300 placeholder:text-slate-400"
                    />
                    <p className="text-xs text-slate-500 mt-1">Email cannot be changed for security reasons</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="bio" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
                      <FileText size={16} className="text-indigo-600" />
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself..."
                      rows="4"
                      className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300 resize-none"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex items-center gap-4">
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    onClick={handleSave}
                    disabled={saveStatus === 'saving'}
                  >
                    {saveStatus === 'saving' && (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {saveStatus === 'success' && <Check size={20} />}
                    {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : 'Save Changes'}
                  </button>
                  {saveStatus === 'success' && (
                    <span className="text-green-600 font-medium text-sm flex items-center gap-2 animate-fade-in">
                      <Check size={16} />
                      Changes saved successfully
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Activity & Stats Section */}
            {activeTab === 'activity' && (
              <div>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">Activity & Statistics</h2>
                  <p className="text-slate-500">Track your engagement and activity over time</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {/* Posts Count */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <FileText size={24} className="text-indigo-600" />
                      </div>
                      <span className="text-3xl font-bold text-indigo-600">{activityStats.postsCount}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-1">Total Posts</h3>
                    <p className="text-xs text-slate-500">Articles you've published</p>
                  </div>

                  {/* Likes Count */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Heart size={24} className="text-pink-600" />
                      </div>
                      <span className="text-3xl font-bold text-pink-600">{activityStats.likesCount.toLocaleString()}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-1">Total Likes</h3>
                    <p className="text-xs text-slate-500">Appreciation from readers</p>
                  </div>

                  {/* Comments Count */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <MessageCircle size={24} className="text-purple-600" />
                      </div>
                      <span className="text-3xl font-bold text-purple-600">{activityStats.commentsCount}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-1">Comments</h3>
                    <p className="text-xs text-slate-500">Conversations started</p>
                  </div>

                  {/* Last Active */}
                  <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6 border border-violet-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Clock size={24} className="text-violet-600" />
                      </div>
                      <span className="text-xl font-bold text-violet-600">{activityStats.lastActive}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-1">Last Active</h3>
                    <p className="text-xs text-slate-500">Your most recent activity</p>
                  </div>

                  {/* Reading Time */}
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <BookOpen size={24} className="text-emerald-600" />
                      </div>
                      <span className="text-3xl font-bold text-emerald-600">{activityStats.totalReadingTime}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-1">Total Reading Time</h3>
                    <p className="text-xs text-slate-500">Combined time readers spent on your content</p>
                  </div>
                </div>

                {/* Activity Timeline */}
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Activity size={20} className="text-indigo-600" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText size={18} className="text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-800 mb-1">Published a new post</p>
                        <p className="text-xs text-slate-500 mb-2">"Getting Started with React Hooks"</p>
                        <span className="text-xs text-slate-400">2 hours ago</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart size={18} className="text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-800 mb-1">Received 45 new likes</p>
                        <p className="text-xs text-slate-500 mb-2">On your post about JavaScript</p>
                        <span className="text-xs text-slate-400">5 hours ago</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={18} className="text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-800 mb-1">New comment on your post</p>
                        <p className="text-xs text-slate-500 mb-2">"Great article! Very helpful tips..."</p>
                        <span className="text-xs text-slate-400">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Section */}
            {activeTab === 'notifications' && (
              <div>
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">Notifications</h2>
                      <p className="text-slate-500">
                        {unreadCount > 0 ? (
                          <span className="font-medium text-indigo-600">{unreadCount} unread notifications</span>
                        ) : (
                          "You're all caught up!"
                        )}
                      </p>
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={handleMarkAllAsRead}
                        className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                      >
                        <Check size={16} />
                        Mark all read
                      </button>
                    )}
                  </div>
                </div>

                {/* Notifications List */}
                <div className="space-y-3">
                  {notifications.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bell size={32} className="text-indigo-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">No notifications yet</h3>
                      <p className="text-slate-500">When you get notifications, they'll show up here</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`group relative bg-white border rounded-2xl p-5 transition-all duration-200 hover:shadow-md ${
                          notification.read ? 'border-slate-200' : 'border-indigo-200 bg-gradient-to-r from-indigo-50/50 to-purple-50/50'
                        }`}
                      >
                        {/* Unread Indicator */}
                        {!notification.read && (
                          <div className="absolute top-5 right-5">
                            <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                          </div>
                        )}

                        <div className="flex gap-4">
                          {/* Avatar */}
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                              notification.type === 'comment' 
                                ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                                : 'bg-gradient-to-br from-indigo-500 to-purple-500'
                            }`}>
                              {notification.user.avatar ? (
                                <img src={notification.user.avatar} alt={notification.user.name} className="w-full h-full object-cover rounded-full" />
                              ) : (
                                getInitials(notification.user.name)
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-slate-900">{notification.user.name}</span>
                                {notification.type === 'comment' ? (
                                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-purple-100 rounded-full">
                                    <MessageCircle size={12} className="text-purple-600" />
                                    <span className="text-xs font-medium text-purple-700">commented</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-pink-100 rounded-full">
                                    <Heart size={12} className="text-pink-600" />
                                    <span className="text-xs font-medium text-pink-700">liked</span>
                                  </div>
                                )}
                              </div>
                              <span className="text-xs text-slate-400 whitespace-nowrap">{notification.timestamp}</span>
                            </div>

                            <p className="text-sm text-slate-600 mb-2">
                              <span className="font-medium text-slate-800">"{notification.articleTitle}"</span>
                            </p>

                            {notification.comment && (
                              <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mb-3">
                                <p className="text-sm text-slate-700 italic">"{notification.comment}"</p>
                              </div>
                            )}

                            {/* Actions */}
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              {!notification.read && (
                                <button
                                  onClick={() => handleMarkAsRead(notification.id)}
                                  className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-100 transition-colors"
                                >
                                  <Check size={14} />
                                  Mark as read
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteNotification(notification.id)}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                              >
                                <Trash2 size={14} />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Mobile Mark All Read Button */}
                {unreadCount > 0 && (
                  <div className="flex sm:hidden justify-center mt-6">
                    <button
                      onClick={handleMarkAllAsRead}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700"
                    >
                      <Check size={16} />
                      Mark all as read
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Preferences Section */}
            {activeTab === 'preferences' && (
              <div>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">Preferences</h2>
                  <p className="text-slate-500">Customize your experience and settings</p>
                </div>

                <div className="space-y-4 mb-10">
                  {/* Email Notifications */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <div className="flex items-center gap-3">
                      <Bell size={20} className="text-indigo-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">Email Notifications</p>
                        <p className="text-xs text-slate-500">Receive updates about your account</p>
                      </div>
                    </div>
                    <label className="relative inline-block w-12 h-6 cursor-pointer">
                      <input
                        type="checkbox"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-indigo-600 transition-all duration-300"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6 shadow-md"></div>
                    </label>
                  </div>

                  {/* Language Selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="language" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
                      <Globe size={16} className="text-purple-600" />
                      Language
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 hover:border-slate-300 cursor-pointer"
                    >
                      <option value="en">English</option>
                      <option value="th">ไทย (Thai)</option>
                      <option value="ja">日本語 (Japanese)</option>
                      <option value="zh">中文 (Chinese)</option>
                    </select>
                  </div>

                  {/* Theme Selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="theme" className="text-sm text-slate-700 font-semibold flex items-center gap-2">
                      <Moon size={16} className="text-purple-600" />
                      Theme
                    </label>
                    <select
                      id="theme"
                      name="theme"
                      value={formData.theme}
                      onChange={handleInputChange}
                      className="px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 hover:border-slate-300 cursor-pointer"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>

                  {/* Auto Save */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3">
                      <Zap size={20} className="text-purple-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">Auto-save drafts</p>
                        <p className="text-xs text-slate-500">Automatically save your work</p>
                      </div>
                    </div>
                    <label className="relative inline-block w-12 h-6 cursor-pointer">
                      <input
                        type="checkbox"
                        name="autoSave"
                        checked={formData.autoSave}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-purple-600 transition-all duration-300"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6 shadow-md"></div>
                    </label>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex items-center gap-4">
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    onClick={handleSave}
                    disabled={saveStatus === 'saving'}
                  >
                    {saveStatus === 'saving' && (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {saveStatus === 'success' && <Check size={20} />}
                    {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : 'Save Preferences'}
                  </button>
                  {saveStatus === 'success' && (
                    <span className="text-green-600 font-medium text-sm flex items-center gap-2 animate-fade-in">
                      <Check size={16} />
                      Preferences saved
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Security Section */}
            {activeTab === 'security' && (
              <div>
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">Security Settings</h2>
                  <p className="text-slate-500">Update your password and security preferences</p>
                </div>

                {/* Security Info Box */}
                <div className="mb-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl flex items-start gap-3">
                  <Shield size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-indigo-900 mb-1">Password Security Tips</p>
                    <ul className="text-xs text-indigo-700 space-y-1">
                      <li>• Use at least 8 characters</li>
                      <li>• Include uppercase and lowercase letters</li>
                      <li>• Add numbers and special characters</li>
                      <li>• Avoid common words or patterns</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-6 lg:gap-7 mb-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="currentPassword" className="text-sm text-slate-700 font-semibold">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword.current ? 'text' : 'password'}
                        id="currentPassword"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter current password"
                        className="w-full px-4 py-3.5 pr-12 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('current')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="newPassword" className="text-sm text-slate-700 font-semibold">New Password</label>
                    <div className="relative">
                      <input
                        type={showPassword.new ? 'text' : 'password'}
                        id="newPassword"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter new password"
                        className="w-full px-4 py-3.5 pr-12 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('new')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {/* Password Strength Indicator */}
                    {passwordData.newPassword && (
                      <div className="mt-2">
                        <div className="flex gap-1 mb-2">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                level <= passwordStrength ? getPasswordStrengthColor() : 'bg-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                        <p className={`text-xs font-medium ${
                          passwordStrength === 1 ? 'text-red-600' :
                          passwordStrength === 2 ? 'text-orange-600' :
                          passwordStrength === 3 ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {getPasswordStrengthText() && `Password strength: ${getPasswordStrengthText()}`}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword" className="text-sm text-slate-700 font-semibold">Confirm New Password</label>
                    <div className="relative">
                      <input
                        type={showPassword.confirm ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        placeholder="Confirm new password"
                        className="w-full px-4 py-3.5 pr-12 border-2 border-slate-200 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder:text-slate-400 hover:border-slate-300"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('confirm')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {/* Password Match Indicator */}
                    {passwordData.confirmPassword && (
                      <div className="mt-1 flex items-center gap-2">
                        {passwordData.newPassword === passwordData.confirmPassword ? (
                          <>
                            <Check size={16} className="text-green-600" />
                            <p className="text-xs font-medium text-green-600">Passwords match</p>
                          </>
                        ) : (
                          <>
                            <X size={16} className="text-red-600" />
                            <p className="text-xs font-medium text-red-600">Passwords do not match</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Reset Password Button */}
                <div className="flex items-center gap-4">
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    onClick={handleResetPassword}
                    disabled={saveStatus === 'saving'}
                  >
                    {saveStatus === 'saving' && (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {saveStatus === 'success' && <Check size={20} />}
                    {saveStatus === 'saving' ? 'Updating...' : saveStatus === 'success' ? 'Updated!' : 'Update Password'}
                  </button>
                  {saveStatus === 'success' && (
                    <span className="text-green-600 font-medium text-sm flex items-center gap-2 animate-fade-in">
                      <Check size={16} />
                      Password updated successfully
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MemberPage;