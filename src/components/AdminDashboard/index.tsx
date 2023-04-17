// import React from "react";
// import LogoutButton from "../LogoutButton";
// import { useAuthStore } from "../../store/useAuthStore";
// import { useEffect } from "react";

// import { useState } from "react";
// import api from "../../token";
// import { getUsers } from "../../helper/login";

// interface User {
//   id: number;
//   email: string;
//   role: "user" | "admin";
// }

// export const AdminDashboard = () => {
//   // const role = useAuthStore((state) => state.role);
//   // console.log("🚀 ~ file: index.tsx:7 ~ AdminDashboard ~ role:", role)
// /
//   console.log("🚀 ~ file: index.tsx:23 ~ AdminDashboard ~ user:", user);

//   useEffect(() => {
//     if (user?.role !== "admin") {
//       getUsers();
//     }
//   }, []);

//   return (
//     <div>
//       AdminDashboard
//       <div>
//         <h2>Users List</h2>
//         {/* <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <p>ID: {user.id}</p>
//               <p>Email: {user.email}</p>
//               <p>Role: {user.role}</p>
//             </li>
//           ))}
//         </ul> */}
//       </div>
//       <LogoutButton />
//     </div>
//   );
// };

// import React from 'react'
// import { withAuth } from '../../hocs/withAuth'


// type Role = 'admin' | "user";


// type Props = {
//   allowedRoles: Role[];
// };

// export const AdminDashboard = withAuth(({ allowedRoles }: Props) => (
//   <div>
//     <h1>Admin Posts Page</h1>
//     <p>Only admins have access to this page</p>
//   </div>
// ));


import React from 'react'
import LogoutButton from '../LogoutButton'

export const AdminDashboard = () => {
  return (
    <div>AdminDashboard
      <LogoutButton/>
    </div>
  )
}
