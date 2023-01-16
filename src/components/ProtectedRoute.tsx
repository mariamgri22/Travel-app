import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
 
  return <>{children}</>;
}
