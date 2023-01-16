import axios, { AxiosRequestConfig } from "axios";
import { useAuthStore } from "./store/useAuthStore";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const { token } = useAuthStore();
  (config as any).headers.Authorization = token ? `Bearer ${token}` : "";
  console.log(
    "🚀 ~ file: token.ts:9 ~ axios.interceptors.request.use ~ config",
    config
  );

  return config;
});
