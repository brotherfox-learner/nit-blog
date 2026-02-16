import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function randomNumber(max = 1000) {
  return Math.floor(Math.random() * max) + 1;
}

export function calculateReadTime(text) {
  const wordsPerMinute = 150;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Normalize timestamp จาก DB ให้ JavaScript ตีความเป็น UTC เสมอ
 * PostgreSQL TIMESTAMP (ไม่มี timezone) จะส่งมาแบบ "2024-02-16T07:39:00" โดยไม่มี Z
 * ถ้าไม่มี timezone info → ต่อ Z ให้เพื่อบังคับ UTC interpretation
 */
function toUTCDate(dateString) {
  if (!dateString) return new Date();
  if (dateString instanceof Date) return dateString;
  const str = String(dateString).trim();
  if (/[Z+\-]\d{2}:?\d{2}$/.test(str) || str.endsWith("Z")) {
    return new Date(str);
  }
  return new Date(str.replace(" ", "T") + "Z");
}

export function formatDate(dateString) {
  const date = toUTCDate(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export function formatDistanceToNow(dateString) {
  const now = new Date();
  const date = toUTCDate(dateString);
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
  if (diffDay < 30) return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
  return formatDate(dateString);
}
