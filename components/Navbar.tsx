"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo-ksep.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { truncateString } from "@/utils/utils";
import { useUserStore } from "@/stores/userStore";
import { useInitializeUserStore } from "@/hooks/useInitializeUserStore";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Event", href: "/event" },
  { name: "ERC", href: "/erc" },
  { name: "BCC", href: "/bcc" },
  { name: "Daftar", href: "/daftar"}
];

const MenuIcon = ({ className = "" }) => (
  <svg
    className={`w-7 h-7 text-white ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg
    className={`w-8 h-8 text-white ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  
  useInitializeUserStore();
  const { user, userProfile, isLoading, logout } = useUserStore();

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  // Function to get display name
  const getDisplayName = () => {
    if (!user) return '';
    
    let name = '';
    
    if (userProfile) {
      name = userProfile.teamName;
    } else {
      name = user.email?.split('@')[0] || 'User';
    }

    return truncateString(name, 10); 
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[800px] z-50 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        <div
          className="relative w-full h-16 bg-gradient-to-br from-white/30 to-white/0 rounded-full shadow-lg backdrop-blur-xl border border-white/20 flex justify-between items-center px-4"
          data-aos="fade-down"
        >
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-[70px] ml-3" />
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="hidden md:flex text-base relative font-bold transition-colors duration-300 px-2 py-1 h-full items-center"
              >
                <span
                  className={
                    isActive
                      ? "bg-gradient-to-b from-[#FFEED2] to-[#C2A2E8] text-transparent bg-clip-text"
                      : "text-white hover:text-[#FFEED2]"
                  }
                >
                  {link.name}
                </span>
                {isActive && (
                  <span className="absolute bottom-[18px] left-1/2 -translate-x-1/2 h-[1px] w-[80%] bg-gradient-to-r from-[#FFEED2] to-[#C2A2E8] rounded-full" />
                )}
              </Link>
            );
          })}

          {isLoading ? (
            <div className="hidden md:flex items-center bg-gradient-to-r from-[#D9D9D9] to-[#C2A1E9] text-[#420C81] font-bold rounded-full py-2 px-8">
              Loading...
            </div>
          ) : user ? (
            <Link
              href="/dashboard"
              className="hidden md:flex cursor-pointer items-center bg-gradient-to-r from-[#D9D9D9] to-[#C2A1E9] text-[#420C81] font-bold rounded-full transition-transform duration-300 hover:scale-105 py-2 px-8"
            >
              {getDisplayName()}
            </Link>
          ) : (
            <Link
              href="/login"
              className="hidden md:flex items-center bg-gradient-to-r from-[#D9D9D9] to-[#C2A1E9] text-[#420C81] font-bold rounded-full transition-transform duration-300 hover:scale-105 py-2 px-8"
            >
              Login
            </Link>
          )}

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="p-2">
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-lg"></div>

        <div
          className={`absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <button onClick={() => setMobileMenuOpen(false)} className="p-2">
            <CloseIcon />
          </button>
        </div>

        <nav
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold"
              >
                <span
                  className={
                    isActive
                      ? "bg-gradient-to-b from-[#FFEED2] to-[#C2A2E8] text-transparent bg-clip-text"
                      : "text-white hover:text-[#FFEED2]"
                  }
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
          {isLoading ? (
            <div className="mt-8 text-xl font-bold bg-gradient-to-r from-[#D9D9D9] to-[#C2A1E9] text-[#420C81] rounded-full py-3 px-12">
              Loading...
            </div>
          ) : user ? (
            <Link
              href="/dashboard"
              className="mt-8 text-xl cursor-pointer font-bold bg-gradient-to-r from-[#D9D9D9] to-[#C2A1E9] text-[#420C81] rounded-full py-3 px-12"
            >
              {getDisplayName()}
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 text-xl font-bold bg-gradient-to-r from-[#D9D9D9] to-[#C2A1E9] text-[#420C81] rounded-full py-3 px-12"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;