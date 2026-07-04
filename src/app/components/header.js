"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // 👈 Add this
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const [showHeader, setShowHeader] = useState(true);

  const navLinks = [
    { href: "/servizi", label: "Servizi" },
    {
      href: "/team",
      label: "Team",
    },
    {
      href: "/case-study",
      label: "Case Study",
    },
    {
      href: "/lavoro-con-noi",
      label: "Lavoro Con Noi",
    },
    { href: "/contattaci", label: "Contattaci" },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    handleScroll(); // Initial state

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: showHeader ? 0 : "-100%",
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 w-full z-[100]"
    >
      {/* <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"> */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          ref={menuRef}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 font-bold text-lg cursor-pointer"
        >
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              height={200}
              width={200}
              alt="connextup logo"
              className="h-24 w-24 "
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden z-50 md:flex gap-8">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.span key={i} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 transition-colors ${
                    isActive ? "font-bold" : "hover:text-cu-blue"
                  }`}
                >
                  {link.icon} {link.label}
                </Link>
              </motion.span>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#E0E0E0] hover:text-cu-blue transition"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-full w-64 bg-cu-blue shadow-lg shadow-[#00D1B2]/20 z-50 p-6 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                className="text-[#E0E0E0] hover:text-[#F4B400]"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="mt-6 flex flex-col gap-4">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.span
                    key={i}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive
                        ? "text-cu-green font-semibold"
                        : "text-[#E0E0E0] hover:text-cu-blue"
                    }`}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </motion.span>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* </div> */}
    </motion.header>
  );
}
