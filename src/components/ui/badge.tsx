import * as React from "react";
import { cn } from "@/lib/utils";

// Badge variants map to different color schemes.  These classes follow
// the same design semantics as the button component so they can be
// composed together seamlessly.
const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent",
} as const;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

/**
 * A small pill used to display counts or status labels.  By default
 * badges are inline‑block elements with rounded corners and bold text.
 */
const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
};

export { Badge };