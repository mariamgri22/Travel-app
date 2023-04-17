// import axios, { AxiosRequestConfig } from "axios";
// import { useAuthStore } from "./store/useAuthStore";

// const api=axios.create(
//   "http//localhost:8000"
// )

// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   const { token } = useAuthStore();
//   (config as any).headers.Authorization = token ? `Bearer ${token}` : "";
//   console.log(
//     "🚀 ~ file: token.ts:9 ~ axios.interceptors.request.use ~ config",
//     config
//   );

//   return config;
// });
// console.log("🚀 ~ file: token.ts:18 ~ api.interceptors.request.use ~ api", api);

// export default api;

import axios from "axios";
import { useAuthStore } from "./store/useAuthStore";
import { useRoutesStore } from "./store/useRoutesStore";

const api = axios.create({
  baseURL: "http://localhost:8001", // Update the base URL to your server
});

api.interceptors.request.use((config) => {
  const { token, role } = useAuthStore.getState();
  const { routes } = useRoutesStore.getState();
 
  if (token) {
    (config as any).headers.Authorization = `Bearer ${token}`;
  }
  const route = routes.find((r) => r.path === config.url);
//!! fix me
  if (route && route.roles && !route.roles.includes(role)) {
    return Promise.reject(new Error("Forbidden"));
  }
  return config;
});

export default api;
