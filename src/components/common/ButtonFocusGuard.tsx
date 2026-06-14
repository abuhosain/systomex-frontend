"use client";

import { useEffect } from "react";

/** Prevents mouse-click focus rings on all buttons site-wide. */
export default function ButtonFocusGuard() {
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const btn = (e.target as Element).closest("button");
      if (btn && !btn.disabled) e.preventDefault();
    };

    document.addEventListener("mousedown", onMouseDown, true);
    return () => document.removeEventListener("mousedown", onMouseDown, true);
  }, []);

  return null;
}
