// Dummy notification data
export const notificationDummy = [
  {
    id: 1,
    user: {
      name: "Jacob Lash",
      avatar: null,
    },
    type: "comment",
    articleTitle: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    comment:
      "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.",
    timestamp: "4 hours ago",
    read: false,
  },
  {
    id: 2,
    user: {
      name: "Jacob Lash",
      avatar: null,
    },
    type: "like",
    articleTitle: "The Fascinating World of Cats: Why We Love Our Furry Friends",
    timestamp: "4 hours ago",
    read: false,
  },
  {
    id: 3,
    user: {
      name: "Sarah Williams",
      avatar: null,
    },
    type: "comment",
    articleTitle: "10 Tips for Better Sleep",
    comment: "Great tips! I tried the breathing technique and it worked wonders.",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: 4,
    user: {
      name: "Mike Chen",
      avatar: null,
    },
    type: "like",
    articleTitle: "Understanding JavaScript Closures",
    timestamp: "2 days ago",
    read: true,
  },
];

// Mock activity data
export const activityStatsData = {
  postsCount: 42,
  likesCount: 1234,
  commentsCount: 567,
  lastActive: '2 hours ago',
  totalReadingTime: '12h 34m'
};
