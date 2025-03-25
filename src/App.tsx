// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./contexts/AuthContext";
import RouteGuard from "./components/guards/RouteGuard";
import Unauthorized from "./pages/Unauthorized";
import AdminDashboard from "./pages/admin/AdminDashboard";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import InstructorAnalytics from "./pages/instructor/InstructorAnalytics";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:id" element={<CourseDetail />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="unauthorized" element={<Unauthorized />} />

              {/* Các route cho Student */}
              <Route
                path="student"
                element={
                  <RouteGuard allowedRoles={["student", "instructor", "admin"]}>
                    <StudentDashboard />
                  </RouteGuard>
                }
              />
              <Route
                path="cart"
                element={
                  <RouteGuard allowedRoles={["student", "instructor", "admin"]}>
                    <Cart />
                  </RouteGuard>
                }
              />

              {/* Các route cho Instructor */}
              <Route
                path="instructor"
                element={
                  <RouteGuard allowedRoles={["instructor", "admin"]}>
                    <InstructorDashboard />
                  </RouteGuard>
                }
              />

              <Route
                path="instructor/analytics"
                element={
                  <RouteGuard allowedRoles={["instructor", "admin"]}>
                    <InstructorAnalytics />
                  </RouteGuard>
                }
              />

              <Route
                path="analytics"
                element={
                  <RouteGuard allowedRoles={["admin"]}>
                    <Analytics />
                  </RouteGuard>
                }
              />

              {/* Các route cho Admin */}
              <Route
                path="admin"
                element={
                  <RouteGuard allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </RouteGuard>
                }
              />

              <Route
                path="profile"
                element={
                  <RouteGuard allowedRoles={["student", "instructor", "admin"]}>
                    <Profile />
                  </RouteGuard>
                }
              />

              {/* Route chung - sẽ chuyển hướng dựa vào role */}
              <Route
                path="dashboard/*"
                element={
                  <RouteGuard>
                    <Dashboard />
                  </RouteGuard>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
