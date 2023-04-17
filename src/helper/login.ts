import { useAuthStore } from "../store/useAuthStore";
import api from "../token";

interface RegisterData {
  email: string;
  password: string;
  role?: string; 
}

export const register = async (data: RegisterData) => {
  try {
    if (!data.role) {
      data.role = "admin";
    }
    const response = await api.post("/register", data);
    console.log(response.data);
    const { accessToken } = response.data;
    console.log("🚀 ~ file: register.ts:13 ~ register ~ token", accessToken);
    useAuthStore.getState().setToken(accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const login = async (data: RegisterData) => {
  try {
    const response = await api.post("/login", data);
    console.log("res.dat", response.data.user.role);
    const { accessToken } = response.data;
    const { role } = response.data.user;
    console.log("🚀 ~ file: register.ts:13 ~ login ~ token", accessToken);
    useAuthStore.getState().setToken(accessToken);
    useAuthStore.getState().setRole(role);
  } catch (error) {
    console.error(error);
  }
};

