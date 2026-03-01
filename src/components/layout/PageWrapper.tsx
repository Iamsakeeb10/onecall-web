"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isHomepage = pathname === "/";

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Homepage: render immediately without AnimatePresence or animations
  if (isHomepage) {
    return <div key={pathname}>{children}</div>;
  }

  // Other pages: use AnimatePresence with smooth animations
  // Remove mode="wait" to prevent blocking - pages render immediately
  // Keep smooth animations: fade + slide up on entry, fade + slide down on exit
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.15,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
