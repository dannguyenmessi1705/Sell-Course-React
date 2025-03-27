export interface SignUpRequest {
  username: string;
  fullname: string;
  email: string;
  dateOfBirth: string;
  password: string;
  avatarUrl?: string;
}

export interface ApiResponse<T> {
  status: {
    code: number;
    message: string;
    timestamp: string;
    path: string;
  };
  data: T;
}
