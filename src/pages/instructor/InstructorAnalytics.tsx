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
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API
const revenueData = [
  { name: "Tháng 1", amount: 5200000 },
  { name: "Tháng 2", amount: 4800000 },
  { name: "Tháng 3", amount: 6500000 },
  { name: "Tháng 4", amount: 7200000 },
  { name: "Tháng 5", amount: 8100000 },
  { name: "Tháng 6", amount: 9500000 },
  { name: "Tháng 7", amount: 8400000 },
];

const studentData = [
  { name: "Tháng 1", new: 65, active: 240 },
  { name: "Tháng 2", new: 59, active: 280 },
  { name: "Tháng 3", new: 80, active: 320 },
  { name: "Tháng 4", new: 81, active: 340 },
  { name: "Tháng 5", new: 56, active: 350 },
  { name: "Tháng 6", new: 55, active: 370 },
  { name: "Tháng 7", new: 40, active: 390 },
];

const completionData = [
  { name: "React JS", completed: 78, inProgress: 22 },
  { name: "NodeJS", completed: 65, inProgress: 35 },
  { name: "TypeScript", completed: 82, inProgress: 18 },
  { name: "Vue JS", completed: 70, inProgress: 30 },
  { name: "Angular", completed: 60, inProgress: 40 },
];

