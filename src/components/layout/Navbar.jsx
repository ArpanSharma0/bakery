"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAVIGATION_LINKS } from "@/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On subpages, we want the "scrolled" style (background) immediately for readability
  const navbarStyle = (!isHomePage || isScrolled)
    ? "bg-background/95 backdrop-blur-sm border-b border-accent/20 py-4 text-text" 
    : "bg-transparent py-8 text-white";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarStyle}`}
    >
      <div className="max-w-container px-6 flex justify-between items-center">
        <div className="flex-1 hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase font-sans">
          {NAVIGATION_LINKS.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="/" className="text-2xl md:text-3xl font-serif tracking-tight text-center flex-1">
          Pearls and Roses
        </Link>

        <div className="flex-1 hidden md:flex justify-end gap-12 text-xs tracking-[0.2em] uppercase font-sans">
          {NAVIGATION_LINKS.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-accent" aria-label="Menu">
            <span className="block w-6 h-[1px] bg-accent mb-1"></span>
            <span className="block w-6 h-[1px] bg-accent"></span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
