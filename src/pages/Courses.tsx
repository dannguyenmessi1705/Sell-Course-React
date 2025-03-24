import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, Clock, Users } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    rating: 4.8,
    students: 12500,
    duration: "48 hours",
    level: "Beginner to Advanced",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=350",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    instructor: "Sarah Johnson",
    rating: 4.7,
    students: 8300,
    duration: "32 hours",
    level: "Intermediate",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=350",
    category: "Web Development",
  },
  {
    id: 3,
    title: "iOS App Development with Swift",
    instructor: "Michael Chen",
    rating: 4.9,
    students: 6200,
    duration: "36 hours",
    level: "Intermediate",
    price: 94.99,
    image: "/placeholder.svg?height=200&width=350",
    category: "Mobile Development",
  },
  {
    id: 4,
    title: "Data Science and Machine Learning",
    instructor: "Emily Rodriguez",
    rating: 4.6,
    students: 9800,
    duration: "52 hours",
    level: "Advanced",
    price: 99.99,
    image: "/placeholder.svg?height=200&width=350",
    category: "Data Science",
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    instructor: "David Wilson",
    rating: 4.5,
    students: 7400,
    duration: "28 hours",
    level: "Beginner",
    price: 69.99,
    image: "/placeholder.svg?height=200&width=350",
    category: "UI/UX Design",
  },
  {
    id: 6,
    title: "Python for Data Analysis",
    instructor: "Lisa Wang",
    rating: 4.7,
    students: 8900,
    duration: "40 hours",
    level: "Intermediate",
    price: 84.99,
    image: "/placeholder.svg?height=200&width=350",
    category: "Data Science",
  },
];

const categories = [
  "All Categories",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "UI/UX Design",
  "Business",
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="from-primary to-primary/80 mb-12 rounded-2xl bg-gradient-to-r p-8 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold">Expand Your Knowledge</h1>
            <p className="mb-6 text-xl">
              Discover courses taught by industry experts and take your skills to the next level.
            </p>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-primary block w-full rounded-lg border border-transparent py-3 pr-3 pl-10 text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:outline-none"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center">
            <Filter className="mr-2 h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="text-primary mb-1 text-xs font-semibold tracking-wide uppercase">{course.category}</div>
                <Link to={`/courses/${course.id}`} className="block">
                  <h3 className="hover:text-primary mb-2 text-xl font-semibold text-gray-900 transition-colors">
                    {course.title}
                  </h3>
                </Link>
                <p className="mb-4 text-gray-500">by {course.instructor}</p>

                <div className="mb-4 flex items-center">
                  <div className="mr-2 flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="mr-1 h-4 w-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="mb-4 flex items-center text-sm text-gray-500">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>
                    {course.duration} • {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                  <button className="bg-primary hover:bg-primary/90 rounded-lg px-4 py-2 text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
