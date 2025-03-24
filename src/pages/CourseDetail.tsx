import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Clock, Users, BookOpen, Award, Play, Check, ChevronDown, ChevronUp } from "lucide-react";

// Mock course data
const course = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  description:
    "Learn web development from scratch with this comprehensive bootcamp. You'll master HTML, CSS, JavaScript, React, Node.js, and more to become a full-stack developer.",
  instructor: {
    name: "John Smith",
    title: "Senior Web Developer",
    bio: "John has over 10 years of experience in web development and has worked with companies like Google and Facebook. He is passionate about teaching and has helped thousands of students launch their careers.",
    image: "/placeholder.svg?height=100&width=100",
  },
  rating: 4.8,
  reviews: 1250,
  students: 12500,
  duration: "48 hours",
  level: "Beginner to Advanced",
  lastUpdated: "November 2023",
  price: 89.99,
  discountPrice: 19.99,
  image: "/placeholder.svg?height=400&width=700",
  category: "Web Development",
  whatYouWillLearn: [
    "Build 25+ projects including a full e-commerce app",
    "Learn HTML5, CSS3, JavaScript, React, Node.js, MongoDB",
    "Create responsive websites with modern CSS frameworks",
    "Implement authentication and authorization in web apps",
    "Deploy your applications to production",
    "Work with APIs and third-party libraries",
  ],
  curriculum: [
    {
      title: "Introduction to Web Development",
      lessons: 5,
      duration: "2 hours",
      content: [
        { title: "Course Overview", duration: "10 min", preview: true },
        { title: "Setting Up Your Development Environment", duration: "25 min", preview: false },
        { title: "Understanding How the Web Works", duration: "30 min", preview: false },
        { title: "Introduction to HTML", duration: "35 min", preview: true },
        { title: "Your First Web Page", duration: "20 min", preview: false },
      ],
    },
    {
      title: "CSS Fundamentals",
      lessons: 6,
      duration: "3 hours",
      content: [
        { title: "Introduction to CSS", duration: "25 min", preview: false },
        { title: "Selectors and Properties", duration: "35 min", preview: false },
        { title: "Box Model and Layout", duration: "40 min", preview: false },
        { title: "Flexbox and Grid", duration: "45 min", preview: true },
        { title: "Responsive Design", duration: "30 min", preview: false },
        { title: "CSS Frameworks Overview", duration: "25 min", preview: false },
      ],
    },
    {
      title: "JavaScript Essentials",
      lessons: 8,
      duration: "5 hours",
      content: [
        { title: "Introduction to JavaScript", duration: "30 min", preview: true },
        { title: "Variables and Data Types", duration: "35 min", preview: false },
        { title: "Control Flow", duration: "40 min", preview: false },
        { title: "Functions and Scope", duration: "45 min", preview: false },
        { title: "Arrays and Objects", duration: "50 min", preview: false },
        { title: "DOM Manipulation", duration: "55 min", preview: false },
        { title: "Events and Event Handling", duration: "40 min", preview: false },
        { title: "Asynchronous JavaScript", duration: "55 min", preview: false },
      ],
    },
  ],
};

