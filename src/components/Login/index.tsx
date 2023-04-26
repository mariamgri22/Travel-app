import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { login } from "../../helper/login";
import { getRoutes } from "../../store/useRoutesStore";
import { useAuthStore } from "../../store/useAuthStore";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  useEffect(()=>{
    getRoutes();
  },[])

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(formData);
      const { role } = useAuthStore.getState();
      if (role.includes("admin")) {

        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
