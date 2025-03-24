import { useState } from "react";
import { Book, Clock, Award, BarChart2, Calendar, CheckCircle, ChevronRight } from "lucide-react";

// Mock data for enrolled courses
const enrolledCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    progress: 65,
    lastAccessed: "2 days ago",
    image: "/placeholder.svg?height=120&width=200",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    instructor: "Sarah Johnson",
    progress: 32,
    lastAccessed: "1 week ago",
    image: "/placeholder.svg?height=120&width=200",
    category: "Web Development",
  },
  {
    id: 3,
    title: "iOS App Development with Swift",
    instructor: "Michael Chen",
    progress: 18,
    lastAccessed: "3 days ago",
    image: "/placeholder.svg?height=120&width=200",
    category: "Mobile Development",
  },
];

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Live Q&A Session: Web Development",
    date: "May 15, 2024",
    time: "3:00 PM - 4:30 PM",
    instructor: "John Smith",
  },
  {
    id: 2,
    title: "Workshop: Building a Portfolio Website",
    date: "May 18, 2024",
    time: "1:00 PM - 3:00 PM",
    instructor: "Sarah Johnson",
  },
  {
    id: 3,
    title: "Code Review Session: React Projects",
    date: "May 22, 2024",
    time: "5:00 PM - 6:00 PM",
    instructor: "David Wilson",
  },
];

// Mock data for achievements
const achievements = [
  {
    id: 1,
    title: "Fast Learner",
    description: "Completed 5 course modules in one day",
    date: "April 28, 2024",
    icon: <Clock className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 2,
    title: "Perfect Score",
    description: "Scored 100% on the JavaScript Fundamentals quiz",
    date: "April 15, 2024",
    icon: <Award className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 3,
    title: "Consistent Learner",
    description: "Studied for 7 consecutive days",
    date: "April 10, 2024",
    icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Dashboard header */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
          <p className="text-gray-600">Track your progress and continue learning</p>
        </div>

        {/* Dashboard stats */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="bg-primary/10 mr-4 rounded-full p-3">
              <Book className="text-primary h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-green-100 p-3">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Hours Learned</p>
              <p className="text-2xl font-bold text-gray-900">42</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-amber-100 p-3">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Certificates</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>

          <div className="flex items-center rounded-xl bg-white p-6 shadow-sm">
            <div className="mr-4 rounded-full bg-purple-100 p-3">
              <BarChart2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Overall Progress</p>
              <p className="text-2xl font-bold text-gray-900">38%</p>
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
              My Courses
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "events"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "achievements"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Achievements
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
                          <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="mb-1 flex justify-between">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-gray-200">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white transition-colors">
                          Continue Learning
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
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
                    <div className="flex items-start">
                      <div className="bg-primary/10 mr-4 flex-shrink-0 rounded-full p-3">
                        <Calendar className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">{event.title}</h3>
                        <p className="mb-1 text-gray-500">Instructor: {event.instructor}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>
                            {event.date}, {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        Add to Calendar
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
                    <div className="mr-4">{achievement.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-500">Earned on {achievement.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
