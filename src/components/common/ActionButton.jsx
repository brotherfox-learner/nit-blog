/**
 * Reusable Action Button Component
 * Following DRY - single component for like, share, more actions
 * Loose Coupling - behavior configured via props
 */

import { cn } from "@/lib/utils";
import { HeartIcon, ShareIcon, MoreIcon, BookmarkIcon } from "./icons";

const ACTION_VARIANTS = {
  like: {
    icon: HeartIcon,
    hoverBg: "hover:bg-red-50",
    hoverBorder: "hover:border-red-200",
    hoverIconColor: "group-hover/action:text-red-500",
  },
  share: {
    icon: ShareIcon,
    hoverBg: "hover:bg-blue-50",
    hoverBorder: "hover:border-blue-200",
    hoverIconColor: "group-hover/action:text-blue-500",
  },
  more: {
    icon: MoreIcon,
    hoverBg: "hover:bg-emerald-50",
    hoverBorder: "hover:border-emerald-200",
    hoverIconColor: "group-hover/action:text-emerald-600",
  },
  bookmark: {
    icon: BookmarkIcon,
    hoverBg: "hover:bg-emerald-500",
    hoverBorder: "hover:border-emerald-500",
    hoverIconColor: "group-hover/action:text-white",
  },
};

const ACTION_SIZES = {
  sm: {
    button: "w-8 h-8",
    icon: "w-3.5 h-3.5",
  },
  md: {
    button: "w-9 h-9",
    icon: "w-4 h-4",
  },
  lg: {
    button: "w-12 h-12",
    icon: "w-5 h-5",
  },
};

export function ActionButton({
  variant = "like",
  size = "md",
  onClick,
  className = "",
  iconClassName = "",
  ...props
}) {
  const variantConfig = ACTION_VARIANTS[variant] || ACTION_VARIANTS.like;
  const sizeConfig = ACTION_SIZES[size] || ACTION_SIZES.md;
  const IconComponent = variantConfig.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        sizeConfig.button,
        "rounded-xl bg-gray-100 flex items-center justify-center",
        "transition-all duration-300 hover:scale-110",
        "border border-transparent",
        variantConfig.hoverBg,
        variantConfig.hoverBorder,
        "group/action",
        className
      )}
      {...props}
    >
      <IconComponent
        className={cn(
          sizeConfig.icon,
          "text-gray-500 transition-colors duration-300",
          variantConfig.hoverIconColor,
          iconClassName
        )}
      />
    </button>
  );
}

// Action buttons group (commonly used together)
export function ActionButtonGroup({
  actions = ["like", "share", "more"],
  size = "md",
  showOnHover = true,
  className = "",
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5",
        showOnHover && "opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0",
        "transition-all duration-500",
        className
      )}
    >
      {actions.map((action) => (
        <ActionButton key={action} variant={action} size={size} />
      ))}
    </div>
  );
}

