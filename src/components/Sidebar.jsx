import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Image, Video, Mail, Info } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", icon: <Home size={24} />, label: "Home" },
    { path: "/products", icon: <Image size={24} />, label: "Image" },
    { path: "/videos", icon: <Video size={24} />, label: "Tutorials" },
    { path: "/contact", icon: <Mail size={24} />, label: "Request" },
    { path: "/about", icon: <Info size={24} />, label: "About" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-white text-black p-3 flex flex-col items-center shadow-md border-r border-gray-300">
      <h1 className="text-lg font-bold mb-8">CD</h1>
      <nav>
        <ul className="space-y-5">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group flex justify-center">
              <Link
                to={link.path}
                className={`flex justify-center p-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
              >
                {link.icon}
              </Link>

              <span className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity">
                {link.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
