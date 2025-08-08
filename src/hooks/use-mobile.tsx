import * as React from "react";

/**
 * Custom hook that determines whether the current viewport width is below
 * the mobile breakpoint. Components can use this hook to adjust layout
 * or behavior on small screens without re‑implementing the same logic.
 *
 * It listens for changes to the window size via a media query and updates
 * state accordingly. The default breakpoint matches typical Tailwind
 * responsive breakpoints.
 */
const MOBILE_BREAKPOINT = 768;

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    // set initial state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}