/**
 * Notification - Notification list component
 * Follows SRP - single responsibility for displaying notifications
 */
import { notificationDummy } from "../../../data/notificationDummy";

export function Notification() {


  const getNotificationText = (notification) => {
    if (notification.type === "comment") {
      return (
        <>
          <strong>{notification.user.name}</strong>{" "}
          <strong>Commented on your article:</strong> {notification.articleTitle}
        </>
      );
    } else if (notification.type === "like") {
      return (
        <>
          <strong>{notification.user.name}</strong>{" "}
          <strong>liked your article:</strong> {notification.articleTitle}
        </>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Notification</h1>
      </div>

      {/* Notifications List */}
      <div className="space-y-0 divide-y divide-gray-200">
        {notificationDummy.map((notification) => (
          <div
            key={notification.id}
            className="py-4 flex items-start gap-4 hover:bg-gray-50 transition-colors"
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-900 mb-1">
                {getNotificationText(notification)}
              </p>
              {notification.comment && (
                <p className="text-sm text-gray-600 italic mb-2">
                  "{notification.comment}"
                </p>
              )}
              <p className="text-sm text-orange-500">{notification.timestamp}</p>
            </div>

            {/* View Link */}
            <div className="flex-shrink-0">
              <button className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
