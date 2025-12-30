import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Group", path: "/group" },
    { name: "Tracking", path: "/tracking" },
    { name: "Contact", path: "/contact" }
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur shadow-lg"
          : "bg-primary"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide"
        >
          TANYI GROUP
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {links.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition ${
                  active ? "text-accent" : "hover:text-accent"
                }`}
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-secondary transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-primary border-t border-secondary`}
      >
        {links.map(link => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setOpen(false)}
            className={`block px-6 py-4 transition font-medium ${
              location.pathname === link.path
                ? "bg-secondary text-accent"
                : "hover:bg-secondary"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
