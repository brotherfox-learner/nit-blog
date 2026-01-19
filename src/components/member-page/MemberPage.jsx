import { useState } from 'react';
import { User, Key, Bell, ChevronDown } from 'lucide-react';
import Header from '../layout/NavBar'

const MemberPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: 'Moodeng ja',
    username: 'moodeng.cute',
    email: 'moodeng.cute@gmail.com'
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

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
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving profile:', formData);
    // TODO: Implement save functionality
  };

  const handleResetPassword = () => {
    console.log('Resetting password:', passwordData);
    // TODO: Implement password reset functionality
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* Desktop Header */}
      <Header />
      <header className="hidden lg:flex justify-between items-center px-12 py-4 bg-white border-b border-[#e0e0e0]">
        <h1 className="text-2xl font-semibold text-[#333] m-0">hh.</h1>
        <div className="flex items-center gap-6">
          <button className="bg-transparent border-none cursor-pointer p-2 text-[#666] transition-colors duration-300 hover:text-[#333]">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#f5f5f5]">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#ddd]">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2]"></div>
              )}
            </div>
            <span className="text-[0.95rem] font-medium text-[#333]">{formData.name}</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex lg:hidden justify-between items-center px-6 py-4 bg-[#f5f5f5]">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#333] m-0">hh.</h1>
        <button className="bg-transparent border-none cursor-pointer p-2 flex flex-col gap-1">
          <div className="w-6 h-0.5 bg-[#333] rounded-sm"></div>
          <div className="w-6 h-0.5 bg-[#333] rounded-sm"></div>
          <div className="w-6 h-0.5 bg-[#333] rounded-sm"></div>
        </button>
      </header>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-73px)]">
        {/* Sidebar - Desktop Only */}
        <aside className="hidden lg:block w-[280px] bg-white border-r border-[#e0e0e0] py-8">
          <div className="flex flex-col items-center px-6 pb-8 border-b border-[#e0e0e0] mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#ddd] mb-4">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2]"></div>
              )}
            </div>
            <h2 className="text-lg font-semibold text-[#333] m-0 mb-2">{formData.name}</h2>
            <span className="px-3 py-1 bg-[#f5f5f5] border border-[#e0e0e0] rounded-full text-sm text-[#666]">
              {activeTab === 'profile' ? 'Profile' : 'Reset password'}
            </span>
          </div>

          <nav className="flex flex-col gap-2 px-4">
            <button
              className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-lg transition-all duration-300 text-left ${activeTab === 'profile'
                ? 'bg-[#f5f5f5] text-[#333] font-medium'
                : 'text-[#666] hover:bg-[#f5f5f5] hover:text-[#333]'
                }`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} className={activeTab === 'profile' ? 'opacity-100' : 'opacity-70'} />
              <span>Profile</span>
            </button>
            <button
              className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-lg transition-all duration-300 text-left ${activeTab === 'reset-password'
                ? 'bg-[#f5f5f5] text-[#333] font-medium'
                : 'text-[#666] hover:bg-[#f5f5f5] hover:text-[#333]'
                }`}
              onClick={() => setActiveTab('reset-password')}
            >
              <Key size={18} className={activeTab === 'reset-password' ? 'opacity-100' : 'opacity-70'} />
              <span>Reset password</span>
            </button>
          </nav>
        </aside>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden gap-0 px-6 mb-6 border-b border-[#e0e0e0]">
          <button
            className={`flex items-center gap-2 px-4 py-3.5 sm:px-6 sm:py-4 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px ${activeTab === 'profile'
              ? 'text-[#333] border-b-[#333]'
              : 'text-[#999] hover:text-[#666]'
              }`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={20} className={activeTab === 'profile' ? 'opacity-100' : 'opacity-70'} />
            <span className="hidden sm:inline">Profile</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-3.5 sm:px-6 sm:py-4 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px ${activeTab === 'reset-password'
              ? 'text-[#333] border-b-[#333]'
              : 'text-[#999] hover:text-[#666]'
              }`}
            onClick={() => setActiveTab('reset-password')}
          >
            <Key size={20} className={activeTab === 'reset-password' ? 'opacity-100' : 'opacity-70'} />
            <span className="hidden sm:inline">Reset password</span>
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 px-0 pb-0 lg:px-8 lg:py-8 ">
          {/* Content Card */}
          <div className="bg-white rounded-none lg:rounded-xl p-6 sm:p-8 lg:p-10 lg:max-w-[65vw] shadow-none lg:shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            {/* Profile Section */}
            {activeTab === 'profile' && (
              <div>
                {/* Profile Picture Section */}
                <div className="flex flex-col items-center mb-8 pb-8 border-b border-[#f0f0f0]">
                  <div className="w-[100px] sm:w-[120px] lg:w-[160px] h-[100px] sm:h-[120px] lg:h-[160px] rounded-full overflow-hidden mb-6 bg-[#ddd] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2]"></div>
                    )}
                  </div>
                  <label
                    htmlFor="file-upload"
                    className="px-6 sm:px-8 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-white border-2 border-[#333] rounded-full text-xs sm:text-sm lg:text-[0.95rem] font-medium text-[#333] cursor-pointer transition-all duration-300 hover:bg-[#333] hover:text-white"
                  >
                    Upload profile picture
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* Form Fields */}
                <div className="flex flex-col justify-center items-center gap-6 lg:gap-8 mb-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-[#666] font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Moodeng ja"
                      className="px-4 py-3.5 border border-[#e0e0e0] rounded-lg text-base text-[#333] bg-white transition-all duration-300 focus:outline-none focus:border-[#333] focus:shadow-[0_0_0_3px_rgba(51,51,51,0.1)] placeholder:text-[#bbb] lg:w-[50vw] max-lg:w-[60vw]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-sm text-[#666] font-medium">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="moodeng.cute"
                      className="px-4 py-3.5 border border-[#e0e0e0] rounded-lg text-base text-[#333] bg-white transition-all duration-300 focus:outline-none focus:border-[#333] focus:shadow-[0_0_0_3px_rgba(51,51,51,0.1)] placeholder:text-[#bbb] lg:w-[50vw] max-lg:w-[60vw]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-[#666] font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="moodeng.cute@gmail.com"
                      disabled
                      className="px-4 py-3.5 border border-[#e0e0e0] rounded-lg text-base bg-[#f9f9f9] text-[#999] cursor-not-allowed transition-all duration-300 placeholder:text-[#bbb] lg:w-[50vw] max-lg:w-[60vw]"
                    />
                  </div>
                  {/* Save Button */}
                  <button
                    className="px-6 sm:px-10 lg:px-10 py-4 bg-[#333] text-white border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 lg:w-[20vw] w-full max-lg:w-[45vw] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-black hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] active:translate-y-0"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>


              </div>
            )}

            {/* Reset Password Section */}
            {activeTab === 'reset-password' && (
              <div>
                <div className="flex flex-col gap-6 lg:gap-8 mb-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="currentPassword" className="text-sm text-[#666] font-medium">Current password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      placeholder="Current password"
                      className="px-4 py-3.5 border border-[#e0e0e0] rounded-lg text-base text-[#333] bg-white transition-all duration-300 focus:outline-none focus:border-[#333] focus:shadow-[0_0_0_3px_rgba(51,51,51,0.1)] placeholder:text-[#bbb]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="newPassword" className="text-sm text-[#666] font-medium">New password</label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="New password"
                      className="px-4 py-3.5 border border-[#e0e0e0] rounded-lg text-base text-[#333] bg-white transition-all duration-300 focus:outline-none focus:border-[#333] focus:shadow-[0_0_0_3px_rgba(51,51,51,0.1)] placeholder:text-[#bbb]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword" className="text-sm text-[#666] font-medium">Confirm new password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Confirm new password"
                      className="px-4 py-3.5 border border-[#e0e0e0] rounded-lg text-base text-[#333] bg-white transition-all duration-300 focus:outline-none focus:border-[#333] focus:shadow-[0_0_0_3px_rgba(51,51,51,0.1)] placeholder:text-[#bbb]"
                    />
                  </div>
                </div>

                {/* Reset Password Button */}
                <button
                  className="px-6 sm:px-10 lg:px-10 py-4 bg-[#333] text-white border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 self-start w-full sm:w-auto shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-black hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] active:translate-y-0"
                  onClick={handleResetPassword}
                >
                  Reset password
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MemberPage;
