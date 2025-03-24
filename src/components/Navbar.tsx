// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, User, Book, LogOut, Users, BarChart, Settings } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, isStudent, isInstructor, isAdmin } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
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
                Khóa học
              </Link>

              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  className="hover:border-primary inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 transition duration-150 hover:text-gray-700"
                >
                  Dashboard
                </Link>
              )}

              {isAdmin && (
                <Link
                  to="/admin"
                  className="hover:border-primary inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 transition duration-150 hover:text-gray-700"
                >
                  Quản trị
                </Link>
              )}

              {isInstructor && (
                <Link
                  to="/instructor"
                  className="hover:border-primary inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 transition duration-150 hover:text-gray-700"
                >
                  Giảng dạy
                </Link>
              )}
            </div>
          </div>

          <div className="hidden items-center md:flex">
            <div className="flex flex-shrink-0 items-center space-x-4">
              {isStudent && (
                <Link
                  to="/cart"
                  className="hover:text-primary relative rounded-full p-2 text-gray-600 transition duration-150 hover:bg-gray-100"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span className="bg-primary absolute top-0 right-0 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full px-2 py-1 text-xs leading-none font-bold text-white">
                    3
                  </span>
                </Link>
              )}

              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileMenu}
                    className="hover:text-primary flex items-center rounded-full p-1 text-gray-600 transition duration-150 hover:bg-gray-100"
                  >
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.fullname} className="h-8 w-8 rounded-full object-cover" />
                    ) : (
                      <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-white">
                        {user?.fullname.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="ml-2 text-sm font-medium">{user?.fullname}</span>
                  </button>

                  {isProfileMenuOpen && (
                    <div className="ring-opacity-5 absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black">
                      <div className="border-b border-gray-100 px-4 py-2">
                        <p className="text-sm font-medium text-gray-900">{user?.fullname}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                        <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 capitalize">
                          {user?.role === "student"
                            ? "Học viên"
                            : user?.role === "instructor"
                              ? "Giảng viên"
                              : "Quản trị viên"}
                        </span>
                      </div>

                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          <Book className="mr-2 h-4 w-4" />
                          Dashboard
                        </span>
                      </Link>

                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          <Settings className="mr-2 h-4 w-4" />
                          Cài đặt tài khoản
                        </span>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                      >
                        <span className="flex items-center">
                          <LogOut className="mr-2 h-4 w-4" />
                          Đăng xuất
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white transition duration-150"
                >
                  <User className="mr-2 h-4 w-4" />
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-primary inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition duration-150 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Mở menu</span>
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
            onClick={() => setIsMenuOpen(false)}
          >
            Khóa học
          </Link>

          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}

          {isAdmin && (
            <Link
              to="/admin"
              className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Quản trị
            </Link>
          )}

          {isInstructor && (
            <Link
              to="/instructor"
              className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Giảng dạy
            </Link>
          )}

          {isStudent && (
            <Link
              to="/cart"
              className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Giỏ hàng
            </Link>
          )}

          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Cài đặt tài khoản
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="hover:border-primary block w-full border-l-4 border-transparent py-2 pr-4 pl-3 text-left text-base font-medium text-red-600 transition duration-150 hover:bg-gray-50"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="hover:border-primary block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-600 transition duration-150 hover:bg-gray-50 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
