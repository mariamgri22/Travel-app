import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuthStore();

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }
  // console.log(
  //   "🚀 ~ file: ProtectedRoute.tsx:63 ~ ProtectedRoute ~ token",
  //   token
  // );
  // return children;
  return !token ? <Navigate to="/login" replace /> : children;
};

export default ProtectedRoute;
