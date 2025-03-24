export interface User {
  id: number;
  username: string;
  fullname: string;
  email: string;
  role: "student" | "instructor" | "admin";
  date_of_birth: Date;
  password: string;
  avatar?: string;
  created_at: Date;
  last_updated_at: Date;
}

export interface Category {
  id: number;
  name: string;
  created_at: Date;
  last_updated_at: Date;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor_id: number;
  category_id: number;
  is_published: boolean;
  image_url?: string;
  created_at: Date;
  last_updated_at: Date;
}

export interface Lesson {
  id: number;
  course_id: number;
  title: string;
  content: string;
  video_url?: string;
  image_url?: string;
  order: number;
  created_at: Date;
  last_updated_at: Date;
}

export interface Enrollment {
  id: number;
  student_id: number;
  course_id: number;
  purchased_at: Date;
  created_at: Date;
  last_updated_at: Date;
}

export interface Review {
  id: number;
  student_id: number;
  course_id: number;
  rating: number;
  comment: string;
  created_at: Date;
  last_updated_at: Date;
}

export interface Order {
  id: number;
  student_id: number;
  total_price: number;
  status: "pending" | "completed" | "cancelled";
  created_at: Date;
  last_updated_at: Date;
}

export interface OrderItem {
  id: number;
  order_id: number;
  course_id: number;
  price: number;
  created_at: Date;
  last_updated_at: Date;
}

export interface Payment {
  id: number;
  order_id: number;
  status: "pending" | "completed" | "failed";
  transaction_id?: string;
  created_at: Date;
  last_updated_at: Date;
}
