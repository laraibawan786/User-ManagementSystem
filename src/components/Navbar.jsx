import { Link, useLocation } from "react-router-dom";
import uolLogo from "../assets/logo.jpeg";  

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/register", label: "Register" },
    { path: "/students", label: "Students" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-zinc-700">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* 🎓 Logo + Title */}
        <div className="flex items-center gap-3">
          <img 
            src={uolLogo} 
            alt="UOL Logo" 
            className="w-10 h-10 rounded-full border border-yellow-400 shadow-md"
          />
          <h1 className="text-2xl font-extrabold text-yellow-400 hover:text-yellow-300 transition duration-300">
            The University of Lahore
          </h1>
        </div>

        {/* 🔗 Navigation Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group text-lg font-semibold tracking-wide transition duration-300 ${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              {link.label}
          
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-500 ease-out 
                ${location.pathname === link.path ? "w-full" : "w-0"} 
                group-hover:w-full`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
