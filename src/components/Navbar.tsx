"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TooltipButton from "./ui/tooltipbutton";

interface NavbarProps {
  isHovered?: boolean;
}

export default function Navbar({ isHovered = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 uppercase transition-all duration-300 ${
        isScrolled || isOpen ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 p-2 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <Link href={"/"} >
            <Image
              src="/logo-white.png"
              alt="logo.png"
              width={150}
              height={150}
            />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-16 text-gray-300 font-medium text-[15px] tracking-wide">
            <Link
              href="/#about"
              className={`cursor-none hover:text-ted-red transition duration-300 ${
                isHovered ? "text-black/70" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/#speakers"
              className={`cursor-none hover:text-ted-red transition duration-300 ${
                isHovered ? "text-black/70" : ""
              }`}
            >
              Speakers
            </Link>
            <Link
              href="/#event"
              className={`cursor-none hover:text-ted-red transition duration-300 ${
                isHovered ? "text-black/70" : ""
              }`}
            >
              Event
            </Link>
            <Link
              href="/#partners"
              className={`cursor-none hover:text-ted-red transition duration-300 ${
                isHovered ? "text-black/70" : ""
              }`}
            >
              Partners
            </Link>
          </div>

          {/* Ticket Button */}
          <div className="hidden md:block">
            <TooltipButton
              tooltip="Reserve your TEDx pass"
              hoverText="BOOK TICKETS"
              hoverLink="/tickets"
            >
              <Link
                href="/tickets"
                className={`text-white font-semibold ${
                  isHovered ? "text-black" : ""
                }`}
              >
                Book Tickets
              </Link>
            </TooltipButton>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${
                isHovered ? "text-black" : "text-gray-300"
              }`}
            >
              {isOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-black/90 backdrop-blur-xl shadow-2xl px-4 pt-6 pb-8 space-y-6 font-medium text-center text-[15px] ${
            isHovered ? "text-black" : "text-gray-300"
          }`}
        >
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-ted-red transition duration-300"
          >
            About
          </Link>
          <Link
            href="#speakers"
            onClick={() => setIsOpen(false)}
            className="block hover:text-ted-red transition duration-300"
          >
            Speakers
          </Link>
          <Link
            href="#event"
            onClick={() => setIsOpen(false)}
            className="block hover:text-ted-red transition duration-300"
          >
            Event
          </Link>
          <Link
            href="#partners"
            onClick={() => setIsOpen(false)}
            className="block hover:text-ted-red transition duration-300"
          >
            Partners
          </Link>
          <Link
            href="/tickets"
            onClick={() => setIsOpen(false)}
            className="block bg-ted-red text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Book Tickets
          </Link>
        </div>
      )}
    </nav>
  );
}
