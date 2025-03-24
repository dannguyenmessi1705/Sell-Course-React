// src/pages/Unauthorized.tsx
import { Link } from "react-router-dom";
import { ShieldX } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Unauthorized() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center">
      <ShieldX className="mb-6 h-20 w-20 text-red-500" />
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Không có quyền truy cập</h1>
      <p className="mb-8 max-w-md text-center text-gray-600">
        Xin lỗi, bạn không có quyền truy cập vào trang này. Tài khoản của bạn hiện tại có vai trò là{" "}
        <span className="font-semibold">
          {user?.role === "student"
            ? "Học viên"
            : user?.role === "instructor"
              ? "Giảng viên"
              : user?.role === "admin"
                ? "Quản trị viên"
                : "Không xác định"}
        </span>
        .
      </p>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="rounded-md bg-gray-200 px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-300"
        >
          Về trang chủ
        </Link>
        <Link
          to="/dashboard"
          className="bg-primary hover:bg-primary/90 rounded-md px-6 py-2 font-medium text-white transition-colors"
        >
          Đến Dashboard của bạn
        </Link>
      </div>
    </div>
  );
}
