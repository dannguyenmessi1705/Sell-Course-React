import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">CourseHub</h2>
            <p className="mb-4 text-gray-400">
              Empowering your learning journey with high-quality courses from industry experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 transition-colors hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 transition-colors hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 transition-colors hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Business
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">123 Education St, Learning City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@coursehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} CourseHub. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
