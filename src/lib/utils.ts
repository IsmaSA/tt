import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for composing class names using clsx and tailwind-merge.
 * It accepts a list of class values and merges them intelligently,
 * eliminating duplicate Tailwind classes.  Use this helper in UI
 * components whenever you need to conditionally build class strings.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}