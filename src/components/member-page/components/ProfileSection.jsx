import { User, AtSign, Mail, FileText, Camera, Check } from 'lucide-react';
import { getProfileFallbackLetter } from '../utils/helpers';

export default function ProfileSection({
  formData,
  profileImage,
  formError,
  saveStatus,
  handleInputChange,
  handleImageUpload,
  handleSave
}) {
  const fallbackLetter = getProfileFallbackLetter(formData.name, formData.username);

  return (
    <div className="space-y-8">
      <header className="border-b border-neutral-100 pb-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Account
        </p>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Profile Settings
        </h2>
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-neutral-500">
          Keep your public profile clean and recognizable. This is the version readers and teammates will see first.
        </p>
      </header>

      <section className="grid gap-6 rounded-2xl border border-neutral-100 bg-neutral-50/70 p-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center lg:p-8">
        <div className="flex flex-col items-center">
          <div className="group relative">
            <div
              className="relative mb-5 flex h-[136px] w-[136px] items-center justify-center overflow-hidden rounded-full bg-neutral-200 ring-4 ring-white sm:h-[156px] sm:w-[156px] lg:h-[180px] lg:w-[180px]"
              role={profileImage ? undefined : 'img'}
              aria-label={
                profileImage
                  ? undefined
                  : formData.name
                    ? `Profile photo placeholder: ${formData.name}`
                    : 'Profile photo placeholder'
              }
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt={formData.name ? `${formData.name} profile` : 'Profile'}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span
                  className="select-none text-5xl font-semibold tracking-tight text-neutral-500 sm:text-6xl lg:text-7xl"
                  aria-hidden
                >
                  {fallbackLetter}
                </span>
              )}
            </div>
            <label
              htmlFor="file-upload"
              className="absolute bottom-5 right-1 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-neutral-800 text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-neutral-900"
            >
              <Camera size={20} className="text-white" />
            </label>
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-center text-sm text-neutral-500">
            Upload a clear photo for your account card and comments.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">Profile identity</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">Make the account feel polished</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Display</p>
              <p className="mt-2 text-sm font-medium text-neutral-900">{formData.name || "Add your full name"}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Username</p>
              <p className="mt-2 text-sm font-medium text-neutral-900">@{formData.username || "choose-one"}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Email</p>
              <p className="mt-2 truncate text-sm font-medium text-neutral-900">{formData.email || "No email yet"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2 lg:gap-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <User size={16} className="text-neutral-400" />
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <AtSign size={16} className="text-neutral-400" />
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Choose a username"
            className={`rounded-xl border bg-white px-4 py-3.5 text-base text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:outline-none focus:ring-2 ${
              formError ? 'border-red-400 focus:border-red-500 focus:ring-red-50' : 'border-neutral-200 focus:border-neutral-400 focus:ring-neutral-100'
            }`}
          />
          {formError && (
            <p className="mt-1 text-sm font-medium text-red-600">{formError}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <Mail size={16} className="text-neutral-400" />
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
            className="cursor-not-allowed rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5 text-base text-neutral-500 placeholder:text-neutral-400"
          />
          <p className="mt-1 text-xs text-neutral-500">
            Email cannot be changed for security reasons.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="bio" className="flex items-center gap-2 text-sm font-medium text-neutral-800">
            <FileText size={16} className="text-neutral-400" />
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Tell us about yourself..."
            rows="4"
            className="resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
          />
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-neutral-100 pt-6 sm:flex-row sm:items-center">
        <button
          className="flex items-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' && (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          )}
          {saveStatus === 'success' && <Check size={20} />}
          {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : 'Save Changes'}
        </button>
        {saveStatus === 'success' && (
          <span className="flex items-center gap-2 text-sm font-medium text-neutral-600 animate-fade-in">
            <Check size={16} />
            Changes saved successfully
          </span>
        )}
      </footer>
    </div>
  );
}
