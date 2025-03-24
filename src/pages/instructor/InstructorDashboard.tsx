// src/pages/instructor/InstructorDashboard.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Book, DollarSign, Users, BarChart2, Plus, Edit, Eye, ChevronRight } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

// Dữ liệu mẫu cho instructor
const instructorCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    students: 1250,
    revenue: 12500,
    rating: 4.8,
    published: true,
    lastUpdated: "2 weeks ago",
    image: "/placeholder.svg?height=120&width=200",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Advanced JavaScript Techniques",
    students: 850,
    revenue: 8500,
    rating: 4.7,
    published: true,
    lastUpdated: "1 month ago",
    image: "/placeholder.svg?height=120&width=200",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Responsive UI Design Masterclass",
    students: 0,
    revenue: 0,
    rating: 0,
    published: false,
    lastUpdated: "3 days ago",
    image: "/placeholder.svg?height=120&width=200",
    category: "UI/UX Design",
  },
];

const InstructorDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const { user } = useAuth();

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Dashboard header */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Dashboard Giảng viên</h1>
          <p className="text-gray-600">Quản lý khóa học và theo dõi hiệu suất của bạn</p>
        </div>

        {/* Dashboard stats */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="bg-primary/10 mr-4 rounded-full p-3">
              <Book className="text-primary h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Khóa học</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-green-100 p-3">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Doanh thu</p>
              <p className="text-2xl font-bold text-gray-900">$21,000</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-amber-100 p-3">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Học viên</p>
              <p className="text-2xl font-bold text-gray-900">2,100</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-purple-100 p-3">
              <BarChart2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đánh giá TB</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold">Khóa học của tôi</h2>
          <Link
            to="/instructor/courses/new"
            className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 font-medium text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Tạo khóa học mới
          </Link>
        </div>

        {/* Courses list */}
        <div className="space-y-6">
          {instructorCourses.map((course) => (
            <div key={course.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 lg:w-1/5">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/4 lg:w-4/5">
                  <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-primary mb-1 text-xs font-semibold tracking-wide uppercase">
                        {course.category}
                      </div>
                      <h3 className="mb-1 text-xl font-semibold text-gray-900">{course.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-4">Cập nhật gần nhất: {course.lastUpdated}</span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            course.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {course.published ? "Đã xuất bản" : "Bản nháp"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-sm text-gray-500">Học viên</p>
                      <p className="font-bold text-gray-900">{course.students.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Doanh thu</p>
                      <p className="font-bold text-gray-900">${course.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Đánh giá</p>
                      <p className="font-bold text-gray-900">{course.rating ? course.rating : "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link
                      to={`/instructor/courses/${course.id}/edit`}
                      className="inline-flex items-center rounded border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <Edit className="mr-1 h-4 w-4" />
                      Chỉnh sửa
                    </Link>
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center rounded border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <Eye className="mr-1 h-4 w-4" />
                      Xem trước
                    </Link>
                    <Link
                      to={`/instructor/courses/${course.id}/analytics`}
                      className="inline-flex items-center rounded border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <BarChart2 className="mr-1 h-4 w-4" />
                      Phân tích
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
