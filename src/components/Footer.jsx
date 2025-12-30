import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              TANYI GROUP
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Integrated logistics and trade solutions delivering reliable
              warehousing, transit, import/export, and customs clearance
              services.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/warehousing" className="hover:text-white transition">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link to="/services/import-export" className="hover:text-white transition">
                  Import & Export
                </Link>
              </li>
              <li>
                <Link to="/services/transit" className="hover:text-white transition">
                  Transit Services
                </Link>
              </li>
              <li>
                <Link to="/services/customs-clearance" className="hover:text-white transition">
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/group" className="hover:text-white transition">
                  Group Companies
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="hover:text-white transition">
                  Shipment Tracking
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} />
                <span>Douala, Cameroon</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} />
                <span>+237 XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} />
                <span>info@tanyigroup.com</span>
              </li>
            </ul>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-white transition" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white transition" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TANYI Group. All rights reserved.
      </div>
    </footer>
  )
}
