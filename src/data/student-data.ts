// Dữ liệu khóa học đã đăng ký
export const enrolledCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    progress: 65,
    lastAccessed: "2 ngày trước",
    image: "/placeholder.svg?height=120&width=200",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    instructor: "Sarah Johnson",
    progress: 32,
    lastAccessed: "1 tuần trước",
    image: "/placeholder.svg?height=120&width=200",
    category: "Web Development",
  },
  {
    id: 3,
    title: "iOS App Development with Swift",
    instructor: "Michael Chen",
    progress: 18,
    lastAccessed: "3 ngày trước",
    image: "/placeholder.svg?height=120&width=200",
    category: "Mobile Development",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    instructor: "Emily Rodriguez",
    progress: 45,
    lastAccessed: "Hôm qua",
    image: "/placeholder.svg?height=120&width=200",
    category: "Data Science",
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    instructor: "David Wilson",
    progress: 78,
    lastAccessed: "4 ngày trước",
    image: "/placeholder.svg?height=120&width=200",
    category: "UI/UX Design",
  },
];

// Dữ liệu sự kiện sắp tới
export const upcomingEvents = [
  {
    id: 1,
    title: "Live Q&A Session: Web Development",
    date: "15/05/2024",
    time: "15:00 - 16:30",
    instructor: "John Smith",
  },
  {
    id: 2,
    title: "Workshop: Xây dựng Portfolio Website",
    date: "18/05/2024",
    time: "13:00 - 15:00",
    instructor: "Sarah Johnson",
  },
  {
    id: 3,
    title: "Code Review Session: React Projects",
    date: "22/05/2024",
    time: "17:00 - 18:00",
    instructor: "David Wilson",
  },
  {
    id: 4,
    title: "Webinar: Xu hướng công nghệ 2024",
    date: "25/05/2024",
    time: "19:00 - 20:30",
    instructor: "Trần Anh Tuấn",
  },
  {
    id: 5,
    title: "Hướng dẫn thực hành: MongoDB và Express",
    date: "30/05/2024",
    time: "14:00 - 16:00",
    instructor: "Nguyễn Minh Hiếu",
  },
];

// Dữ liệu thành tựu
export const achievements = [
  {
    id: 1,
    title: "Hoàn thành 10 bài học",
    description: "Bạn đã hoàn thành 10 bài học đầu tiên trong khóa học Lập trình Web cơ bản.",
    date: "15/05/2023",
    iconName: "CheckCircle",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    title: "Thành tích học tập xuất sắc",
    description: "Bạn đã hoàn thành xuất sắc khóa học JavaScript Nâng cao với điểm số 95/100.",
    date: "23/06/2023",
    iconName: "Award",
    iconColor: "text-amber-600",
  },
  {
    id: 3,
    title: "Học liên tục 7 ngày",
    description: "Bạn đã duy trì việc học tập liên tục trong 7 ngày. Tiếp tục phát huy!",
    date: "10/07/2023",
    iconName: "Clock",
    iconColor: "text-blue-600",
  },
];

// Số liệu thống kê học tập
export const learningStats = {
  enrolledCourses: 5,
  completedCourses: 2,
  hoursLearned: 42,
  certificates: 1,
  overallProgress: 38,
  quizzesTaken: 15,
  quizAvgScore: 92,
  streak: 7, // số ngày học liên tiếp
};

// Danh sách chứng chỉ
export const certificates = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    issueDate: "15/03/2024",
    instructor: "John Smith",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "JavaScript Advanced Concepts",
    issueDate: "10/02/2024",
    instructor: "Sarah Johnson",
    image: "/placeholder.svg?height=200&width=300",
  },
];

// Kế hoạch học tập
export const learningPaths = [
  {
    id: 1,
    title: "Full-Stack Developer",
    description: "Lộ trình học để trở thành lập trình viên Full-Stack",
    progress: 45,
    courses: [
      { id: 1, title: "HTML & CSS Fundamentals", completed: true },
      { id: 2, title: "JavaScript Basics", completed: true },
      { id: 3, title: "Advanced JavaScript", completed: false },
      { id: 4, title: "React Fundamentals", completed: false },
      { id: 5, title: "Node.js & Express", completed: false },
      { id: 6, title: "MongoDB", completed: false },
      { id: 7, title: "Full-Stack Project", completed: false },
    ],
  },
  {
    id: 2,
    title: "Data Science Specialist",
    description: "Lộ trình học để trở thành chuyên gia phân tích dữ liệu",
    progress: 20,
    courses: [
      { id: 8, title: "Python Basics", completed: true },
      { id: 9, title: "Data Analysis with Pandas", completed: false },
      { id: 10, title: "Data Visualization", completed: false },
      { id: 11, title: "Machine Learning Fundamentals", completed: false },
      { id: 12, title: "Deep Learning", completed: false },
    ],
  },
];