const courseDistribution = [
  { name: "React JS", students: 240 },
  { name: "NodeJS", students: 180 },
  { name: "TypeScript", students: 156 },
  { name: "Vue JS", students: 120 },
  { name: "Angular", students: 90 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
};

const InstructorAnalytics = () => {
  const isDarkMode = false;
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState("7days");
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeChart, setActiveChart] = useState("revenue");

  // Giả lập download báo cáo
  const handleDownloadReport = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className={`p-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"} min-h-screen`}>
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <button
            onClick={() => navigate("/instructor/dashboard")}
            className="mb-4 flex items-center text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ArrowLeft size={16} className="mr-1" />
            Quay lại bảng điều khiển
          </button>

          <h1 className="mb-2 text-3xl font-bold">Phân tích dữ liệu giảng viên</h1>
          <p className="text-gray-500 dark:text-gray-400">Theo dõi hiệu suất và số liệu thống kê của khóa học</p>
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
                Xuất báo cáo
              </>
            )}
          </button>
        </div>

        {/* Thống kê tổng quan */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Tổng doanh thu"
            value="84,520,000đ"
            change="+15.3%"
            isPositive={true}
            icon={<DollarSign size={24} />}
            color="purple"
            isDarkMode={isDarkMode}
          />
          <StatCard
            title="Tổng học viên"
            value="1,245"
            change="+12.5%"
            isPositive={true}
            icon={<Users size={24} />}
            color="blue"
            isDarkMode={isDarkMode}
          />
          <StatCard
            title="Khóa học hoàn thành"
            value="687"
            change="+8.3%"
            isPositive={true}
            icon={<BookOpen size={24} />}
            color="green"
            isDarkMode={isDarkMode}
          />
          <StatCard
            title="Tỷ lệ tăng trưởng"
            value="18.5%"
            change="+2.1%"
            isPositive={true}
            icon={<TrendingUp size={24} />}
            color="orange"
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Biểu đồ chính */}
        <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} mb-8 transition-all`}>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {activeChart === "revenue" && "Doanh thu theo thời gian"}
              {activeChart === "students" && "Học viên theo thời gian"}
              {activeChart === "completion" && "Tỷ lệ hoàn thành khóa học"}
            </h2>
            <div className="flex space-x-2">
              <button
                className={`rounded-md px-3 py-1 text-sm ${activeChart === "revenue" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveChart("revenue")}
              >
                Doanh thu
              </button>
              <button
                className={`rounded-md px-3 py-1 text-sm ${activeChart === "students" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveChart("students")}
              >
                Học viên
              </button>
              <button
                className={`rounded-md px-3 py-1 text-sm ${activeChart === "completion" ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setActiveChart("completion")}
              >
                Hoàn thành
              </button>
            </div>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              {activeChart === "revenue" ? (
                <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#444" : "#eee"} />
                  <XAxis dataKey="name" stroke={isDarkMode ? "#aaa" : "#666"} />
                  <YAxis stroke={isDarkMode ? "#aaa" : "#666"} tickFormatter={(value) => formatCurrency(value)} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      borderColor: isDarkMode ? "#555" : "#ddd",
                      color: isDarkMode ? "#fff" : "#333",
                    }}
                    formatter={(value) => [formatCurrency(Number(value)), "Doanh thu"]}
                  />
                  <Area type="monotone" dataKey="amount" stroke="#8884d8" fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              ) : activeChart === "students" ? (
                <LineChart data={studentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                  <Line type="monotone" dataKey="new" name="Học viên mới" stroke="#0088FE" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="active" name="Học viên tích cực" stroke="#00C49F" />
                </LineChart>
              ) : (
                <BarChart data={completionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                  <Bar dataKey="completed" name="Hoàn thành" stackId="a" fill="#4f46e5" />
                  <Bar dataKey="inProgress" name="Đang học" stackId="a" fill="#10b981" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div
            className={`col-span-2 rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all`}
          >
            <h2 className="mb-4 text-xl font-semibold">Phân tích theo khóa học</h2>
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
                      Doanh thu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                      Hoàn thành
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                      Đánh giá
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <TableRow
                    course="React JS từ cơ bản đến nâng cao"
                    students={245}
                    revenue="24,500,000đ"
                    completion={78}
                    rating={4.8}
                    isDarkMode={isDarkMode}
                  />
                  <TableRow
                    course="NodeJS và Express: Xây dựng REST API"
                    students={187}
                    revenue="18,700,000đ"
                    completion={65}
                    rating={4.6}
                    isDarkMode={isDarkMode}
                  />
                  <TableRow
                    course="TypeScript cho front-end developers"
                    students={156}
                    revenue="15,600,000đ"
                    completion={82}
                    rating={4.9}
                    isDarkMode={isDarkMode}
                  />
                  <TableRow
                    course="Vue JS - Framework hiện đại"
                    students={120}
                    revenue="12,000,000đ"
                    completion={70}
                    rating={4.7}
                    isDarkMode={isDarkMode}
                  />
                  <TableRow
                    course="Angular - Xây dựng ứng dụng enterprise"
                    students={90}
                    revenue="9,000,000đ"
                    completion={60}
                    rating={4.5}
                    isDarkMode={isDarkMode}
                  />
                </tbody>
              </table>
            </div>
          </div>

          <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all`}>
            <h2 className="mb-4 text-xl font-semibold">Phân bố học viên</h2>
            <div className="flex h-80 items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={courseDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="students"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {courseDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      borderColor: isDarkMode ? "#555" : "#ddd",
                      color: isDarkMode ? "#fff" : "#333",
                    }}
                    formatter={(value, name, props) => [`${value} học viên`, props.payload.name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all`}>
            <h2 className="mb-4 text-xl font-semibold">Xu hướng đánh giá</h2>
            <div className="space-y-4">
              {/* 5 sao */}
              <div className="flex items-center">
                <div className="mr-3 flex w-24 items-center">
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                </div>
                <div className="flex-1">
                  <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-3 rounded-full bg-yellow-500" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <span className="ml-3 w-10 text-sm">70%</span>
              </div>

              {/* 4 sao */}
              <div className="flex items-center">
                <div className="mr-3 flex w-24 items-center">
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="text-gray-300 dark:text-gray-600">★</span>
                </div>
                <div className="flex-1">
                  <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-3 rounded-full bg-yellow-500" style={{ width: "20%" }}></div>
                  </div>
                </div>
                <span className="ml-3 w-10 text-sm">20%</span>
              </div>

              {/* 3 sao */}
              <div className="flex items-center">
                <div className="mr-3 flex w-24 items-center">
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-gray-300 dark:text-gray-600">★</span>
                  <span className="text-gray-300 dark:text-gray-600">★</span>
                </div>
                <div className="flex-1">
                  <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-3 rounded-full bg-yellow-500" style={{ width: "7%" }}></div>
                  </div>
                </div>
                <span className="ml-3 w-10 text-sm">7%</span>
              </div>

              {/* 2 sao */}
              <div className="flex items-center">
                <div className="mr-3 flex w-24 items-center">
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-gray-300 dark:text-gray-600">★</span>
                  <span className="mr-1 text-gray-300 dark:text-gray-600">★</span>
                  <span className="text-gray-300 dark:text-gray-600">★</span>
                </div>
                <div className="flex-1">
                  <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-3 rounded-full bg-yellow-500" style={{ width: "2%" }}></div>
                  </div>
                </div>
                <span className="ml-3 w-10 text-sm">2%</span>
              </div>

              {/* 1 sao */}
              <div className="flex items-center">
                <div className="mr-3 flex w-24 items-center">
                  <span className="mr-1 text-yellow-500">★</span>
                  <span className="mr-1 text-gray-300 dark:text-gray-600">★</span>
                  <span className="mr-1 text-gray-300 dark:text-gray-600">★</span>
                  <span className="mr-1 text-gray-300 dark:text-gray-600">★</span>
                  <span className="text-gray-300 dark:text-gray-600">★</span>
                </div>
                <div className="flex-1">
                  <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-3 rounded-full bg-yellow-500" style={{ width: "1%" }}></div>
                  </div>
                </div>
                <span className="ml-3 w-10 text-sm">1%</span>
              </div>

              <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">Đánh giá trung bình</p>
                <div className="mt-1 flex items-center">
                  <div className="mr-2 text-2xl font-bold">4.7</div>
                  <div className="flex items-center">
                    <span className="mr-1 text-yellow-500">★</span>
                    <span className="mr-1 text-yellow-500">★</span>
                    <span className="mr-1 text-yellow-500">★</span>
                    <span className="mr-1 text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Dựa trên 452 đánh giá</p>
              </div>
            </div>
          </div>

          <div className={`rounded-xl p-6 shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-all`}>
            <h2 className="mb-4 text-xl font-semibold">Phân tích nhân khẩu học</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Độ tuổi</h3>
                <div className="grid grid-cols-5 gap-2">
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700">
                      <div
                        className="absolute bottom-0 w-full rounded-t-lg bg-blue-500"
                        style={{ height: "30%" }}
                      ></div>
                    </div>
                    <span className="mt-1 text-xs">18-24</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700">
                      <div
                        className="absolute bottom-0 w-full rounded-t-lg bg-blue-500"
                        style={{ height: "65%" }}
                      ></div>
                    </div>
                    <span className="mt-1 text-xs">25-34</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700">
                      <div
                        className="absolute bottom-0 w-full rounded-t-lg bg-blue-500"
                        style={{ height: "45%" }}
                      ></div>
                    </div>
                    <span className="mt-1 text-xs">35-44</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700">
                      <div
                        className="absolute bottom-0 w-full rounded-t-lg bg-blue-500"
                        style={{ height: "25%" }}
                      ></div>
                    </div>
                    <span className="mt-1 text-xs">45-54</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700">
                      <div
                        className="absolute bottom-0 w-full rounded-t-lg bg-blue-500"
                        style={{ height: "10%" }}
                      ></div>
                    </div>
                    <span className="mt-1 text-xs">55+</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Giới tính</h3>
                <div className="flex items-center">
                  <div className="h-5 w-2/3 rounded-l-full bg-blue-500"></div>
                  <div className="h-5 w-1/3 rounded-r-full bg-pink-500"></div>
                </div>
                <div className="mt-1 flex justify-between text-xs">
                  <span>Nam (67%)</span>
                  <span>Nữ (33%)</span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Vị trí địa lý</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Hà Nội</span>
                    <span className="text-sm">35%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "35%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">TP. Hồ Chí Minh</span>
                    <span className="text-sm">42%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "42%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Đà Nẵng</span>
                    <span className="text-sm">12%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "12%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Khác</span>
                    <span className="text-sm">11%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "11%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component con cho thống kê
const StatCard = ({
  title,
  value,
  change,
  isPositive,
  icon,
  color,
  isDarkMode,
}: {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: string;
  isDarkMode: boolean;
}) => {
  const colors = {
    blue: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-600 dark:text-blue-200" },
    green: { bg: "bg-green-100 dark:bg-green-900", text: "text-green-600 dark:text-green-200" },
    purple: { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-600 dark:text-purple-200" },
    orange: { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-600 dark:text-orange-200" },
  };

  return (
    <div
      className={`rounded-xl p-6 shadow-sm transition-all hover:shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="mb-3 flex items-center">
        <div className={`rounded-full p-3 ${colors[color as keyof typeof colors].bg} ${colors[color as keyof typeof colors].text} mr-4`}>{icon}</div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      </div>
      <p className="mb-2 text-2xl font-bold">{value}</p>
      <div className={`flex items-center text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
        <span>{change}</span>
        <span className="ml-1">so với thời gian trước</span>
      </div>
    </div>
  );
};

// Component con cho hàng trong bảng
const TableRow = ({ course, students, revenue, completion, rating, isDarkMode }: { course: string; students: number; revenue: string; completion: number; rating: number; isDarkMode: boolean }) => {
  return (
    <tr className={`transition-colors hover:bg-gray-50 dark:hover:bg-gray-700`}>
      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">{course}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{students}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{revenue}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-600">
          <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${completion}%` }}></div>
        </div>
        <span className="mt-1 text-xs">{completion}%</span>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center">
          <span className="mr-1 text-yellow-500">★</span>
          <span>{rating}/5</span>
        </div>
      </td>
    </tr>
  );
};

export default InstructorAnalytics;
