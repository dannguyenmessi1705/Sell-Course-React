// src/components/guards/RouteGuard.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ReactNode } from "react";

interface RouteGuardProps {
  children: ReactNode;
  allowedRoles?: ("student" | "instructor" | "admin")[];
}

const RouteGuard = ({ children, allowedRoles }: RouteGuardProps) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="border-t-primary h-12 w-12 animate-spin rounded-full border-4 border-gray-200"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default RouteGuard;
