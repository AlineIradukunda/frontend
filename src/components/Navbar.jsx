import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Image, Video, Mail, Info, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/products", label: "Gallery", icon: <Image size={18} /> },
    { path: "/videos", label: "Tutorials", icon: <Video size={18} /> },
    { path: "/contact", label: "Request", icon: <Mail size={18} /> },
    { path: "/about", label: "About", icon: <Info size={18} /> },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/yarn.jpg"
            alt="Yarn Logo"
            className="w-10 h-10 rounded-full border border-gray-300 object-contain"
          />
          <span className="text-lg font-semibold text-black tracking-wide">
            Crochet Dream
          </span>
        </div>

        {/* Middle: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 text-black font-medium transition-all relative ${
                location.pathname === link.path
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-black after:transition-all`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right: Profile / Login */}
        <div className="flex items-center space-x-4">
          <Link
            to="/profile"
            className="text-black hover:text-gray-700 transition"
          >
            <User size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
