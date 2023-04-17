import create from "zustand";

type Role = "user" | "admin";

interface AuthState {
  token: string | null;
  role: Role[] ;
 
  setToken: (token: string | null) => void;
  setRole: (role: Role[]) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  token: localStorage.getItem("token"),
 
  role: [],
  setToken: (token) => {
    set({ token });
    if (token) {
      localStorage.setItem("token", token);
    }
  },

  logout: () => {
    set({ token: null });
    localStorage.removeItem("token");
  },

  setRole: (role) => {
    set({ role });
  },
}));
