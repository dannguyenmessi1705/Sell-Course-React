// src/pages/student/StudentDashboard.tsx
import { useState } from "react";
import { Book, Clock, Award, BarChart2, Calendar, CheckCircle, ChevronRight, User } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

// Sử dụng dữ liệu từ file Dashboard.tsx hiện tại
import { enrolledCourses, upcomingEvents, achievements, learningStats } from "../../data/student-data";

// Helper function để render icon dựa trên tên
const renderAchievementIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "Clock":
      return <Clock className={className} />;
    case "Award":
      return <Award className={className} />;
    case "CheckCircle":
      return <CheckCircle className={className} />;
    case "Book":
      return <Book className={className} />;
    default:
      return <Award className={className} />;
  }
};

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const { user } = useAuth();

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Dashboard header với thông tin Profile */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Chào mừng trở lại, {user?.fullname || "Học viên"}!
            </h1>
            <p className="text-gray-600">Theo dõi tiến độ học tập và tiếp tục các khóa học của bạn</p>
          </div>
          <div className="mt-6 flex items-center md:mt-0">
            <div className="mr-4">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="border-primary h-16 w-16 rounded-full border-2 object-cover"
                />
              ) : (
                <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-full">
                  <User className="h-8 w-8" />
                </div>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{user?.fullname || "Học viên"}</h2>
              <p className="text-sm text-gray-500">{user?.email || "email@example.com"}</p>
              <Link to="/profile" className="text-primary mt-1 inline-flex text-sm hover:underline">
                Cập nhật hồ sơ
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard stats */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="bg-primary/10 mr-4 rounded-full p-3">
              <Book className="text-primary h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Khóa học đã đăng ký</p>
              <p className="text-2xl font-bold text-gray-900">{learningStats.enrolledCourses}</p>
            </div>
          </div>
          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-green-100 p-3">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Giờ học đã hoàn thành</p>
              <p className="text-2xl font-bold text-gray-900">{learningStats.hoursLearned}</p>
            </div>
          </div>
          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-amber-100 p-3">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Chứng chỉ đạt được</p>
              <p className="text-2xl font-bold text-gray-900">{learningStats.certificates}</p>
            </div>
          </div>
          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-purple-100 p-3">
              <BarChart2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tiến độ tổng thể</p>
              <p className="text-2xl font-bold text-gray-900">{learningStats.overallProgress}%</p>
            </div>
          </div>
        </div>

        {/* Dashboard tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("courses")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "courses"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Khóa học của tôi
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "events"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Sự kiện sắp tới
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "achievements"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Thành tích
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "profile"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Hồ sơ cá nhân
            </button>
          </nav>
        </div>

        {/* Tab content */}
        <div>
          {/* My Courses tab */}
          {activeTab === "courses" && (
            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4">
                      <img src={course.image} alt={course.title} className="h-48 w-full object-cover md:h-full" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                            {course.category}
                          </span>
                          <span className="text-sm text-gray-500">Truy cập gần nhất: {course.lastAccessed}</span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-gray-900">{course.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">Giảng viên: {course.instructor}</p>
                      </div>
                      <div className="mt-4">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Tiến độ</span>
                          <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
                        </div>
                        <div className="overflow-hidden rounded-full bg-gray-200">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Link
                            to={`/courses/${course.id}`}
                            className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white"
                          >
                            Tiếp tục học
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upcoming Events tab */}
          {activeTab === "events" && (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center">
                        <Calendar className="text-primary mr-2 h-5 w-5" />
                        <span className="text-primary text-sm font-medium">{event.date}</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{event.time}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900">{event.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">Giảng viên: {event.instructor}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium">
                        Đăng ký tham gia
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements tab */}
          {activeTab === "achievements" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4">
                      {renderAchievementIcon(achievement.iconName, `h-8 w-8 ${achievement.iconColor}`)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-500">Đạt được: {achievement.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Profile tab */}
          {activeTab === "profile" && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center">
                <div className="mr-6">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className="border-primary h-24 w-24 rounded-full border-2 object-cover"
                    />
                  ) : (
                    <div className="bg-primary/10 text-primary flex h-24 w-24 items-center justify-center rounded-full">
                      <User className="h-12 w-12" />
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user?.fullname || "Tên học viên"}</h2>
                  <p className="text-gray-500">{user?.email || "email@example.com"}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Thành viên từ:{" "}
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString("vi-VN") : "01/01/2023"}
                  </p>
                </div>
              </div>

              <div className="mb-6 border-t border-gray-200 pt-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Thông tin cá nhân</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Họ và tên</p>
                    <p className="mt-1 text-gray-900">{user?.fullname || "Chưa cập nhật"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Tên người dùng</p>
                    <p className="mt-1 text-gray-900">{user?.username || "Chưa cập nhật"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1 text-gray-900">{user?.email || "Chưa cập nhật"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Ngày sinh</p>
                    <p className="mt-1 text-gray-900">
                      {user?.date_of_birth ? new Date(user.date_of_birth).toLocaleDateString("vi-VN") : "Chưa cập nhật"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link
                  to="/profile"
                  className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white"
                >
                  Chỉnh sửa hồ sơ
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
