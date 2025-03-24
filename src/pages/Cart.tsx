import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Course } from "../types";

interface CartItem {
  course: Course;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchCartItems = async () => {
      try {
        // Simulated API response
        const response = await Promise.resolve([
          {
            course: {
              id: 1,
              title: "React for Beginners",
              description: "Learn React from scratch with hands-on projects",
              price: 499000,
              instructor_id: 1,
              category_id: 1,
              is_published: true,
              image_url: "https://placehold.co/600x400",
              created_at: new Date(),
              last_updated_at: new Date(),
            },
            quantity: 1,
          },
          // Add more mock cart items
        ]);
        setCartItems(response);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = (courseId: number) => {
    // TODO: Implement remove item logic
    setCartItems((prev) => prev.filter((item) => item.course.id !== courseId));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.course.price * item.quantity, 0);

  const handleCheckout = async () => {
    // TODO: Implement checkout logic
    alert("Chức năng thanh toán sẽ được triển khai sau");
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="mb-4 h-20 rounded-lg bg-gray-200" />
          <div className="mb-4 h-20 rounded-lg bg-gray-200" />
          <div className="h-20 rounded-lg bg-gray-200" />
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Giỏ hàng trống</h2>
          <p className="mb-8 text-gray-600">Bạn chưa có khóa học nào trong giỏ hàng</p>
          <Link
            to="/courses"
            className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Khám phá khóa học
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Giỏ hàng của bạn</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.course.id} className="flex gap-4 rounded-lg bg-white p-4 shadow-sm">
                <img src={item.course.image_url} alt={item.course.title} className="h-24 w-32 rounded object-cover" />
                <div className="grow">
                  <h3 className="font-semibold">{item.course.title}</h3>
                  <p className="mb-2 text-sm text-gray-600">{item.course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-600">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.course.price)}
                    </span>
                    <button
                      onClick={() => handleRemoveItem(item.course.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Tổng cộng</h2>
            <div className="mb-4 space-y-2">
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalAmount)}
                </span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Tổng cộng</span>
                <span className="text-blue-600">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalAmount)}
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
