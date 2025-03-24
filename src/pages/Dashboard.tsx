import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import type { User, Course, Enrollment } from "../types";

// Components cho từng tab của Dashboard
function Overview() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Tổng quan</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-4 sm:p-6">
          <h3 className="mb-2 text-sm font-semibold text-blue-700 sm:text-base">Khóa học đã đăng ký</h3>
          <p className="text-2xl font-bold text-blue-600 sm:text-3xl">5</p>
        </div>
        <div className="rounded-lg bg-green-50 p-4 sm:p-6">
          <h3 className="mb-2 text-sm font-semibold text-green-700 sm:text-base">Khóa học đã hoàn thành</h3>
          <p className="text-2xl font-bold text-green-600 sm:text-3xl">3</p>
        </div>
        <div className="rounded-lg bg-purple-50 p-4 sm:p-6">
          <h3 className="mb-2 text-sm font-semibold text-purple-700 sm:text-base">Chứng chỉ đã nhận</h3>
          <p className="text-2xl font-bold text-purple-600 sm:text-3xl">2</p>
        </div>
      </div>
    </div>
  );
}

function MyCourses() {
  const [enrollments, setEnrollments] = useState<(Enrollment & { course: Course })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchEnrollments = async () => {
      try {
        const response = await Promise.resolve([
          {
            id: 1,
            student_id: 1,
            course_id: 1,
            purchased_at: new Date(),
            created_at: new Date(),
            last_updated_at: new Date(),
            course: {
              id: 1,
              title: "React for Beginners",
              description: "Learn React from scratch with hands-on projects",
              price: 499000,
              instructor_id: 1,
              category_id: 1,
              is_published: true,
              image_url: "https://placehold.co/600x400",
              created_at: new Date(),
              last_updated_at: new Date(),
            },
          },
        ]);
        setEnrollments(response);
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-32 rounded-lg bg-gray-200" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Khóa học của tôi</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {enrollments.map((enrollment) => (
          <div key={enrollment.id} className="flex flex-col rounded-lg bg-white p-4 shadow-sm">
            <img
              src={enrollment.course.image_url}
              alt={enrollment.course.title}
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />
            <div className="flex flex-grow flex-col">
              <h3 className="mb-2 font-semibold">{enrollment.course.title}</h3>
              <p className="mb-4 line-clamp-2 text-sm text-gray-600">{enrollment.course.description}</p>
              <Link to={`/courses/${enrollment.course.id}`} className="mt-auto text-blue-600 hover:text-blue-700">
                Tiếp tục học →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachingCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchCourses = async () => {
      try {
        const response = await Promise.resolve([
          {
            id: 1,
            title: "React for Beginners",
            description: "Learn React from scratch with hands-on projects",
            price: 499000,
            instructor_id: 1,
            category_id: 1,
            is_published: true,
            image_url: "https://placehold.co/600x400",
            created_at: new Date(),
            last_updated_at: new Date(),
          },
        ]);
        setCourses(response);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-32 rounded-lg bg-gray-200" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Khóa học giảng dạy</h2>
        <Link
          to="/dashboard/courses/new"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700 sm:w-auto"
        >
          Tạo khóa học mới
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col rounded-lg bg-white p-4 shadow-sm">
            <img src={course.image_url} alt={course.title} className="mb-4 h-48 w-full rounded-lg object-cover" />
            <div className="flex flex-grow flex-col">
              <h3 className="mb-2 font-semibold">{course.title}</h3>
              <p className="mb-4 line-clamp-2 text-sm text-gray-600">{course.description}</p>
              <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span
                  className={`inline-block rounded-full px-2 py-1 text-xs ${
                    course.is_published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {course.is_published ? "Đã xuất bản" : "Bản nháp"}
                </span>
                <div className="flex gap-2 sm:gap-4">
                  <Link to={`/dashboard/courses/${course.id}/edit`} className="text-blue-600 hover:text-blue-700">
                    Chỉnh sửa
                  </Link>
                  <Link to={`/dashboard/courses/${course.id}/lessons`} className="text-blue-600 hover:text-blue-700">
                    Quản lý bài học
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Settings() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchUser = async () => {
      try {
        const response = await Promise.resolve({
          id: 1,
          username: "johndoe",
          fullname: "John Doe",
          email: "john@example.com",
          role: "instructor" as const,
          date_of_birth: new Date(),
          password: "",
          avatar: "https://placehold.co/100x100",
          created_at: new Date(),
          last_updated_at: new Date(),
        });
        setUser(response);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading || !user) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-32 rounded-lg bg-gray-200" />
        <div className="h-20 rounded-lg bg-gray-200" />
        <div className="h-20 rounded-lg bg-gray-200" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Cài đặt tài khoản</h2>
      <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-6 flex flex-col items-center text-center sm:flex-row sm:text-left">
          <img src={user.avatar} alt={user.fullname} className="mb-4 size-20 rounded-full sm:mr-4 sm:mb-0" />
          <div>
            <h3 className="font-semibold">{user.fullname}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Họ và tên</label>
            <input
              type="text"
              defaultValue={user.fullname}
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Ngày sinh</label>
            <input
              type="date"
              defaultValue={user.date_of_birth.toISOString().split("T")[0]}
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 sm:w-auto"
          >
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  // TODO: Replace with actual auth state
  const user = {
    role: "instructor" as const,
  };

  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Tổng quan", component: Overview },
    { id: "my-courses", label: "Khóa học của tôi", component: MyCourses },
    ...(user.role === "instructor"
      ? [
          {
            id: "teaching",
            label: "Khóa học giảng dạy",
            component: TeachingCourses,
          },
        ]
      : []),
    { id: "settings", label: "Cài đặt", component: Settings },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || Overview;

  return (
    <div className="flex min-h-screen w-full">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 rounded-md bg-blue-600 px-4 py-2 text-white lg:hidden"
      >
        {isSidebarOpen ? "Đóng menu" : "Mở menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sticky top-0 h-full overflow-y-auto p-4">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex w-full items-center rounded-md px-4 py-2 text-left ${
                  activeTab === tab.id ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsSidebarOpen(false);
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <div className="h-full p-4 lg:p-8">
          <div className="h-full rounded-lg bg-white p-6 shadow-sm">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
