import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar, ChevronLeft, ChevronRight, Download } from "lucide-react";

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API
const courseData = [
  { name: "Tháng 1", enrolled: 65, completed: 40 },
  { name: "Tháng 2", enrolled: 59, completed: 30 },
  { name: "Tháng 3", enrolled: 80, completed: 45 },
  { name: "Tháng 4", enrolled: 81, completed: 55 },
  { name: "Tháng 5", enrolled: 56, completed: 30 },
  { name: "Tháng 6", enrolled: 55, completed: 25 },
  { name: "Tháng 7", enrolled: 40, completed: 20 },
];

const categoryData = [
  { name: "Lập trình", value: 400 },
  { name: "Thiết kế", value: 300 },
  { name: "Marketing", value: 300 },
  { name: "Ngoại ngữ", value: 200 },
  { name: "Kỹ năng mềm", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const Analytics = () => {
  const isDarkMode = false;
  const [dateRange, setDateRange] = useState("7days");
  const [isDownloading, setIsDownloading] = useState(false);

  // Giả lập download báo cáo
  const handleDownloadReport = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className={`p-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} min-h-screen`}>
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Phân tích dữ liệu</h1>
          <p className="text-gray-500 dark:text-gray-400">Theo dõi hiệu suất và xu hướng của khóa học</p>
        </header>

        <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2 rounded-lg bg-gray-100 p-2 dark:bg-gray-800">
            <button
              className={`rounded-md px-3 py-1 ${dateRange === "7days" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              onClick={() => setDateRange("7days")}
            >
              7 ngày
            </button>
            <button
              className={`rounded-md px-3 py-1 ${dateRange === "30days" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              onClick={() => setDateRange("30days")}
            >
              30 ngày
            </button>
            <button
              className={`rounded-md px-3 py-1 ${dateRange === "90days" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              onClick={() => setDateRange("90days")}
            >
              90 ngày
            </button>
            <button
              className={`rounded-md px-3 py-1 ${dateRange === "custom" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
              onClick={() => setDateRange("custom")}
            >
              <Calendar size={18} />
            </button>
          </div>

          <button
            onClick={handleDownloadReport}
            disabled={isDownloading}
            className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600"
          >
            {isDownloading ? (
              <>
                <span className="mr-2">Đang tải...</span>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              </>
            ) : (
              <>
                <Download size={18} className="mr-2" />
                Tải báo cáo
              </>
            )}
          </button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Tổng số học viên" value="1,245" change="+12.5%" isPositive={true} isDarkMode={isDarkMode} />
          <StatCard title="Khóa học đã bán" value="867" change="+8.3%" isPositive={true} isDarkMode={isDarkMode} />
          <StatCard title="Tỷ lệ hoàn thành" value="68.5%" change="-2.1%" isPositive={false} isDarkMode={isDarkMode} />
          <StatCard title="Doanh thu" value="84,520,000đ" change="+15.3%" isPositive={true} isDarkMode={isDarkMode} />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div
            className={`col-span-2 rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Số lượng khóa học</h2>
              <div className="flex space-x-2">
                <button className="rounded p-1 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ChevronLeft size={20} />
                </button>
                <button className="rounded p-1 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#444" : "#eee"} />
                  <XAxis dataKey="name" stroke={isDarkMode ? "#aaa" : "#666"} />
                  <YAxis stroke={isDarkMode ? "#aaa" : "#666"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      borderColor: isDarkMode ? "#555" : "#ddd",
                      color: isDarkMode ? "#fff" : "#333",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="enrolled" name="Đăng ký" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completed" name="Hoàn thành" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all`}>
            <h2 className="mb-4 text-xl font-semibold">Phân bố theo danh mục</h2>
            <div className="flex h-80 items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      borderColor: isDarkMode ? "#555" : "#ddd",
                      color: isDarkMode ? "#fff" : "#333",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} mb-8 transition-all`}>
          <h2 className="mb-4 text-xl font-semibold">Khóa học nổi bật</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Khóa học
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Học viên
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Đánh giá
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Hoàn thành
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Doanh thu
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <TableRow
                  course="React JS từ cơ bản đến nâng cao"
                  students={245}
                  rating={4.8}
                  completion={78}
                  revenue="24,500,000đ"
                  isDarkMode={isDarkMode}
                />
                <TableRow
                  course="Thiết kế UI/UX hiện đại"
                  students={187}
                  rating={4.6}
                  completion={71}
                  revenue="18,700,000đ"
                  isDarkMode={isDarkMode}
                />
                <TableRow
                  course="Python cho AI và Machine Learning"
                  students={156}
                  rating={4.9}
                  completion={82}
                  revenue="15,600,000đ"
                  isDarkMode={isDarkMode}
                />
                <TableRow
                  course="Digital Marketing tổng quát"
                  students={132}
                  rating={4.5}
                  completion={68}
                  revenue="13,200,000đ"
                  isDarkMode={isDarkMode}
                />
                <TableRow
                  course="Tiếng Anh giao tiếp nâng cao"
                  students={128}
                  rating={4.7}
                  completion={75}
                  revenue="12,800,000đ"
                  isDarkMode={isDarkMode}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component con cho thống kê
const StatCard = ({ title, value, change, isPositive, isDarkMode }) => {
  return (
    <div
      className={`rounded-xl p-6 shadow-sm transition-all hover:shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <h3 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="mb-2 text-2xl font-bold">{value}</p>
      <div className={`flex items-center text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
        <span>{change}</span>
        <span className="ml-1">so với thời gian trước</span>
      </div>
    </div>
  );
};

// Component con cho hàng trong bảng
const TableRow = ({ course, students, rating, completion, revenue, isDarkMode }) => {
  return (
    <tr className={`transition-colors hover:bg-gray-50 dark:hover:bg-gray-700`}>
      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">{course}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{students}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center">
          <span className="mr-1 text-yellow-500">★</span>
          <span>{rating}/5</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600">
          <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${completion}%` }}></div>
        </div>
        <span className="mt-1 text-xs">{completion}%</span>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{revenue}</td>
    </tr>
  );
};

export default Analytics;
