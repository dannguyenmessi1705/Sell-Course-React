import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Course, Lesson, User } from "../types";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [instructor, setInstructor] = useState<User | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        // TODO: Replace with actual API calls
        // Simulated API responses
        const courseResponse = await Promise.resolve({
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
        });

        const instructorResponse = await Promise.resolve({
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

        const lessonsResponse = await Promise.resolve([
          {
            id: 1,
            course_id: 1,
            title: "Introduction to React",
            content: "Learn the basics of React",
            video_url: "https://example.com/video1",
            order: 1,
            created_at: new Date(),
            last_updated_at: new Date(),
          },
          // Add more mock lessons
        ]);

        setCourse(courseResponse);
        setInstructor(instructorResponse);
        setLessons(lessonsResponse);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourseData();
    }
  }, [id]);

  const handleEnroll = async () => {
    // TODO: Implement enrollment logic
    alert("Chức năng đăng ký khóa học sẽ được triển khai sau");
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="mb-8 h-96 rounded-lg bg-gray-200" />
          <div className="mb-4 h-8 w-1/2 rounded bg-gray-200" />
          <div className="mb-2 h-4 w-full rounded bg-gray-200" />
          <div className="mb-2 h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
      </div>
    );
  }

  if (!course || !instructor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl text-gray-600">Không tìm thấy khóa học</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Course Info */}
        <div className="md:col-span-2">
          <img src={course.image_url} alt={course.title} className="mb-8 h-96 w-full rounded-lg object-cover" />
          <h1 className="mb-4 text-3xl font-bold">{course.title}</h1>
          <p className="mb-8 text-gray-600">{course.description}</p>

          {/* Instructor Info */}
          <div className="mb-8 flex items-center">
            <img src={instructor.avatar} alt={instructor.fullname} className="mr-4 size-12 rounded-full" />
            <div>
              <h3 className="font-semibold">Giảng viên</h3>
              <p>{instructor.fullname}</p>
            </div>
          </div>

          {/* Course Content */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">Nội dung khóa học</h2>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="mr-4 text-gray-500">Bài {lesson.order}</span>
                    <h3 className="font-semibold">{lesson.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Card */}
        <div className="md:col-span-1">
          <div className="sticky top-8 rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-3xl font-bold">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(course.price)}
            </div>
            <button
              onClick={handleEnroll}
              className="mb-4 w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Đăng ký ngay
            </button>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Truy cập trọn đời
              </li>
              <li className="flex items-center">
                <svg className="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Chứng chỉ hoàn thành
              </li>
              <li className="flex items-center">
                <svg className="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Hỗ trợ 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
