import { Link } from "react-router";
import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 px-6 pb-8 pt-16 text-gray-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-gray-800 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              wedly<span className="text-rose-500">.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Platform undangan pernikahan digital untuk membantu kamu
              membagikan momen istimewa dengan cara yang lebih mudah dan
              berkesan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">Navigation</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="transition hover:text-rose-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/templates" className="transition hover:text-rose-400">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Our Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>Digital Wedding Invitation</li>
              <li>Wedding Templates</li>
              <li>Invitation Customization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Get in Touch</h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Punya pertanyaan atau membutuhkan bantuan? Hubungi kami melalui
              kanal berikut.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="mailto:hello@wedly.com"
                aria-label="Email Wedly"
                className="transition hover:text-rose-400"
              >
                <Mail size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram Wedly"
                className="transition hover:text-rose-400"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp Wedly"
                className="transition hover:text-rose-400"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Wedly. All rights reserved.</p>

          <p>Made with care for your special moments.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;