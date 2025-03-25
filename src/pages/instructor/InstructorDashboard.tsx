import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  Star,
  Bell,
  Video,
  Settings,
  ChevronRight,
  BarChart2,
} from "lucide-react";

const InstructorDashboard = () => {
  const isDarkMode = false;
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("overview");

  // Dữ liệu mẫu
  const courseStats = {
    totalStudents: 1245,
    totalCourses: 8,
    totalRevenue: "84,520,000đ",
    averageRating: 4.7,
  };

  const recentCourses = [
    { id: 1, title: "React JS từ cơ bản đến nâng cao", students: 245, revenue: "24,500,000đ", rating: 4.8 },
    { id: 2, title: "NodeJS và Express: Xây dựng REST API", students: 187, revenue: "18,700,000đ", rating: 4.6 },
    { id: 3, title: "TypeScript cho front-end developers", students: 156, revenue: "15,600,000đ", rating: 4.9 },
  ];

  const recentReviews = [
    {
      id: 1,
      courseName: "React JS từ cơ bản đến nâng cao",
      userName: "Nguyễn Văn A",
      rating: 5,
      comment: "Khóa học rất chi tiết và dễ hiểu!",
      date: "12/07/2023",
    },
    {
      id: 2,
      courseName: "NodeJS và Express: Xây dựng REST API",
      userName: "Trần Thị B",
      rating: 4,
      comment: "Tài liệu phong phú, giảng viên nhiệt tình.",
      date: "10/07/2023",
    },
    {
      id: 3,
      courseName: "TypeScript cho front-end developers",
      userName: "Lê Văn C",
      rating: 5,
      comment: "Đã học được nhiều kiến thức mới, rất hữu ích.",
      date: "08/07/2023",
    },
  ];

  const handleViewAnalytics = () => {
    navigate("/instructor/analytics");
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"}`}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Bảng điều khiển giảng viên</h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Quản lý khóa học và tương tác với học viên</p>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0">
            <button
              onClick={handleViewAnalytics}
              className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm transition duration-200 hover:bg-blue-700"
            >
              <BarChart2 size={18} className="mr-2" />
              Thống kê chi tiết
            </button>
            <button className="rounded-lg border border-gray-300 px-4 py-2 transition duration-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800">
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Thống kê tổng quan */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all hover:shadow-md`}
          >
            <div className="flex items-center">
              <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Tổng học viên</p>
                <p className="text-2xl font-bold">{courseStats.totalStudents}</p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all hover:shadow-md`}
          >
            <div className="flex items-center">
              <div className="mr-4 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900 dark:text-green-200">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Khóa học</p>
                <p className="text-2xl font-bold">{courseStats.totalCourses}</p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all hover:shadow-md`}
          >
            <div className="flex items-center">
              <div className="mr-4 rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900 dark:text-purple-200">
                <DollarSign size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Doanh thu</p>
                <p className="text-2xl font-bold">{courseStats.totalRevenue}</p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all hover:shadow-md`}
          >
            <div className="flex items-center">
              <div className="mr-4 rounded-full bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200">
                <Star size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Đánh giá trung bình</p>
                <p className="text-2xl font-bold">{courseStats.averageRating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex space-x-1 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setCurrentTab("overview")}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              currentTab === "overview"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Tổng quan
          </button>
          <button
            onClick={() => setCurrentTab("courses")}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              currentTab === "courses"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Khóa học
          </button>
          <button
            onClick={() => setCurrentTab("reviews")}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              currentTab === "reviews"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Đánh giá
          </button>
        </div>

        {/* Tab Content */}
        {currentTab === "overview" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className={`rounded-xl p-6 shadow-sm lg:col-span-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Khóa học gần đây</h2>
                <button
                  onClick={() => setCurrentTab("courses")}
                  className="flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
                >
                  Xem tất cả <ChevronRight size={16} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                        Khóa học
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                        Học viên
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                        Doanh thu
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                        Đánh giá
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCourses.map((course) => (
                      <tr
                        key={course.id}
                        className="border-b border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-3">
                          <p className="font-medium">{course.title}</p>
                        </td>
                        <td className="px-4 py-3">{course.students}</td>
                        <td className="px-4 py-3">{course.revenue}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Star size={16} className="mr-1 text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Đánh giá gần đây</h2>
                <button
                  onClick={() => setCurrentTab("reviews")}
                  className="flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
                >
                  Xem tất cả <ChevronRight size={16} />
                </button>
              </div>
              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className={`rounded-lg p-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="mb-2 flex items-start justify-between">
                      <p className="font-medium">{review.userName}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={14}
                            className={index < review.rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{review.courseName}</p>
                    <p className="mb-1 text-sm">{review.comment}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentTab === "courses" && (
          <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="mb-4 text-lg font-semibold">Tất cả khóa học</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">Danh sách tất cả khóa học của bạn</p>
            {/* Danh sách khóa học sẽ được thêm sau */}
          </div>
        )}

        {currentTab === "reviews" && (
          <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="mb-4 text-lg font-semibold">Tất cả đánh giá</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">Xem tất cả đánh giá về khóa học của bạn</p>
            {/* Danh sách đánh giá sẽ được thêm sau */}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorDashboard;
