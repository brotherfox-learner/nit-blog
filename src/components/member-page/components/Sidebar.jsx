import { User, Activity, Bell, Settings, Key } from 'lucide-react';

export default function Sidebar({
  activeTab,
  setActiveTab,
  formData,
  profileImage,
  unreadCount,
  activityStats
}) {
  const navItems = [
    { id: 'profile', icon: User, label: 'Profile Settings', emoji: '👤' },
    { id: 'activity', icon: Activity, label: 'Activity & Stats', emoji: '📊' },
    { id: 'notifications', icon: Bell, label: 'Notifications', emoji: '🔔' },
    { id: 'preferences', icon: Settings, label: 'Preferences (Coming Soon)', emoji: '⚙️' },
    { id: 'security', icon: Key, label: 'Security', emoji: '🔐' }
  ];

  const getActiveEmoji = () => {
    const active = navItems.find(item => item.id === activeTab);
    return active ? `${active.emoji} ${active.label.split(' ')[0]}` : '';
  };

  return (
    <aside className="hidden lg:block w-[320px] bg-white/90 backdrop-blur-lg border-r border-slate-200 py-8 shadow-sm">
      <section className="flex flex-col items-center px-6 pb-8 border-b border-slate-200 mb-6">
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
          {getActiveEmoji()}
        </span>
      </section>

      <nav className="flex flex-col gap-2 px-4 mb-6">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            className={`flex items-center gap-3 px-4 py-3.5 bg-transparent border-none text-[0.95rem] cursor-pointer rounded-xl transition-all duration-300 text-left group ${
              activeTab === id
                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold shadow-sm'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
            onClick={() => setActiveTab(id)}
          >
            <div className="relative">
              <Icon
                size={18}
                className={`${
                  activeTab === id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                } transition-opacity`}
              />
              {id === 'notifications' && unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <section className="px-6">
        <article className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={16} className="text-purple-600" />
            <span className="text-sm font-semibold text-slate-700">Quick Stats</span>
          </div>
          <div className="space-y-2">
            {activityStats.role === 'admin' && (
              <>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Posts</span>
                  <span className="font-bold text-purple-600">{activityStats.postsCount}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Total Likes</span>
                  <span className="font-bold text-purple-600">{(activityStats.likesCount ?? 0).toLocaleString()}</span>
                </div>
              </>
            )}
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">Comments</span>
              <span className="font-bold text-purple-600">{activityStats.commentsCount}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">Reading Time</span>
              <span className="font-bold text-purple-600">{activityStats.totalReadingTime}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">Last Active</span>
              <span className="font-semibold text-slate-700">{activityStats.lastActive}</span>
            </div>
          </div>
        </article>
      </section>
    </aside>
  );
}
