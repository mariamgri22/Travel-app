import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useRoutesStore } from "../store/useRoutesStore";
import { Outlet } from "react-router-dom";

type Role = "user" | "admin";

const ProtectedRoute = ({
  children,
  requiredRole,
}: {
  children: JSX.Element;
  requiredRole: Role;
}) => {
  const { token } = useAuthStore();
  const { role } = useAuthStore.getState();
  console.log("🚀 ~ file: ProtectedRoute.tsx:17 ~ role:", role);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    } else if (!role.includes(requiredRole)) {
      navigate("/", { replace: true });
    } else if (
      location.pathname.includes("/admin") &&
      !role.includes("admin")
    ) {
      navigate("/user", { replace: true });
    }
  }, [navigate, requiredRole, role, token, location.pathname]);

  return (
    <div>
      <Outlet />
      {children}
    </div>
  );
};

export default ProtectedRoute;

