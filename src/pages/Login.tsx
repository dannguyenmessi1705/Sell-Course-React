// src/pages/Login.tsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy đường dẫn trước đó (nếu có)
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(formData.email, formData.password);
      toast.success("Đăng nhập thành công!");
      navigate(from, { replace: true });
    } catch (err) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Đăng nhập</h1>

        {error && (
          <div className="mb-4 flex items-center rounded-md bg-red-50 p-4 text-red-700">
            <AlertCircle className="mr-2 h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 w-full rounded-md py-2 font-semibold text-white transition-colors disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div className="mt-6 space-y-2">
          <p className="text-center text-sm text-gray-600">Đăng nhập nhanh với vai trò:</p>
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => {
                setFormData({ email: "student@example.com", password: "password" });
              }}
              className="rounded-md bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
            >
              Học viên
            </button>
            <button
              onClick={() => {
                setFormData({ email: "instructor@example.com", password: "password" });
              }}
              className="rounded-md bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
            >
              Giảng viên
            </button>
            <button
              onClick={() => {
                setFormData({ email: "admin@example.com", password: "password" });
              }}
              className="rounded-md bg-purple-500 px-3 py-1 text-sm text-white hover:bg-purple-600"
            >
              Quản trị viên
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
