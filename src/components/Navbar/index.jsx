import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", href: "#home" },
    { id: 2, title: "Features", href: "#features" },
    { id: 3, title: "About", href: "#about" },
    { id: 4, title: "Contact", href: "#contact" },
  ];

  const registerLinks = [
    { id: 1, title: "Register", href: "#register" },
    { id: 2, title: "Login", href: "#login" },
  ];

  return (
    <header className="w-full fixed z-10 text-gray-200">
      <div className="w-[95%] mx-auto px-6 py-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Stunning.so</h2>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBarsStaggered}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {/* Desktop View Menu */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <nav>
            <ul className="flex gap-7">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="transition hover:text-[#FFC727] duration-300 font-semibold">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-4">
            {registerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="px-4 py-2 font-semibold hover:text-[#FFC727] duration-300 rounded-md border transition"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile View Menu */}
      <div
        className={`md:hidden bg-[#340936] px-6 space-y-4 transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="block text-center transition">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2 mb-4">
          {registerLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="block w-full text-center px-4 py-2 rounded-md border hover:text-gray-900 transition">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
