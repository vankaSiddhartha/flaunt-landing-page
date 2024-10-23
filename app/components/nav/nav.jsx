import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full  px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Simplified Logo */}
        <div className="flex items-center">
          <span className="text-3xl font-semibold tracking-wider text-gray-800 "
                style={{ fontFamily: "'Inter', sans-serif" }}>
            flaunt.
          </span>
        </div>

        {/* Navigation Items */}
        <div className="hidden sm:flex items-center gap-8 text-gray-600 ">
          <a href="#" className="hover:text-purple-600 transition-colors text-sm font-medium">
            Home
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors text-sm font-medium">
            Products
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors text-sm font-medium">
            About Us
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/company/try-meetly/people/?viewAsMember=true" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/try_flaunt?igsh=MXJ3bmV2c3Jhbjlleg==" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://x.com/Siddhartha13691" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </nav>
  )
}