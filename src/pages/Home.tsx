import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Course } from "../types";

export default function Home() {
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchFeaturedCourses = async () => {
      try {
        // Simulated API response
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
          // Add more mock courses here
        ]);
        setFeaturedCourses(response);
      } catch (error) {
        console.error("Error fetching featured courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCourses();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Học trực tuyến cùng các chuyên gia hàng đầu</h1>
            <p className="mb-8 text-xl">
              Khám phá hàng nghìn khóa học chất lượng cao từ các giảng viên uy tín trên khắp thế giới.
            </p>
            <Link
              to="/courses"
              className="rounded-md bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              Khám phá ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">Khóa học nổi bật</h2>

          {loading ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-96 animate-pulse rounded-lg bg-gray-100 p-4" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {featuredCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <img src={course.image_url} alt={course.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                    <p className="mb-4 text-gray-600">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-600">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(course.price)}
                      </span>
                      <span className="text-gray-500">Xem chi tiết →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Tại sao chọn EduCourse?</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="size-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Nội dung chất lượng</h3>
              <p className="text-gray-600">Các khóa học được biên soạn kỹ lưỡng bởi các chuyên gia hàng đầu</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="size-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Học mọi lúc mọi nơi</h3>
              <p className="text-gray-600">Truy cập và học tập mọi lúc, mọi nơi trên mọi thiết bị</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="size-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cộng đồng hỗ trợ</h3>
              <p className="text-gray-600">Tham gia cộng đồng học viên sôi nổi và nhận hỗ trợ 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
