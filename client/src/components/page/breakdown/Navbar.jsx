import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { FaCoffee } from "react-icons/fa";

const Navbar = ({ refs }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLogin(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userRole");
    setIsLogin(false);
    navigate("/login");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", ref: refs?.homeRef },
    { name: "Gallery", ref: refs?.galleryRef },
    { name: "Whosale", ref: refs?.featuresRef },
    { name: "Promo", ref: refs?.promoRef },
    { name: "Supplier", ref: refs?.clientRef },
    { name: "Cofeé", ref: refs?.barbersRef },
    { name: "Review", ref: refs?.reviewRef },
  ];

  return (
    <nav className="bg-gray-100 text-[#00b14f] p-3 rounded-3xl shadow-lg  hover:text-gray-500 px-4 py-1 transition duration-300">
      <div className="max-w-3xl mx-auto flex justify-between items-center gap-5">
        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer bg-gradient-to-r from-gray-100 to-orange-300 bg-clip-text text-transparent pl-4"
          onClick={() => navigate("#")}
        >
          <img
            src="https://fnb.coffee/wp-content/uploads/2024/07/fnb-coffee-300x300.png"
            alt="FñB Coffee Logo"
            className="w-12 h-12 inline-block mr-2"
          />
          {/* FñB~<div className="italic text-lg">Ćofee</div> */}
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.ref)}
              className="hover:text-orange-400 transition duration-300"
            >
              {item.name}
            </button>
          ))}

          {isLogin ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="text-xs font-bold bg-gray-300 text-#00b14f hover:bg-green-400 px-4 py-1 rounded-full transition duration-300"
            >
              Login / Signup
            </button>
          )}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 rounded-lg mt-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.ref)}
              className="block w-full text-left px-4 py-2 hover:text-orange-400 transition duration-300"
            >
              {item.name}
            </button>
          ))}

          {isLogin ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition duration-300 mt-2"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-white text-gray-900 hover:bg-gray-300 px-4 py-2 rounded-full transition duration-300 mt-2"
            >
              Login / Signup
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
