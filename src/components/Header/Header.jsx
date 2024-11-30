import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Social icons from react-icons
import { Link } from "react-router-dom";

function Header() {
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgColor("bg-[#a16925]"); // Apply the bg color (#818cf8 is equivalent to indigo-400 in Tailwind)
      } else {
        setBgColor("bg-transparent"); // Revert back to transparent
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 text-white font-semibold p-4 transition-colors duration-300 ${bgColor}`}
    >
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="font-montserrat text-2xl font-bold">
          <span className="font-montserrat">Logo</span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex space-x-10 ">
          <Link
            to="/"
            className="peer text-white hover:text-white font-montserrat hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/recipeList"
            className="peer text-white hover:text-white font-montserrat hover:scale-105"
          >
            Recipes
          </Link>
          <Link
            to="/get-recipe"
            className="peer text-white hover:text-white font-montserrat hover:scale-105"
          >
            Get Recipe
          </Link>
          <Link
            to="/addRecipe"
            className="peer text-white hover:text-white font-montserrat hover:scale-105"
          >
            Add Recipe
          </Link>
          <Link
            to="/about"
            className="peer text-white hover:text-white font-montserrat hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="peer text-white hover:text-white font-montserrat hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* Add Sibling Behavior */}
        <style>
          {`
            nav:hover > .peer:not(:hover) {
              color: gray;
            }
          `}
        </style>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-blue-500 hover:scale-125" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-gray-600 hover:scale-125" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500 hover:scale-125" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
