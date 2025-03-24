// src/pages/Profile.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Save, User } from "lucide-react";

interface ProfileFormData {
  fullname: string;
  email: string;
  username: string;
  date_of_birth: string;
  bio: string;
  avatar: string;
  old_password: string;
  new_password: string;
  confirm_password: string;
}

const Profile = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ProfileFormData>({
    fullname: "",
    email: "",
    username: "",
    date_of_birth: "",
    bio: "",
    avatar: "",
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [activeTab, setActiveTab] = useState("info");
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (user) {
      // Điền thông tin người dùng vào form
      setFormData({
        ...formData,
        fullname: user.fullname || "",
        email: user.email || "",
        username: user.username || "",
        date_of_birth: user.date_of_birth ? new Date(user.date_of_birth).toISOString().split("T")[0] : "",
        avatar: user.avatar || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsSaving(true);

    try {
      // Giả lập API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Thông báo thành công
      setMessage({
        type: "success",
        text: "Thông tin cá nhân đã được cập nhật thành công!",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: "Đã xảy ra lỗi khi cập nhật thông tin. Vui lòng thử lại.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Kiểm tra mật khẩu xác nhận
    if (formData.new_password !== formData.confirm_password) {
      setMessage({
        type: "error",
        text: "Mật khẩu xác nhận không khớp!",
      });
      return;
    }

    setIsSaving(true);

    try {
      // Giả lập API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset các trường mật khẩu
      setFormData({
        ...formData,
        old_password: "",
        new_password: "",
        confirm_password: "",
      });

      // Thông báo thành công
      setMessage({
        type: "success",
        text: "Mật khẩu đã được cập nhật thành công!",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: "Đã xảy ra lỗi khi đổi mật khẩu. Vui lòng thử lại.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="border-t-primary h-12 w-12 animate-spin rounded-full border-4 border-gray-200"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">Thông tin cá nhân</h1>

        {message && (
          <div
            className={`mb-6 rounded-md p-4 ${
              message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("info")}
              className={`border-b-2 px-4 py-4 text-sm font-medium ${
                activeTab === "info"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Thông tin cá nhân
            </button>
            <button
              onClick={() => setActiveTab("password")}
              className={`border-b-2 px-4 py-4 text-sm font-medium ${
                activeTab === "password"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Đổi mật khẩu
            </button>
          </div>

          <div className="p-6">
            {activeTab === "info" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center sm:flex-row sm:items-start">
                  <div className="mb-4 flex flex-col items-center sm:mr-6 sm:mb-0">
                    <div className="relative">
                      {formData.avatar ? (
                        <img src={formData.avatar} alt="Profile" className="h-24 w-24 rounded-full object-cover" />
                      ) : (
                        <div className="bg-primary flex h-24 w-24 items-center justify-center rounded-full text-white">
                          <User className="h-12 w-12" />
                        </div>
                      )}
                      <button className="bg-primary hover:bg-primary/90 absolute right-0 bottom-0 rounded-full p-1.5 text-white">
                        <User className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Thay đổi ảnh đại diện</p>
                  </div>

                  <div className="w-full">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullname" className="mb-1 block text-sm font-medium text-gray-700">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          id="fullname"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleChange}
                          className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="username" className="mb-1 block text-sm font-medium text-gray-700">
                          Tên người dùng
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
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
                          value={formData.email}
                          onChange={handleChange}
                          className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
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
                          value={formData.date_of_birth}
                          onChange={handleChange}
                          className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="bio" className="mb-1 block text-sm font-medium text-gray-700">
                        Giới thiệu bản thân
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        rows={4}
                        value={formData.bio}
                        onChange={handleChange}
                        className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-white transition-colors disabled:opacity-70"
                  >
                    {isSaving ? (
                      "Đang lưu..."
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Lưu thông tin
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {activeTab === "password" && (
              <form onSubmit={handlePasswordSubmit} className="max-w-md space-y-6">
                <div>
                  <label htmlFor="old_password" className="mb-1 block text-sm font-medium text-gray-700">
                    Mật khẩu hiện tại
                  </label>
                  <input
                    type="password"
                    id="old_password"
                    name="old_password"
                    value={formData.old_password}
                    onChange={handleChange}
                    required
                    className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="new_password" className="mb-1 block text-sm font-medium text-gray-700">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    id="new_password"
                    name="new_password"
                    value={formData.new_password}
                    onChange={handleChange}
                    required
                    className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="confirm_password" className="mb-1 block text-sm font-medium text-gray-700">
                    Xác nhận mật khẩu mới
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-white transition-colors disabled:opacity-70"
                  >
                    {isSaving ? "Đang lưu..." : "Cập nhật mật khẩu"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
