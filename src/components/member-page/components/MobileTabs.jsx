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
    <nav className="mx-4 mt-4 flex gap-1 overflow-x-auto rounded-2xl border border-neutral-200/90 bg-white p-1.5 text-neutral-600 shadow-sm sm:mx-5 lg:hidden">
      {tabs.map(({ id, icon: Icon, label, hasNotification }) => (
        <button
          key={id}
          className={`relative flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200 sm:px-4 sm:text-[0.95rem] ${
            activeTab === id
              ? 'bg-neutral-100 text-neutral-900'
              : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800'
          }`}
          onClick={() => setActiveTab(id)}
        >
          <div className="relative">
            <Icon size={18} className={activeTab === id ? 'opacity-100' : 'opacity-70'} />
            {hasNotification && unreadCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-neutral-800 text-[9px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </div>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
