import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
          wedly<span className="text-rose-500">.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-rose-500" : "text-gray-600 hover:text-rose-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-rose-500" : "text-gray-600 hover:text-rose-500"
              }`
            }
          >
            Templates
          </NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            Login
          </button>

          <button className="rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;