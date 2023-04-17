import create from "zustand";
import api from "../token";

type Route = {
    path: string;
    roles: string[][];
  }
  

type RoutesState = {
  routes: Route[];
  setRoutes: (routes: Route[]) => void;
};

export const useRoutesStore = create<RoutesState>((set) => ({
  routes: [],
  setRoutes: (routes) => set({ routes }),
}));

export const getRoutes = async () => {
  try {
    const response = await api.get<Route[]>("/routes");
    useRoutesStore.getState().setRoutes(response.data);
  } catch (error) {
    console.error(error);
  }
};

