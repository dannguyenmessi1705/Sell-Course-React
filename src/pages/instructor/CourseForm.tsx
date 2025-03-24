// src/pages/instructor/CourseForm.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, X, Plus, Upload } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

// Giả lập dữ liệu danh mục
const categories = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Mobile Development" },
  { id: 3, name: "Data Science" },
  { id: 4, name: "UI/UX Design" },
  { id: 5, name: "Business" },
];

// Cấu trúc khóa học
interface CourseFormData {
  title: string;
  description: string;
  price: number;
  category_id: number;
  is_published: boolean;
  image_url: string;
}

const CourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditMode = !!id;

  const [formData, setFormData] = useState<CourseFormData>({
    title: "",
    description: "",
    price: 0,
    category_id: 1,
    is_published: false,
    image_url: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Giả lập lấy dữ liệu nếu đang ở chế độ chỉnh sửa
    if (isEditMode) {
      setIsLoading(true);
      // Thay thế bằng API call thực tế
      setTimeout(() => {
        setFormData({
          title: "Complete Web Development Bootcamp",
          description: "Learn web development from scratch with hands-on projects",
          price: 89.99,
          category_id: 1,
          is_published: true,
          image_url: "/placeholder.svg?height=400&width=700",
        });
        setIsLoading(false);
      }, 500);
    }
  }, [isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Ở đây sẽ là API call để tạo hoặc cập nhật khóa học
      // Mô phỏng thời gian xử lý
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Chuyển hướng về trang dashboard sau khi thành công
      navigate("/instructor");
    } catch (err) {
      setError("Có lỗi xảy ra khi lưu khóa học. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && isEditMode) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="border-t-primary h-12 w-12 animate-spin rounded-full border-4 border-gray-200"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-4 rounded-full p-2 hover:bg-gray-200">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold">{isEditMode ? "Chỉnh sửa khóa học" : "Tạo khóa học mới"}</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate(-1)}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90 flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors disabled:opacity-70"
            >
              {isLoading ? (
                <>Đang lưu...</>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Lưu khóa học
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 flex items-center rounded-md bg-red-50 p-4 text-red-700">
            <X className="mr-2 h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        <form className="space-y-8">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Thông tin cơ bản</h2>

            <div className="mb-4">
              <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
                Tiêu đề khóa học <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-700">
                Mô tả khóa học <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="category_id" className="mb-1 block text-sm font-medium text-gray-700">
                  Danh mục <span className="text-red-500">*</span>
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="price" className="mb-1 block text-sm font-medium text-gray-700">
                  Giá ($) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_published"
                  name="is_published"
                  checked={formData.is_published}
                  onChange={handleChange}
                  className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="is_published" className="ml-2 text-sm font-medium text-gray-700">
                  Xuất bản khóa học (hiển thị với học viên)
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Hình ảnh khóa học</h2>

            <div className="mb-4">
              <label htmlFor="image_url" className="mb-1 block text-sm font-medium text-gray-700">
                URL Hình ảnh
              </label>
              <input
                type="text"
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-2 focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-6">
                {formData.image_url ? (
                  <div className="relative">
                    <img src={formData.image_url} alt="Course thumbnail" className="h-48 w-auto object-cover" />
                    <button
                      onClick={() => setFormData({ ...formData, image_url: "" })}
                      className="absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Kéo thả hoặc nhấp để tải lên hình ảnh</p>
                    <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF tối đa 10MB</p>
                    <button className="mt-4 rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
                      Chọn tệp
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
