import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getMyStats } from "@/api/statisticsAPI";
import { formatDistanceToNow } from "@/lib/utils";

/**
 * Hook สำหรับดึงข้อมูล statistics ของ user ที่ login
 * admin: total_posts, total_likes, total_comments, total_reading_time, last_active
 * user: total_comments, total_reading_time, last_active
 */
export const useStatistics = () => {
  const { token, user } = useAuth();
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStats = useCallback(async () => {
    if (!token || !user) return;
    setIsLoading(true);
    try {
      const data = await getMyStats(token);
      setStats(data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      setIsLoading(false);
    }
  }, [token, user]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Format reading time seconds → human-readable
  const formatReadingTime = (seconds) => {
    if (!seconds || seconds === 0) return "0m";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h`;
    return `${minutes}m`;
  };

  // Format สำหรับ ActivitySection
  const activityStats = stats
    ? {
        role: stats.role,
        postsCount: stats.total_posts ?? 0,
        likesCount: stats.total_likes ?? 0,
        commentsCount: stats.total_comments ?? 0,
        totalReadingTime: formatReadingTime(stats.total_reading_time),
        lastActive: stats.last_active
          ? formatDistanceToNow(stats.last_active)
          : "N/A",
      }
    : {
        role: "user",
        postsCount: 0,
        likesCount: 0,
        commentsCount: 0,
        totalReadingTime: "0m",
        lastActive: "N/A",
      };

  return {
    stats,
    activityStats,
    isLoading,
    fetchStats,
  };
};
