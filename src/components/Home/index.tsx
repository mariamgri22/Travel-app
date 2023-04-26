import React from "react";
import LogoutButton from "../LogoutButton";
import { useAuthStore } from "../../store/useAuthStore";
import {  Link } from "react-router-dom";

export const Home = () => {
  const { token } = useAuthStore();
  return (
    <div>
      Home  
      <Link to="/login">
        <button>login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
      {token ? (
        <>
          <LogoutButton />
        </>
      ) : null}
    </div>
  );
};
