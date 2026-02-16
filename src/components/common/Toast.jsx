import { useEffect } from "react";

/**
 * Toast Component - แสดง notification แบบ popup
 * ใช้สำหรับแสดงข้อความแจ้งเตือนชั่วคราว
 */
export function Toast({ message, description, onClose, duration = 2000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="bg-[#12B279] text-white rounded-lg shadow-lg p-4 min-w-[300px] max-w-[400px] flex items-start gap-3 animate-in slide-in-from-right fade-in-0 duration-300">
      {/* Content */}
      <div className="flex-1">
        <h4 className="font-semibold text-base mb-1">{message}</h4>
        {description && (
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-white hover:text-white/80 transition-colors shrink-0 mt-0.5"
        aria-label="Close notification"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
