/**
 * Unified Auth Button Component
 * Following DRY - replaces SignUpBtn, LogInBtn, BlackBtn
 * Abstraction - single component with variants
 */

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AUTH_BUTTON_VARIANTS = {
  primary: {
    base: "bg-[#26231E] border-[#75716B] text-white",
    hover: "hover:bg-[#43403B] hover:border-[#43403B]",
  },
  secondary: {
    base: "bg-white border-[#75716B] text-black",
    hover: "hover:bg-[#F5F5F5] hover:border-[#DAD6D1]",
  },
};

export function AuthButton({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variantStyles = AUTH_BUTTON_VARIANTS[variant] || AUTH_BUTTON_VARIANTS.primary;

  return (
    <Button
      className={cn(
        "rounded-full border text-[16px] font-medium",
        "transition-all duration-300",
        "hover:shadow-md active:scale-95 active:shadow-sm",
        variantStyles.base,
        variantStyles.hover,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

// Convenience exports for backward compatibility
export function SignUpButton({ children = "Sign Up", ...props }) {
  return <AuthButton variant="primary" {...props}>{children}</AuthButton>;
}

export function LogInButton({ children = "Log In", ...props }) {
  return <AuthButton variant="secondary" {...props}>{children}</AuthButton>;
}

