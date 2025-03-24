// src/components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Cập nhật state để lần render tiếp theo sẽ hiển thị UI dự phòng
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // ghi log lỗi vào dịch vụ báo cáo lỗi
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render UI dự phòng nào
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-red-50 p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-red-600">Đã xảy ra lỗi</h2>
          <p className="mb-6 text-gray-600">Rất tiếc, có lỗi xảy ra trong ứng dụng.</p>
          <pre className="mb-6 max-w-full overflow-auto rounded bg-gray-100 p-4 text-sm text-red-500">
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            className="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          >
            Tải lại trang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
