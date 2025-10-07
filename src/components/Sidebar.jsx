import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navLinks = [
    {
      label: "Home",
      path: "/",
      children: [
        { label: "Sale", path: "/sale" },
        { label: "New Arrivals", path: "/new-arrivals" },
        { label: "Trending", path: "/trending" },
      ],
    },
    {
      label: "Image",
      path: "/products",
      children: [
        { label: "Yarns", path: "/products/yarns" },
        { label: "Hooks & Tools", path: "/products/hooks" },
        { label: "Accessories", path: "/products/accessories" },
      ],
    },
    {
      label: "Tutorials",
      path: "/videos",
      children: [
        { label: "Beginner Tutorials", path: "/videos/beginner" },
        { label: "Intermediate Tutorials", path: "/videos/intermediate" },
        { label: "Advanced Tutorials", path: "/videos/advanced" },
      ],
    },
 {
  label: "Request",
  path: "/contact",
  children: [
    { label: "Custom Orders", path: "/contact/custom-orders" },
    { label: "Support", path: "/contact/support" },
    { label: "Feedback", path: "/contact/feedback" },
  ],
},
 
    {
      label: "About",
      path: "/about",
      children: [
        { label: "Our Story", path: "/about/story" },
        { label: "Team", path: "/about/team" },
        { label: "Careers", path: "/about/careers" },
      ],
    },
  ];

  const renderLinks = (links) => (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={link.path}>
          {/* Main link title */}
          <div className="font-bold text-black mb-1" style={{ fontFamily: "Bookman Old Style" }}>
            <Link
              to={link.path}
              className={`block p-2 rounded hover:bg-gray-100 transition-colors ${
                location.pathname === link.path ? "bg-gray-200" : ""
              }`}
            >
              {link.label}
            </Link>
          </div>

          {/* Submenu links */}
          {link.children && (
            <ul className="pl-4 space-y-1">
              {link.children.map((child) => (
                <li key={child.path}>
                  <Link
                    to={child.path}
                    className={`block p-2 rounded text-sm hover:bg-gray-100 transition-colors ${
                      location.pathname === child.path ? "bg-gray-200" : ""
                    }`}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Separator line */}
          {index < links.length - 1 && <hr className="my-2 border-gray-300" />}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white text-black p-4 shadow-md overflow-y-auto scrollbar-hide">
      {/* Logo */}
      <div className="mb-6 flex items-center justify-center">
        <img src="/images/yarn.jpg" alt="Yarn Logo" className="w-12 h-12 object-contain" />
        <span className="ml-2 font-bold text-lg" style={{ fontFamily: "Bookman Old Style" }}>
          Crochet Dream
        </span>
      </div>

      {/* Navigation Links */}
      <nav>{renderLinks(navLinks)}</nav>

      {/* Profile Icon at Bottom */}
      <div className="mt-auto flex justify-center">
        <Link
          to="/profile"
          className="p-2 rounded hover:bg-gray-100 transition-colors"
        >
          <User size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
