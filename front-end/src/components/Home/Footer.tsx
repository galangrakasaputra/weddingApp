
import { Link } from "react-router";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#49383D] px-8 pb-8 pt-16 text-[#EADDE0] sm:px-10 md:px-12 md:pt-20 lg:px-16 xl:px-20 2xl:px-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[350px] w-[350px] rounded-full bg-[#C9798B]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Footer Main */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block font-serif text-3xl font-semibold tracking-tight text-white"
            >
              wedly<span className="text-[#E9A5B2]">.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#C8B7BC]">
              Platform undangan pernikahan digital untuk membantu kamu
              membagikan momen istimewa dengan cara yang lebih mudah dan
              berkesan.
            </p>

            <p className="mt-6 font-serif text-sm italic text-[#E9A5B2]">
              Every love story deserves to be celebrated.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-[#C8B7BC]">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-300 hover:text-[#E9A5B2]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/templates"
                  className="transition-colors duration-300 hover:text-[#E9A5B2]"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-[#C8B7BC]">
              <li>Digital Wedding Invitation</li>
              <li>Wedding Templates</li>
              <li>Invitation Customization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get in Touch
            </h3>

            <p className="mt-6 text-sm leading-7 text-[#C8B7BC]">
              Punya pertanyaan atau membutuhkan bantuan?
              Hubungi kami melalui kanal berikut.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:hello@wedly.com"
                aria-label="Email Wedly"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#EADDE0] transition-all duration-300 hover:border-[#E9A5B2] hover:bg-[#E9A5B2] hover:text-[#49383D]"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram Wedly"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#EADDE0] transition-all duration-300 hover:border-[#E9A5B2] hover:bg-[#E9A5B2] hover:text-[#49383D]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp Wedly"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#EADDE0] transition-all duration-300 hover:border-[#E9A5B2] hover:bg-[#E9A5B2] hover:text-[#49383D]"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row">
          <p className="text-xs text-[#A9959B]">
            © {new Date().getFullYear()} Wedly. All rights reserved.
          </p>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs text-[#A9959B] transition-colors hover:text-[#E9A5B2]"
          >
            Back to Home

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;