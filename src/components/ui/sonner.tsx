import * as React from "react";
import { Toaster } from "@/components/ui/toaster";

/**
 * The Sonner component is an alias for Toaster.  The upstream design
 * includes both named exports, but for simplicity we re‑export the
 * Toaster implementation under the Sonner name so that existing
 * imports continue to function.
 */
export { Toaster } from "@/components/ui/toaster";

export const Sonner = () => {
  return <Toaster />;
};

export default Sonner;