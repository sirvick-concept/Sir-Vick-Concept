import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-blue-700 text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide sm:text-2xl"
        >
          <span className="text-white">SIR VICK</span>{" "}
          <span className="text-blue-200">CONCEPT</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-white transition duration-300 hover:text-blue-200"
            >
              {link.name}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition duration-300 hover:bg-blue-100"
          >
            Let's Work Together
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-white transition hover:bg-blue-600 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-blue-600 bg-blue-700 md:hidden">
          <div className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-blue-600 py-4 text-sm font-medium text-white transition hover:text-blue-200"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;