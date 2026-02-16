import { User, Activity, Bell, Settings, Key } from 'lucide-react';

export default function MobileTabs({ activeTab, setActiveTab, unreadCount }) {
  const tabs = [
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'activity', icon: Activity, label: 'Activity' },
    { id: 'notifications', icon: Bell, label: 'Notif', hasNotification: true },
    { id: 'preferences', icon: Settings, label: 'Settings' },
    { id: 'security', icon: Key, label: 'Security' }
  ];

  return (
    <nav className="flex lg:hidden gap-0 px-4 mb-6 border-b border-slate-200 bg-white/90 backdrop-blur-lg overflow-x-auto">
      {tabs.map(({ id, icon: Icon, label, hasNotification }) => (
        <button
          key={id}
          className={`flex items-center gap-2 px-4 py-4 sm:px-6 bg-transparent border-none text-sm sm:text-[0.95rem] cursor-pointer border-b-2 border-transparent transition-all duration-300 relative -bottom-px font-medium whitespace-nowrap ${
            activeTab === id
              ? 'text-indigo-600 border-b-indigo-600'
              : 'text-slate-500 hover:text-slate-700'
          }`}
          onClick={() => setActiveTab(id)}
        >
          <div className="relative">
            <Icon size={20} className={activeTab === id ? 'opacity-100' : 'opacity-70'} />
            {hasNotification && unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </div>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </nav>
  );
}
