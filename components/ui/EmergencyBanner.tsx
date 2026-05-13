"use client";

import { useState, useEffect } from "react";

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("emergency-banner-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("emergency-banner-dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-sm relative">
      <span>
        Experiencing severe joint pain? Call immediately:{" "}
        <a href="tel:+918955373205" className="font-bold underline">
          +91-8955373205
        </a>
      </span>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-lg leading-none"
        aria-label="Dismiss"
      >
        &times;
      </button>
    </div>
  );
}
