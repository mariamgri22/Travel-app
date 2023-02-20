// import axios from "axios";
// import { useState } from "react";
// import { useAuthStore } from "../../store/useAuthStore";
// import api from "../../token";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { setToken } = useAuthStore();

//   async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     try {
//       const { data } = await api.post("/users", {
//         email,
//         password,
//       });
//       console.log("🚀 ~ file: index.tsx:19 ~ handleLogin ~ api", api);
//       setToken(data.token);
//     } catch (err: any) {
//       console.log("🚀 ~ file: index.tsx:20 ~ handleLogin ~ err", err);
//       setError(err.response.data.message);
//     }
//   }

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

import { useState } from "react";


import { useNavigate } from "react-router-dom";
import { login } from "../../helper/login";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(formData);
      navigate("/");
      // handle successful login, e.g. redirect to another page
    } catch (error) {
      console.error(error);
      // handle login error, e.g. display error message to user
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
