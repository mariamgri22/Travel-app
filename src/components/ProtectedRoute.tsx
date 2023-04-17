// import { Navigate } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";

// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { token  } = useAuthStore();
// ;
//   return !token ? <Navigate to="/login" replace /> : children;
// };

// export default ProtectedRoute;
import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

type Role = "user" | "admin";

const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole: Role }) => {
  const { token, role } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    } else if (!role.includes(requiredRole)) {
      navigate("/", { replace: true });
    }
  }, [navigate, requiredRole, role, token]);

  return children;
};

export default ProtectedRoute;
