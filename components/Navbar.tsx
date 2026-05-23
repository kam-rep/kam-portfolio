"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cyan-500/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          KV
        </h1>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-800 bg-black md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-300">

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}