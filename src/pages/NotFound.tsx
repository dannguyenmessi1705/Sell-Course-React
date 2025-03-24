import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-600">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Không tìm thấy trang</h2>
        <p className="mb-8 text-gray-600">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
        <Link to="/" className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
