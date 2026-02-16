// Helper function to get user initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

// Helper function to calculate password strength
export const calculatePasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
  if (password.match(/\d/)) strength++;
  if (password.match(/[^a-zA-Z\d]/)) strength++;
  return strength;
};

// Helper function to get password strength color
export const getPasswordStrengthColor = (strength) => {
  if (strength === 0) return 'bg-gray-200';
  if (strength === 1) return 'bg-red-500';
  if (strength === 2) return 'bg-orange-500';
  if (strength === 3) return 'bg-yellow-500';
  return 'bg-green-500';
};

// Helper function to get password strength text
export const getPasswordStrengthText = (strength) => {
  if (strength === 0) return '';
  if (strength === 1) return 'Weak';
  if (strength === 2) return 'Fair';
  if (strength === 3) return 'Good';
  return 'Strong';
};

// Helper function with timeout for async operations
export const withTimeout = (promise, ms = 12000) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), ms)
    ),
  ]);
