import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token  } = useAuthStore();
;
  return !token ? <Navigate to="/login" replace /> : children;
};

export default ProtectedRoute;



