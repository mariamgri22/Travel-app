import React, { useEffect } from "react";
import LogoutButton from "../LogoutButton";

import {  Link } from "react-router-dom";

export const AdminDashboard = () => {


  return (
    <div>
      <Link to="/admin/posts">
        <button>Go to Admin Posts</button>
      </Link>
      <Link to="/admin/create-post">
        <button>Create New Post</button>
      </Link>
      <LogoutButton />
    </div>
  );
};
