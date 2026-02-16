import { Bell, Check, Trash2, MessageCircle, Heart, FileText, RefreshCw } from 'lucide-react';
import { formatDistanceToNow } from '@/lib/utils';

export default function NotificationsSection({
  notifications,
  unreadCount,
  isLoading,
  handleMarkAsRead,
  handleMarkAllAsRead,
  handleDeleteNotification
}) {

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case "comment":
        return { icon: MessageCircle, label: "commented", bg: "bg-purple-100", color: "text-purple-700", iconColor: "text-purple-600" };
      case "like":
        return { icon: Heart, label: "liked", bg: "bg-pink-100", color: "text-pink-700", iconColor: "text-pink-600" };
      case "new_post":
        return { icon: FileText, label: "new post", bg: "bg-indigo-100", color: "text-indigo-700", iconColor: "text-indigo-600" };
      case "post_update":
        return { icon: RefreshCw, label: "updated", bg: "bg-amber-100", color: "text-amber-700", iconColor: "text-amber-600" };
      default:
        return { icon: Bell, label: "notification", bg: "bg-gray-100", color: "text-gray-700", iconColor: "text-gray-600" };
    }
  };

  const getAvatarGradient = (type) => {
    switch (type) {
      case "comment": return "bg-gradient-to-br from-purple-500 to-pink-500";
      case "like": return "bg-gradient-to-br from-pink-500 to-red-500";
      case "new_post": return "bg-gradient-to-br from-indigo-500 to-blue-500";
      case "post_update": return "bg-gradient-to-br from-amber-500 to-orange-500";
      default: return "bg-gradient-to-br from-indigo-500 to-purple-500";
    }
  };

  const getNotificationMessage = (notification) => {
    const actorName = notification.actor?.name || notification.actor?.username || "Someone";
    switch (notification.type) {
      case "new_post":
        return `${actorName} published a new post`;
      case "post_update":
        return `${actorName} updated a post`;
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Notifications
            </h2>
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
      </header>

      <section className="space-y-3">
        {isLoading ? (
          <div className="text-center py-16">
            <p className="text-slate-500">Loading notifications...</p>
          </div>
        ) : notifications.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No notifications yet</h3>
            <p className="text-slate-500">When you get notifications, they'll show up here</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <article
              key={notification.id}
              className={`group relative bg-white border rounded-2xl p-5 transition-all duration-200 hover:shadow-md ${
                notification.is_read ? 'border-slate-200' : 'border-indigo-200 bg-gradient-to-r from-indigo-50/50 to-purple-50/50'
              }`}
            >
              {!notification.is_read && (
                <div className="absolute top-5 right-5">
                  <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                </div>
              )}

              {(() => {
                const badge = getTypeBadge(notification.type);
                const BadgeIcon = badge.icon;
                const extraMsg = getNotificationMessage(notification);
                return (
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${getAvatarGradient(notification.type)}`}
                      >
                        {notification.actor?.avatar ? (
                          <img
                            src={notification.actor.avatar}
                            alt={notification.actor.name || "User"}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          getInitials(notification.actor?.name)
                        )}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-slate-900">
                            {notification.actor?.name || notification.actor?.username || "Someone"}
                          </span>
                          <div className={`flex items-center gap-1.5 px-2 py-0.5 ${badge.bg} rounded-full`}>
                            <BadgeIcon size={12} className={badge.iconColor} />
                            <span className={`text-xs font-medium ${badge.color}`}>{badge.label}</span>
                          </div>
                        </div>
                        <span className="text-xs text-slate-400 whitespace-nowrap">
                          {formatDistanceToNow(notification.created_at)}
                        </span>
                      </div>

                      {extraMsg && (
                        <p className="text-sm text-slate-600 mb-1">{extraMsg}</p>
                      )}

                      {notification.post_title && (
                        <p className="text-sm text-slate-600 mb-2">
                          <span className="font-medium text-slate-800">&quot;{notification.post_title}&quot;</span>
                        </p>
                      )}

                      {notification.comment_text && (
                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mb-3">
                          <p className="text-sm text-slate-700 italic">&quot;{notification.comment_text}&quot;</p>
                        </div>
                      )}

                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {!notification.is_read && (
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
                );
              })()}
            </article>
          ))
        )}
      </section>

      {unreadCount > 0 && (
        <footer className="flex sm:hidden justify-center mt-6">
          <button
            onClick={handleMarkAllAsRead}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700"
          >
            <Check size={16} />
            Mark all as read
          </button>
        </footer>
      )}
    </div>
  );
}
