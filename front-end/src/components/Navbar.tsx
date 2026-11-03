
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-[#C9798B] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E9A5B2]"
        : "text-[#806D70] hover:text-[#C9798B]"
    }`;

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-[#F6E8E9]/30
        bg-[#FFFDFC]/40
        backdrop-blur-sm
        transition-all duration-300 ease-in-out
        hover:border-[#F6E8E9]
        hover:bg-[#FFFDFC]/95
        hover:backdrop-blur-md
        focus-within:bg-[#FFFDFC]/95
      "
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-[26px] font-bold tracking-[-1.5px] text-[#72545B]"
        >
          wedly<span className="text-[#E9A5B2]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/templates" className={navLinkClass}>
            Templates
          </NavLink>
        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="
              rounded-lg px-4 py-2.5
              text-sm font-medium text-[#806D70]
              transition hover:bg-[#FFF1F3]
              hover:text-[#C9798B]
            "
          >
            Login
          </button>

          <button
            type="button"
            className="
              rounded-lg bg-[#E9A5B2]
              px-5 py-2.5
              text-sm font-semibold text-white
              transition hover:bg-[#D98E9E]
            "
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg text-[#806D70]
            transition hover:bg-[#FFF1F3]
            md:hidden
          "
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#F6E8E9] bg-[#FFFDFC]/95 px-6 py-5 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/templates"
              onClick={closeMobileMenu}
              className={navLinkClass}
            >
              Templates
            </NavLink>

            <div className="mt-2 flex flex-col gap-3 border-t border-[#F6E8E9] pt-5">
              <button
                type="button"
                className="
                  rounded-lg border border-[#F0D9DE]
                  px-4 py-3 text-sm font-medium
                  text-[#806D70] transition hover:bg-[#FFF1F3]
                "
              >
                Login
              </button>

              <button
                type="button"
                className="
                  rounded-lg bg-[#E9A5B2]
                  px-4 py-3 text-sm font-semibold
                  text-white transition hover:bg-[#D98E9E]
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
