import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Properties for an individual toast notification.  Consumers may pass
 * additional DOM attributes which will be spread onto the container.
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  /** Triggered when the toast is dismissed */
  onOpenChange?: (open: boolean) => void;
  /** Optional title displayed in bold text */
  title?: React.ReactNode;
  /** Optional description displayed below the title */
  description?: React.ReactNode;
  /** Optional action element rendered in the toast */
  action?: React.ReactNode;
}

/**
 * A type representing a toast action element.  Typically this would be
 * a button or link.  It is used by the toast hook to type the
 * `action` property.
 */
export type ToastActionElement = React.ReactElement;

/**
 * Simple toast component.  When `open` is true the toast is rendered
 * fixed to the bottom right of the viewport.  It is intentionally
 * minimal and does not handle its own dismissal animations; this is
 * delegated to the useToast hook and Toaster container.
 */
export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    { className, open = true, onOpenChange, title, description, action, children, ...props },
    ref,
  ) => {
    // When open prop is false, render nothing.  This allows the state
    // management hook to control the toast lifecycle externally.
    if (!open) return null;
    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-4 right-4 z-50 flex w-80 max-w-full flex-col gap-2 rounded-md border bg-card p-4 shadow-lg",
          className,
        )}
        {...props}
      >
        {title && <p className="font-semibold mb-1 text-foreground">{title}</p>}
        {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}
        {children}
        {action && <div className="mt-2">{action}</div>}
      </div>
    );
  },
);
Toast.displayName = "Toast";