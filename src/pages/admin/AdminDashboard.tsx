// src/pages/admin/AdminDashboard.tsx
import { useState } from "react";
import { Users, Book, DollarSign, BarChart2, User, Edit, Trash2, Plus } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

// Dữ liệu mẫu cho admin
const recentUsers = [
  {
    id: 1,
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    role: "student",
    joinDate: "2023-12-01",
  },
  {
    id: 2,
    fullname: "Trần Thị B",
    email: "tranthib@example.com",
    role: "instructor",
    joinDate: "2023-11-15",
  },
  {
    id: 3,
    fullname: "Lê Văn C",
    email: "levanc@example.com",
    role: "student",
    joinDate: "2023-12-05",
  },
  {
    id: 4,
    fullname: "Phạm Thị D",
    email: "phamthid@example.com",
    role: "student",
    joinDate: "2023-12-10",
  },
];

const recentCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Trần Thị B",
    category: "Web Development",
    students: 1250,
    price: 89.99,
    published: true,
    createdAt: "2023-11-20",
  },
  {
    id: 2,
    title: "Advanced JavaScript Techniques",
    instructor: "Trần Thị B",
    category: "Web Development",
    students: 850,
    price: 79.99,
    published: true,
    createdAt: "2023-11-25",
  },
  {
    id: 3,
    title: "Responsive UI Design Masterclass",
    instructor: "Vũ Thị E",
    category: "UI/UX Design",
    students: 0,
    price: 69.99,
    published: false,
    createdAt: "2023-12-05",
  },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user } = useAuth();

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Dashboard header */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Dashboard Quản trị</h1>
          <p className="text-gray-600">Quản lý hệ thống, người dùng và khóa học</p>
        </div>

        {/* Dashboard stats */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="bg-primary/10 mr-4 rounded-full p-3">
              <Users className="text-primary h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng người dùng</p>
              <p className="text-2xl font-bold text-gray-900">5,240</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-green-100 p-3">
              <Book className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng khóa học</p>
              <p className="text-2xl font-bold text-gray-900">128</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-amber-100 p-3">
              <DollarSign className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Doanh thu tháng</p>
              <p className="text-2xl font-bold text-gray-900">$48,250</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-purple-100 p-3">
              <BarChart2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tăng trưởng</p>
              <p className="text-2xl font-bold text-green-600">+24%</p>
            </div>
          </div>
        </div>

        {/* Dashboard tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "overview"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "users"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Quản lý người dùng
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "courses"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Quản lý khóa học
            </button>
          </nav>
        </div>

        {/* Tab content */}
        <div>
          {/* Overview tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Recent users */}
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Người dùng mới</h3>
                  <button className="text-primary text-sm font-medium">Xem tất cả</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead>
                      <tr className="border-b text-left text-sm font-medium text-gray-500">
                        <th className="pr-4 pb-3">Tên</th>
                        <th className="pr-4 pb-3">Vai trò</th>
                        <th className="pr-4 pb-3">Ngày tham gia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b text-sm">
                          <td className="py-3 pr-4">
                            <div className="flex items-center">
                              <div className="bg-primary/10 mr-2 rounded-full p-2">
                                <User className="text-primary h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{user.fullname}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 pr-4">
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 capitalize">
                              {user.role === "student"
                                ? "Học viên"
                                : user.role === "instructor"
                                  ? "Giảng viên"
                                  : "Quản trị viên"}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-gray-500">
                            {new Date(user.joinDate).toLocaleDateString("vi-VN")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent courses */}
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Khóa học mới</h3>
                  <button className="text-primary text-sm font-medium">Xem tất cả</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead>
                      <tr className="border-b text-left text-sm font-medium text-gray-500">
                        <th className="pr-4 pb-3">Tên khóa học</th>
                        <th className="pr-4 pb-3">Giảng viên</th>
                        <th className="pr-4 pb-3">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentCourses.map((course) => (
                        <tr key={course.id} className="border-b text-sm">
                          <td className="py-3 pr-4">
                            <div>
                              <p className="font-medium text-gray-900">{course.title}</p>
                              <p className="text-xs text-gray-500">{course.category}</p>
                            </div>
                          </td>
                          <td className="py-3 pr-4 text-gray-600">{course.instructor}</td>
                          <td className="py-3 pr-4">
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-medium ${
                                course.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {course.published ? "Đã xuất bản" : "Bản nháp"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Users tab */}
          {activeTab === "users" && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">Quản lý người dùng</h3>
                <button className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Thêm người dùng mới
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b text-left text-sm font-medium text-gray-500">
                      <th className="pr-4 pb-3 pl-4">ID</th>
                      <th className="pr-4 pb-3">Tên</th>
                      <th className="pr-4 pb-3">Email</th>
                      <th className="pr-4 pb-3">Vai trò</th>
                      <th className="pr-4 pb-3">Ngày tham gia</th>
                      <th className="pr-4 pb-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b text-sm">
                        <td className="py-3 pr-4 pl-4 text-gray-500">{user.id}</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center">
                            <div className="bg-primary/10 mr-2 rounded-full p-2">
                              <User className="text-primary h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.fullname}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-gray-600">{user.email}</td>
                        <td className="py-3 pr-4">
                          <select className="rounded border border-gray-300 px-2 py-1 text-sm" defaultValue={user.role}>
                            <option value="student">Học viên</option>
                            <option value="instructor">Giảng viên</option>
                            <option value="admin">Quản trị viên</option>
                          </select>
                        </td>
                        <td className="py-3 pr-4 text-gray-500">
                          {new Date(user.joinDate).toLocaleDateString("vi-VN")}
                        </td>
                        <td className="py-3 pr-4">
                          <div className="flex space-x-2">
                            <button className="rounded p-1 text-gray-500 hover:bg-gray-100">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="rounded p-1 text-red-500 hover:bg-gray-100">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Courses tab */}
          {activeTab === "courses" && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">Quản lý khóa học</h3>
                <button className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Thêm khóa học mới
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b text-left text-sm font-medium text-gray-500">
                      <th className="pr-4 pb-3 pl-4">ID</th>
                      <th className="pr-4 pb-3">Tên khóa học</th>
                      <th className="pr-4 pb-3">Giảng viên</th>
                      <th className="pr-4 pb-3">Danh mục</th>
                      <th className="pr-4 pb-3">Giá</th>
                      <th className="pr-4 pb-3">Trạng thái</th>
                      <th className="pr-4 pb-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCourses.map((course) => (
                      <tr key={course.id} className="border-b text-sm">
                        <td className="py-3 pr-4 pl-4 text-gray-500">{course.id}</td>
                        <td className="py-3 pr-4">
                          <div>
                            <p className="font-medium text-gray-900">{course.title}</p>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-gray-600">{course.instructor}</td>
                        <td className="py-3 pr-4 text-gray-600">{course.category}</td>
                        <td className="py-3 pr-4 font-medium text-gray-900">${course.price}</td>
                        <td className="py-3 pr-4">
                          <select
                            className="rounded border border-gray-300 px-2 py-1 text-sm"
                            defaultValue={course.published ? "published" : "draft"}
                          >
                            <option value="published">Đã xuất bản</option>
                            <option value="draft">Bản nháp</option>
                          </select>
                        </td>
                        <td className="py-3 pr-4">
                          <div className="flex space-x-2">
                            <button className="rounded p-1 text-gray-500 hover:bg-gray-100">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="rounded p-1 text-red-500 hover:bg-gray-100">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
