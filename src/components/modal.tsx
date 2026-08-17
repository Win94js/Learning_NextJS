"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, MouseEventHandler } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-10 mx-auto bg-black/60 p-10 flex items-center justify-center"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg text-black"
      >
        {children}
      </div>
    </div>
  );
}