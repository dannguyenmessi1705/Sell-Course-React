import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO: Replace with actual auth state
  const isAuthenticated = false;
  const user = null;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-blue-600">EduCourse</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600">
              Khóa học
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600">
              Danh mục
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <Link to="/cart" className="text-gray-700 hover:text-blue-600">
                  Giỏ hàng
                </Link>
                <button className="text-gray-700 hover:text-blue-600">Đăng xuất</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                  Đăng nhập
                </Link>
                <Link to="/register" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Đăng ký
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="size-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="pb-4 md:hidden">
            <Link to="/courses" className="block py-2 text-gray-700 hover:text-blue-600">
              Khóa học
            </Link>
            <Link to="/categories" className="block py-2 text-gray-700 hover:text-blue-600">
              Danh mục
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <Link to="/cart" className="block py-2 text-gray-700 hover:text-blue-600">
                  Giỏ hàng
                </Link>
                <button className="block w-full py-2 text-left text-gray-700 hover:text-blue-600">Đăng xuất</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 text-gray-700 hover:text-blue-600">
                  Đăng nhập
                </Link>
                <Link to="/register" className="block py-2 text-gray-700 hover:text-blue-600">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
