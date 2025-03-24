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

// src/pages/Dashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { StudentDashboard } from "./student";
import { InstructorDashboard } from "./instructor";
import { AdminDashboard } from "./admin";

const Dashboard = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      if (user.role === "admin") {
        navigate("/admin", { replace: true });
      } else if (user.role === "instructor") {
        navigate("/instructor", { replace: true });
      } else {
        navigate("/student", { replace: true });
      }
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="border-t-primary h-12 w-12 animate-spin rounded-full border-4 border-gray-200"></div>
      </div>
    );
  }

  // Backup renders nếu chuyển hướng không thành công
  if (user?.role === "admin") {
    return <AdminDashboard />;
  }

  if (user?.role === "instructor") {
    return <InstructorDashboard />;
  }

  return <StudentDashboard />;
};

export default Dashboard;
