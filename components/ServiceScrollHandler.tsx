"use client";

import { useEffect } from "react";

export default function ServiceScrollHandler() {
  useEffect(() => {
    // If page was navigated with a hash anchor, remove it from the browser URL bar
    // so the URL stays clean ("/leistungen") while retaining direct scroll position
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return null;
}
