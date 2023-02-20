import { useAuthStore } from "../store/useAuthStore";
import api from "../token";

interface RegisterData {
  email: string;
  password: string;
}

export const register = async (data: RegisterData) => {
  try {
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
    console.log(response.data);
    const { accessToken } = response.data;
    console.log("🚀 ~ file: register.ts:13 ~ login ~ token", accessToken);
    useAuthStore.getState().setToken(accessToken);
  } catch (error) {
    console.error(error);
  }
};
