"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export function ThemeSwitcher() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Entire site is dark/black by requirement
    document.body.classList.remove("light-theme");
  }, [pathname]);

  return null;
}
