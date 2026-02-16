# Member Page Component Structure

This directory contains the refactored Member Page component with improved organization and maintainability.

## Directory Structure

```
member-page/
├── components/           # UI Components
│   ├── ActivitySection.jsx
│   ├── MobileHeader.jsx
│   ├── MobileTabs.jsx
│   ├── NotificationsSection.jsx
│   ├── PreferencesSection.jsx
│   ├── ProfileSection.jsx
│   ├── SecuritySection.jsx
│   ├── Sidebar.jsx
│   └── index.js
├── data/                 # Static data and mock data
│   └── notificationData.js
├── hooks/                # Custom React hooks
│   ├── useMemberActions.js
│   └── useMemberPage.js
├── utils/                # Helper functions
│   └── helpers.js
├── index.js              # Main export
├── MemberPage.jsx        # Main component
└── README.md             # This file
```

## Components

### Main Component
- **MemberPage.jsx**: Main container component that orchestrates all sections

### Section Components
- **ProfileSection.jsx**: User profile editing (name, username, email, bio, profile picture)
- **ActivitySection.jsx**: Activity statistics and timeline
- **NotificationsSection.jsx**: User notifications with read/unread status
- **PreferencesSection.jsx**: User preferences (language, theme, notifications)
- **SecuritySection.jsx**: Password management and security settings

### Layout Components
- **Sidebar.jsx**: Desktop sidebar navigation
- **MobileHeader.jsx**: Mobile header with hamburger menu
- **MobileTabs.jsx**: Mobile tab navigation

## Hooks

### useMemberPage
Custom hook that manages all state for the member page including:
- Active tab state
- Form data
- Notifications
- Password data
- Profile image
- Save status

### useMemberActions
Custom hook for handling user actions (currently not fully implemented, handlers are in main component)

## Utilities

### helpers.js
Contains utility functions:
- `getInitials(name)`: Extract initials from user name
- `calculatePasswordStrength(password)`: Calculate password strength score
- `getPasswordStrengthColor(strength)`: Get color class for password strength
- `getPasswordStrengthText(strength)`: Get text description for password strength
- `withTimeout(promise, ms)`: Add timeout to async operations

## Data

### notificationData.js
Contains:
- `notificationDummy`: Mock notification data for development
- `activityStatsData`: Mock activity statistics

## Usage

```jsx
import MemberPage from './components/member-page';

function App() {
  return <MemberPage />;
}
```

## Features

- ✅ Responsive design (mobile and desktop)
- ✅ Tab-based navigation
- ✅ Profile management
- ✅ Activity tracking
- ✅ Notification system
- ✅ User preferences
- ✅ Password security
- ✅ Image upload
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling

## Future Improvements

1. Move more handler logic to custom hooks
2. Add unit tests for components
3. Implement real-time notifications
4. Add form validation library (e.g., Yup, Zod)
5. Implement actual password change API
6. Add accessibility improvements (ARIA labels)
7. Add internationalization (i18n)
