/**
 * Notification - Admin notification list component
 * ใช้ข้อมูลจริงจาก API แทน dummy data
 */
import { useNotifications } from "@/hooks/useNotifications";
import { Bell, Check, Trash2, MessageCircle, Heart, FileText, RefreshCw } from "lucide-react";
import { formatDistanceToNow } from "@/lib/utils";

export function Notification() {
  const {
    notifications,
    unreadCount,
    isLoading,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
  } = useNotifications();

  const getNotificationText = (notification) => {
    const actorName = notification.actor?.name || notification.actor?.username || "Someone";
    if (notification.type === "comment") {
      return (
        <>
          <strong>{actorName}</strong>{" "}
          <strong>commented on your article:</strong> {notification.post_title}
        </>
      );
    } else if (notification.type === "like") {
      return (
        <>
          <strong>{actorName}</strong>{" "}
          <strong>liked your article:</strong> {notification.post_title}
        </>
      );
    } else if (notification.type === "new_post") {
      return (
        <>
          <strong>{actorName}</strong>{" "}
          <strong>published a new post:</strong> {notification.post_title}
        </>
      );
    } else if (notification.type === "post_update") {
      return (
        <>
          <strong>{actorName}</strong>{" "}
          <strong>updated a post:</strong> {notification.post_title}
        </>
      );
    }
    return null;
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "comment":
        return { icon: MessageCircle, bg: "bg-purple-100", color: "text-purple-600" };
      case "like":
        return { icon: Heart, bg: "bg-pink-100", color: "text-pink-600" };
      case "new_post":
        return { icon: FileText, bg: "bg-indigo-100", color: "text-indigo-600" };
      case "post_update":
        return { icon: RefreshCw, bg: "bg-amber-100", color: "text-amber-600" };
      default:
        return { icon: Bell, bg: "bg-gray-100", color: "text-gray-600" };
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Notification</h1>
        </div>
        <div className="flex items-center justify-center py-16 text-gray-500">
          Loading notifications...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Notification</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-orange-500 mt-1">{unreadCount} unread</p>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllAsRead}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Check className="size-4" />
            Mark all read
          </button>
        )}
      </div>

      {/* Notifications List */}
      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <Bell className="size-8 text-gray-400" />
          </div>
          <p className="text-gray-500">No notifications yet</p>
        </div>
      ) : (
        <div className="space-y-0 divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`py-4 flex items-start gap-4 transition-colors ${
                notification.is_read ? "opacity-70" : "bg-orange-50/30"
              }`}
            >
              {/* Icon */}
              {(() => {
                const { icon: Icon, bg, color } = getNotificationIcon(notification.type);
                return (
                  <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center ${bg} ${color}`}>
                    <Icon className="size-5" />
                  </div>
                );
              })()}

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-gray-900 mb-1">
                  {getNotificationText(notification)}
                </p>
                {notification.comment_text && (
                  <p className="text-sm text-gray-600 italic mb-2">
                    &quot;{notification.comment_text}&quot;
                  </p>
                )}
                <p className="text-sm text-orange-500">
                  {formatDistanceToNow(notification.created_at)}
                </p>
              </div>

              {/* Actions */}
              <div className="flex-shrink-0 flex items-center gap-2">
                {!notification.is_read && (
                  <button
                    onClick={() => handleMarkAsRead(notification.id)}
                    className="p-1.5 text-gray-400 hover:text-green-600 transition-colors"
                    title="Mark as read"
                  >
                    <Check className="size-4" />
                  </button>
                )}
                <button
                  onClick={() => handleDeleteNotification(notification.id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
