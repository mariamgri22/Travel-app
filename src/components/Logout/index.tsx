import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";

export function Logout() {
  const { logout } = useAuthStore();
  logout();
  return <Link to="/" />;
}
