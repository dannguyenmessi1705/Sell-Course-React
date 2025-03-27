import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SignUpRequest } from "../models/auth";
import { authService } from "../libs/authService";

// Hàm format ngày tháng
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    date_of_birth: "",
  });

  const signUpMutation = useMutation({
    mutationFn: authService.signUp,
    onSuccess: () => {
      toast.success("Đăng ký thành công!");
      navigate("/login");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.status?.message || "Đăng ký thất bại");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Mật khẩu không khớp");
      return;
    }

    const signUpData: SignUpRequest = {
      username: formData.username,
      fullname: formData.fullname,
      email: formData.email,
      dateOfBirth: formatDate(formData.date_of_birth),
      password: formData.password,
    };

    signUpMutation.mutate(signUpData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center py-8">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Đăng ký tài khoản</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="mb-1 block text-sm font-medium text-gray-700">
              Tên đăng nhập
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="fullname" className="mb-1 block text-sm font-medium text-gray-700">
              Họ và tên
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

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
            <label htmlFor="date_of_birth" className="mb-1 block text-sm font-medium text-gray-700">
              Ngày sinh
            </label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              required
              className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.date_of_birth}
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

          <div>
            <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-700">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={signUpMutation.isPending}
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:bg-blue-400"
          >
            {signUpMutation.isPending ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Đã có tài khoản?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
