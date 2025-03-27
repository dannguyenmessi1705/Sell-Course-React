import axios from "axios";
import { SignUpRequest, ApiResponse } from "../models/auth";

const API_URL = import.meta.env.VITE_BACKEND_API;

export const authService = {
  signUp: async (data: SignUpRequest): Promise<ApiResponse<any>> => {
    const response = await axios.post(`${API_URL}/auth/signup`, data);
    return response.data;
  },
};
