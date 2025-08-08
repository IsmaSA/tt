import * as React from "react";

/**
 * A no‑op TooltipProvider that simply renders its children.  The full
 * Radix tooltip implementation is not required for the current
 * application, but we include this provider to satisfy imports and
 * allow consumers to wrap their app with a provider interface.
 */
export interface TooltipProviderProps {
  children: React.ReactNode;
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

export default TooltipProvider;