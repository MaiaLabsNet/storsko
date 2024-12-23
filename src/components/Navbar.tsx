"use client";

import React from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Simulate user authentication

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    });
  }, []);

  const navbarConfig = [
    { name: "Home", id: "Home" },
    { name: "Skills", id: "Goal" },
    { name: "Timeline", id: "Timeline" },
    { name: "Projects", id: "Projects" },
    { name: "Social", id: "Social" },
    { name: "MaiaLabs", id: "MaiaLabs" },
    { name: "Contact", id: "Contact" },
  ];

  const handleSignIn = () => {
    setIsLoggedIn(true); // Simulate user login
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b0b] bg-black bg-opacity-85 backdrop-blur-md w-full rounded-none px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-white">
          <p className="block antialiased font-sans text-white text-2xl font-bold">
            Game Chisel
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-4">
          {navbarConfig.map((item) => (
            <li key={item.id}>
              <Link
                href={`/#${item.id}`}
                className="text-white font-[500] hover:bg-[#d4af37] hover:text-black py-3 px-6 rounded-lg transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In / Profile Button */}
        <div className="hidden lg:flex items-center gap-4">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="border border-[#d4af37] text-white font-[500] py-2 px-4 rounded-lg transition bg-transparent hover:bg-[#d4af37] hover:text-black hover:shadow-md"
            >
              Profile
            </Link>
          ) : (
            <button
              onClick={handleSignIn}
              className="border border-[#d4af37] text-white font-[500] py-2 px-4 rounded-lg transition bg-transparent hover:bg-[#d4af37] hover:text-black hover:shadow-md"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:bg-[#d4af37] hover:text-black p-2 rounded-lg transition"
          onClick={handleOpen}
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-[#1a1a1a] bg-opacity-95 border-t border-[#c0c0c0]">
          <ul className="flex flex-col items-center gap-4 p-4">
            {navbarConfig.map((item) => (
              <li key={item.id} className="w-full">
                <Link
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-white hover:bg-[#d4af37] hover:text-black py-3 px-6 rounded-lg transition w-full text-center block font-[500]"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Sign In / Profile for Mobile */}
            <li className="w-full">
              {isLoggedIn ? (
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="border border-[#d4af37] text-white font-[500] py-3 px-6 rounded-lg transition bg-transparent hover:bg-[#d4af37] hover:text-black hover:shadow-md w-full text-center block"
                >
                  Profile
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleSignIn();
                    setOpen(false);
                  }}
                  className="border border-[#d4af37] text-white font-[500] py-3 px-6 rounded-lg transition bg-transparent hover:bg-[#d4af37] hover:text-black hover:shadow-md w-full text-center block"
                >
                  Sign In
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