const CourseDetail = () => {
  const { id } = useParams();
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-primary-400 mb-2 text-sm font-semibold tracking-wide uppercase">
                {course.category}
              </div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">{course.title}</h1>
              <p className="mb-6 text-gray-300">{course.description}</p>

              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="ml-1 text-gray-400">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="mr-1 h-5 w-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="mr-1 h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <BookOpen className="mr-1 h-5 w-5" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="mr-1 h-5 w-5" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
              </div>

              <div className="mb-8 flex items-center">
                <img
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="mr-3 h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Created by {course.instructor.name}</p>
                  <p className="text-sm text-gray-400">{course.instructor.title}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="bg-primary hover:bg-primary/90 rounded-lg px-8 py-3 font-medium text-white transition-colors">
                  Enroll Now
                </button>
                <button className="rounded-lg border border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white/10">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-primary/90 hover:bg-primary flex h-16 w-16 items-center justify-center rounded-full text-white transition-colors">
                    <Play className="h-6 w-6 fill-current" />
                  </button>
                </div>
              </div>

              <div className="absolute right-0 -bottom-8 left-0 mx-4 rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">${course.discountPrice}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">${course.price}</span>
                    <span className="ml-2 font-medium text-green-600">
                      {Math.round((1 - course.discountPrice / course.price) * 100)}% off
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <Clock className="mr-1 inline h-4 w-4" />
                    <span>2 days left at this price!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* What you'll learn */}
            <div className="mb-8 rounded-xl bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold">What you'll learn</h2>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex">
                    <Check className="text-primary mr-2 h-6 w-6 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course content */}
            <div className="mb-8 rounded-xl bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold">Course content</h2>
              <div className="mb-4 text-gray-700">
                <span>{course.curriculum.reduce((acc, section) => acc + section.lessons, 0)} lessons • </span>
                <span>{course.duration} total length</span>
              </div>

              <div className="space-y-4">
                {course.curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="overflow-hidden rounded-lg border border-gray-200">
                    <button
                      className="flex w-full items-center justify-between bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection(sectionIndex)}
                    >
                      <div className="font-medium">
                        <span>{section.title}</span>
                        <span className="ml-2 text-sm text-gray-500">
                          {section.lessons} lessons • {section.duration}
                        </span>
                      </div>
                      {expandedSections.includes(sectionIndex) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>

                    {expandedSections.includes(sectionIndex) && (
                      <div className="border-t border-gray-200 p-4">
                        <ul className="space-y-2">
                          {section.content.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Play className="mr-2 h-4 w-4 text-gray-500" />
                                <span>{lesson.title}</span>
                                {lesson.preview && (
                                  <span className="text-primary bg-primary/10 ml-2 rounded-full px-2 py-0.5 text-xs font-medium">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="rounded-xl bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold">Instructor</h2>
              <div className="flex items-start">
                <img
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="mr-4 h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-medium">{course.instructor.name}</h3>
                  <p className="mb-2 text-gray-500">{course.instructor.title}</p>
                  <div className="mb-4 flex items-center">
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <span className="ml-1 font-medium">{course.rating} Instructor Rating</span>
                    <span className="mx-2">•</span>
                    <span>{course.reviews} Reviews</span>
                    <span className="mx-2">•</span>
                    <span>{course.students.toLocaleString()} Students</span>
                  </div>
                  <p className="text-gray-700">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* Sidebar - only visible on large screens, content already shown in hero on mobile */}
            <div className="sticky top-24 hidden rounded-xl bg-white p-6 shadow-md lg:block">
              <h3 className="mb-4 text-xl font-bold">Course includes:</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-gray-500" />
                  <span>{course.duration} of on-demand video</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="mr-3 h-5 w-5 text-gray-500" />
                  <span>{course.curriculum.reduce((acc, section) => acc + section.lessons, 0)} lessons</span>
                </li>
                <li className="flex items-center">
                  <Award className="mr-3 h-5 w-5 text-gray-500" />
                  <span>Certificate of completion</span>
                </li>
              </ul>

              <div className="mb-6">
                <div className="mb-1 text-3xl font-bold text-gray-900">${course.discountPrice}</div>
                <div className="flex items-center">
                  <span className="mr-2 text-lg text-gray-500 line-through">${course.price}</span>
                  <span className="font-medium text-green-600">
                    {Math.round((1 - course.discountPrice / course.price) * 100)}% off
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  <Clock className="mr-1 inline h-4 w-4" />
                  <span>2 days left at this price!</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="bg-primary hover:bg-primary/90 w-full rounded-lg px-6 py-3 font-medium text-white transition-colors">
                  Enroll Now
                </button>
                <button className="w-full rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  Add to Cart
                </button>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>30-Day Money-Back Guarantee</p>
                <p>Full Lifetime Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
