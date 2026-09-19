"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const links = navigation.map((item) => (
    <Link
      className="nav-link"
      href={item.href}
      key={item.href}
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav aria-label="Main navigation" className="nav-shell container">
        <Link aria-label="VMOVEXA home" className="wordmark" href="/">
          VMOVEXA<span>°</span>
        </Link>
        <div className="desktop-nav">{links}</div>
        <Link className="button button--small desktop-cta" href="/contact">
          Book a demo <span>↗</span>
        </Link>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            className="mobile-nav"
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
          >
            <div className="mobile-nav__inner container">
              {links}
              <Link className="button" href="/contact">
                Book a demo <span>↗</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
