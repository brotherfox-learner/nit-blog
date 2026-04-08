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
        return { icon: MessageCircle, label: "commented", bg: "bg-neutral-100", color: "text-neutral-600", iconColor: "text-neutral-500" };
      case "like":
        return { icon: Heart, label: "liked", bg: "bg-neutral-100", color: "text-neutral-600", iconColor: "text-neutral-500" };
      case "new_post":
        return { icon: FileText, label: "new post", bg: "bg-neutral-100", color: "text-neutral-600", iconColor: "text-neutral-500" };
      case "post_update":
        return { icon: RefreshCw, label: "updated", bg: "bg-neutral-100", color: "text-neutral-600", iconColor: "text-neutral-500" };
      default:
        return { icon: Bell, label: "notification", bg: "bg-neutral-100", color: "text-neutral-600", iconColor: "text-neutral-500" };
    }
  };

  const getAvatarGradient = () => {
    return "bg-gradient-to-br from-neutral-300 to-neutral-400";
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
    <div className="space-y-8">
      <header className="border-b border-neutral-100 pb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Inbox
            </p>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Notifications
            </h2>
            <p className="text-[0.98rem] leading-relaxed text-neutral-500">
              {unreadCount > 0 ? (
                <span className="font-medium text-neutral-800">{unreadCount} unread notifications</span>
              ) : (
                "You're all caught up!"
              )}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="hidden shrink-0 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 sm:flex"
            >
              <Check size={16} />
              Mark all read
            </button>
          )}
        </div>
      </header>

      <section className="space-y-3">
        {isLoading ? (
          <div className="py-16 text-center">
            <p className="text-neutral-500">Loading notifications...</p>
          </div>
        ) : notifications.length === 0 ? (
          <div className="rounded-2xl border border-neutral-100 bg-neutral-50/80 py-16 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
              <Bell size={32} className="text-neutral-400" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-neutral-900">No notifications yet</h3>
            <p className="text-neutral-500">When you get notifications, they'll show up here.</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <article
              key={notification.id}
              className={`group relative rounded-2xl border p-5 transition-shadow duration-200 hover:shadow-sm ${
                notification.is_read
                  ? 'border-neutral-100 bg-white'
                  : 'border-neutral-200 bg-neutral-50/90'
              }`}
            >
              {!notification.is_read && (
                <div className="absolute right-5 top-5">
                  <div className="h-2 w-2 rounded-full bg-neutral-400"></div>
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
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm ${getAvatarGradient()}`}
                      >
                        {notification.actor?.avatar ? (
                          <img
                            src={notification.actor.avatar}
                            alt={notification.actor.name || "User"}
                            className="h-full w-full rounded-full object-cover"
                          />
                        ) : (
                          getInitials(notification.actor?.name)
                        )}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-neutral-900">
                            {notification.actor?.name || notification.actor?.username || "Someone"}
                          </span>
                          <div className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 ${badge.bg}`}>
                            <BadgeIcon size={12} className={badge.iconColor} />
                            <span className={`text-xs font-medium ${badge.color}`}>{badge.label}</span>
                          </div>
                        </div>
                        <span className="whitespace-nowrap text-xs text-neutral-400">
                          {formatDistanceToNow(notification.created_at)}
                        </span>
                      </div>

                      {extraMsg && (
                        <p className="mb-1 text-sm text-neutral-600">{extraMsg}</p>
                      )}

                      {notification.post_title && (
                        <p className="mb-2 text-sm text-neutral-600">
                          <span className="font-medium text-neutral-800">&quot;{notification.post_title}&quot;</span>
                        </p>
                      )}

                      {notification.comment_text && (
                        <div className="mb-3 rounded-xl border border-neutral-100 bg-white p-3">
                          <p className="text-sm italic text-neutral-700">&quot;{notification.comment_text}&quot;</p>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-2 pt-1 opacity-100 transition-opacity duration-200 sm:opacity-70 sm:group-hover:opacity-100">
                        {!notification.is_read && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
                          >
                            <Check size={14} />
                            Mark as read
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteNotification(notification.id)}
                          className="flex items-center gap-1.5 rounded-lg bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-500 transition-colors hover:bg-red-50 hover:text-red-600"
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
        <footer className="mt-6 flex justify-center sm:hidden">
          <button
            onClick={handleMarkAllAsRead}
            className="flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-neutral-800"
          >
            <Check size={16} />
            Mark all as read
          </button>
        </footer>
      )}
    </div>
  );
}
