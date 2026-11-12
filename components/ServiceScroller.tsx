"use client";

import { useEffect } from "react";

export default function ServiceScroller() {
  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollToService");
    if (targetId) {
      sessionStorage.removeItem("scrollToService");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, []);

  return null;
}
