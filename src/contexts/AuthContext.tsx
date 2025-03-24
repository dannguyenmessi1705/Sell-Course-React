// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "../types";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isStudent: boolean;
  isInstructor: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Kiểm tra nếu người dùng đã đăng nhập từ session storage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // Giả lập API call - thay thế bằng API thực khi có
      const mockUser: User = {
        id: 1,
        username: "user1",
        fullname: "Người Dùng",
        email: email,
        role: email.includes("admin") ? "admin" : email.includes("instructor") ? "instructor" : "student",
        date_of_birth: new Date(),
        password: "",
        created_at: new Date(),
        last_updated_at: new Date(),
      };

      setUser(mockUser);
      sessionStorage.setItem("user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  const isAuthenticated = !!user;
  const isStudent = isAuthenticated && user?.role === "student";
  const isInstructor = isAuthenticated && user?.role === "instructor";
  const isAdmin = isAuthenticated && user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated,
        isStudent,
        isInstructor,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth phải được sử dụng trong AuthProvider");
  }
  return context;
};
