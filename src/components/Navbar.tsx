"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <span className="text-primary text-2xl font-bold">CourseHub</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/courses"
                className="hover:border-primary inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 transition duration-150 hover:text-gray-700"
              >
                Courses
              </Link>
              <Link
                to="/dashboard"
                className="hover:border-primary inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 transition duration-150 hover:text-gray-700"
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="hidden items-center md:flex">
            <div className="flex flex-shrink-0 items-center space-x-4">
              <Link
                to="/cart"
                className="hover:text-primary relative rounded-full p-2 text-gray-600 transition duration-150 hover:bg-gray-100"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="bg-primary absolute top-0 right-0 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full px-2 py-1 text-xs leading-none font-bold text-white">
                  3
                </span>
              </Link>
              <Link
                to="/login"
                className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white transition duration-150"
              >
                <User className="mr-2 h-4 w-4" />
                Login
              </Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-primary inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition duration-150 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 pt-2 pb-3">
          <Link
            to="/courses"
            className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
          >
            Courses
          </Link>
          <Link
            to="/dashboard"
            className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
          >
            Dashboard
          </Link>
          <Link
            to="/cart"
            className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
