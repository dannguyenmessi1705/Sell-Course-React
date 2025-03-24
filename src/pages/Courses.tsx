import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Course, Category } from "../types";

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);

  useEffect(() => {
    // TODO: Replace with actual API calls
    const fetchData = async () => {
      try {
        // Simulated API responses
        const coursesResponse = await Promise.resolve([
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
          // Add more mock courses
        ]);

        const categoriesResponse = await Promise.resolve([
          {
            id: 1,
            name: "Web Development",
            created_at: new Date(),
            last_updated_at: new Date(),
          },
          // Add more mock categories
        ]);

        setCourses(coursesResponse);
        setCategories(categoriesResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || course.category_id === selectedCategory;
    const matchesPrice =
      course.price >= priceRange[0] && course.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Tìm kiếm khóa học..."
            className="grow rounded-md border p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="rounded-md border p-2"
            value={selectedCategory || ""}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value ? Number(e.target.value) : null,
              )
            }
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span>Khoảng giá:</span>
          <input
            type="range"
            min="0"
            max="10000000"
            step="100000"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="grow"
          />
          <input
            type="range"
            min="0"
            max="10000000"
            step="100000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="grow"
          />
          <span>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(priceRange[0])}
            {" - "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(priceRange[1])}
          </span>
        </div>
      </div>

      {/* Course List */}
      {loading ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-96 animate-pulse rounded-lg bg-gray-100 p-4"
            />
          ))}
        </div>
      ) : (
        <>
          <p className="mb-4">Hiển thị {filteredCourses.length} khóa học</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
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
        </>
      )}
    </div>
  );
}
