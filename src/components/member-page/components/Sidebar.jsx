import { User, Activity, Bell, Settings, Key } from 'lucide-react';
import { getProfileFallbackLetter } from '../utils/helpers';

export default function Sidebar({
  activeTab,
  setActiveTab,
  formData,
  profileImage,
  unreadCount,
  activityStats
}) {
  const navItems = [
    { id: 'profile', icon: User, label: 'Profile Settings' },
    { id: 'activity', icon: Activity, label: 'Activity & Stats' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'preferences', icon: Settings, label: 'Preferences' },
    { id: 'security', icon: Key, label: 'Security' }
  ];

  const fallbackLetter = getProfileFallbackLetter(formData.name, formData.username);

  return (
    <aside className="hidden lg:flex lg:w-[300px] lg:shrink-0 lg:flex-col lg:py-8 lg:pr-5">
      <div className="sticky top-24 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white px-5 py-6 shadow-sm">
        <section className="mb-6 flex flex-col items-center border-b border-neutral-100 pb-6">
          <div
            className="relative mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-neutral-200 ring-2 ring-neutral-100 ring-offset-2 ring-offset-white"
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
              <span className="select-none text-2xl font-semibold text-neutral-500" aria-hidden>
                {fallbackLetter}
              </span>
            )}
          </div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
            Member
          </p>
          <h2 className="mb-0.5 text-center text-lg font-semibold tracking-tight text-neutral-900">
            {formData.name || 'Your profile'}
          </h2>
          <p className="mb-3 text-sm text-neutral-500">@{formData.username || 'username'}</p>
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
            {navItems.find((item) => item.id === activeTab)?.label || 'Profile'}
          </span>
        </section>

        <nav className="mb-6 flex flex-col gap-1">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`group flex items-center gap-3 rounded-xl border px-3 py-3 text-left text-[0.95rem] transition-colors duration-200 ${
                activeTab === id
                  ? 'border-neutral-200 bg-neutral-50 font-medium text-neutral-900'
                  : 'border-transparent text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
              }`}
              onClick={() => setActiveTab(id)}
            >
              <div
                className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                  activeTab === id ? 'bg-white text-neutral-800 shadow-sm' : 'bg-neutral-100/80 text-neutral-500'
                }`}
              >
                <Icon
                  size={18}
                  className={`${
                    activeTab === id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                  } transition-opacity`}
                />
                {id === 'notifications' && unreadCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-neutral-800 text-[9px] font-bold text-white">
                    {unreadCount}
                  </span>
                )}
              </div>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <section className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-4 text-neutral-800">
          <div className="mb-2.5 flex items-center gap-2">
            <Activity size={15} className="text-neutral-500" />
            <span className="text-sm font-medium text-neutral-800">Quick stats</span>
          </div>
          <div className="space-y-2">
            {activityStats.role === 'admin' && (
              <>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Posts</span>
                  <span className="font-semibold tabular-nums text-neutral-800">{activityStats.postsCount}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Total likes</span>
                  <span className="font-semibold tabular-nums text-neutral-800">
                    {(activityStats.likesCount ?? 0).toLocaleString()}
                  </span>
                </div>
              </>
            )}
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-500">Comments</span>
              <span className="font-semibold tabular-nums text-neutral-800">{activityStats.commentsCount}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-500">Reading time</span>
              <span className="font-semibold tabular-nums text-neutral-800">{activityStats.totalReadingTime}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-500">Last active</span>
              <span className="font-medium text-neutral-700">{activityStats.lastActive}</span>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}
