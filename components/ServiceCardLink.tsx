"use client";

import React from "react";
import Link from "next/link";

interface ServiceCardLinkProps {
  serviceId: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

export default function ServiceCardLink({
  serviceId,
  children,
  className,
  "aria-label": ariaLabel,
}: ServiceCardLinkProps) {
  const handleClick = () => {
    try {
      sessionStorage.setItem("scrollToService", serviceId);
    } catch {
      // ignore
    }
  };

  return (
    <Link
      href="/leistungen"
      scroll={false}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
