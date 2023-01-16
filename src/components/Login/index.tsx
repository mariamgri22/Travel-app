import axios from "axios";
import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setToken } = useAuthStore();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/users", {
        email,
        password,
      });
      setToken(data.token);
    } catch (err: any) {
      console.log("🚀 ~ file: index.tsx:20 ~ handleLogin ~ err", err);
      setError(err.response.data.message);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
