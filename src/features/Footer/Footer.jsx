import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer id="contact-section" className="bg-neutral-900 text-neutral-200">
      <div className="mx-auto max-w-7xl  py-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3 sm:text-left mt-6">
          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Contact Information
            </h2>
            <address className="not-italic space-y-1">
              <p>
                Email:{" "}
                <a
                  href="mailto:mohammadebrahimiyan34@gmail.com"
                  className="hover:underline"
                >
                  mohammadebrahimiyan34@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:09339631987" className="hover:underline">
                  09339631987
                </a>
              </p>
              <p>Address: 100 Smith Street Collingwood VIC 3066 Australia</p>
            </address>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Follow Us</h2>
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <a
                href="/"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="/"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="/"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="/"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Mariana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
