import { FileText, Folder, User, Bell, Lock, ExternalLink, LogOut } from "lucide-react";

const menuItems = [
  { id: "article", label: "Article management", icon: FileText },
  { id: "category", label: "Category management", icon: Folder },
  { id: "profile", label: "Profile", icon: User },
  { id: "notification", label: "Notification", icon: Bell },
  { id: "reset", label: "Reset password", icon: Lock },
];

const footerItems = [
  { id: "website", label: "hh. website", icon: ExternalLink, path: "/" },
  { id: "logout", label: "Log out", icon: LogOut, path: "/login" },
];

/**
 * AdminSidebar - Navigation sidebar component
 * Follows SRP - single responsibility for navigation
 * Uses loose coupling - communicates via onNavigate callback
 */
export function AdminSidebar({ activeItem = "article", onNavigate }) {
  const handleMenuClick = (e, itemId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <aside className="w-64 bg-[#F5F5F0] h-screen flex flex-col fixed left-0 top-0">
      {/* Header */}
      <header className="p-6 border-b border-gray-200">
        <div className="text-2xl font-semibold text-gray-800 mb-1">hh.</div>
        <div className="text-sm text-orange-500 font-medium">Admin panel</div>
      </header>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={(e) => handleMenuClick(e, item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 mx-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-200 text-gray-900 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="size-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Links */}
      <footer className="border-t border-gray-200 py-4">
        {footerItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.path}
              className="flex items-center gap-3 px-6 py-3 mx-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Icon className="size-5" />
              <span className="text-sm">{item.label}</span>
            </a>
          );
        })}
      </footer>
    </aside>
  );
}
