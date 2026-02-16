import { User, AtSign, Mail, FileText, Camera, Check } from 'lucide-react';

export default function ProfileSection({
  formData,
  profileImage,
  formError,
  saveStatus,
  handleInputChange,
  handleImageUpload,
  handleSave
}) {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Profile Settings
        </h2>
        <p className="text-slate-500">Manage your account information</p>
      </header>

      <section className="flex flex-col items-center mb-10 pb-10 border-b border-slate-100">
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
        <p className="text-sm text-slate-500 text-center">
          Click the camera icon to update your profile picture
        </p>
      </section>

      <section className="flex flex-col gap-6 lg:gap-7 mb-10">
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
            className={`px-4 py-3.5 border-2 rounded-xl text-base text-slate-800 bg-white transition-all duration-300 focus:outline-none focus:ring-4 placeholder:text-slate-400 hover:border-slate-300 ${
              formError ? 'border-red-500 focus:border-red-500 focus:ring-red-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-50'
            }`}
          />
          {formError && (
            <p className="mt-1 text-sm text-red-600 font-medium">{formError}</p>
          )}
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
          <p className="text-xs text-slate-500 mt-1">
            Email cannot be changed for security reasons
          </p>
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
      </section>

      <footer className="flex items-center gap-4">
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
      </footer>
    </div>
  );
}
