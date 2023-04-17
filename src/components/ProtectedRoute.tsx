import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token  } = useAuthStore();
;
  return !token ? <Navigate to="/login" replace /> : children;
};

export default ProtectedRoute;





// import { Navigate } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";

// interface ProtectedRouteProps {
//   children: JSX.Element;
//   role?: "user" | "admin";
// }

// const ProtectedRoute = ({ children,role }: ProtectedRouteProps) => {
//   const { token, user  } = useAuthStore();
// ;
//   return !token ? <Navigate to="/login" replace /> : children;
// };

// export default ProtectedRoute;



// const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
//   const { token, user } = useAuthStore();
//   console.log(
//     "🚀 ~ file: ProtectedRoute.tsx:26 ~ ProtectedRoute ~ user:",
//     user
//   );

//   if (!token || !user) {
//     return <Navigate to="/login" />;
//   }

//   if (role && user.role !== role) {
//     return <Navigate to="/" replace />;
//   }

//   return <Route element={children} />;
// };

// export default ProtectedRoute;



