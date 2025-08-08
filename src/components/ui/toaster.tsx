import * as React from "react";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

/**
 * Container responsible for rendering active toasts.  It subscribes
 * to the toast queue via the useToast hook and maps each toast to a
 * corresponding Toast component.  Toasts are rendered fixed in the
 * bottom right of the viewport.  This component should be placed at
 * the root of the application (e.g. in App.tsx) so that toasts can
 * appear on top of all other content.
 */
export function Toaster() {
  const { toasts, dismiss } = useToast();
  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          open={toast.open}
          onOpenChange={(open) => {
            if (!open) dismiss(toast.id);
          }}
          title={toast.title}
          description={toast.description}
          action={toast.action}
        />
      ))}
    </>
  );
}

export default Toaster;