import {
  Github,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">
              SIR VICK CONCEPT
            </h2>

            <p className="mt-4 max-w-md leading-7 text-blue-100">
              Building digital experiences, capturing meaningful moments,
              and creating through music.
            </p>

            <p className="mt-4 font-medium text-white">
              Web Developer • Photographer • Instrumentalist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-blue-100 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-blue-100 transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-blue-100 transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="text-blue-100 transition hover:text-white"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-blue-100 transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold">
              Follow Me
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">

              {/* Facebook */}
              <a
                href="https://facebook.com/onaolapo.victor.7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:bg-white hover:text-blue-700"
              >
                <FaFacebookF size={18} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@sirvickconcept?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:bg-white hover:text-blue-700"
              >
                <FaTiktok size={18} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348138872318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:bg-white hover:text-blue-700"
              >
                <FaWhatsapp size={19} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:bg-white hover:text-blue-700"
              >
                <Instagram size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/victoronaolapo?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:bg-white hover:text-blue-700"
              >
                <Linkedin size={19} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sirvick-concept"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:bg-white hover:text-blue-700"
              >
                <Github size={19} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-blue-600 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-blue-100">
            © 2026 Sir Vick Concept. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex w-fit items-center gap-2 text-sm font-medium text-blue-100 transition hover:text-white"
          >
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;