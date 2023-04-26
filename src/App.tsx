import "./App.css";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import Register from "./components/Register";
import { AdminDashboard } from "./components/AdminDashboard";
import { UserDashboard } from "./components/UserDashboard";
import PostList from "./components/Posts/PostList";
import CreatePostForm from "./components/Posts/CreatePostForm";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            element={
              <ProtectedRoute requiredRole="user">
                <UserDashboard />
              </ProtectedRoute>
            }
            path="/user"
          />
          <Route
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
            path="/admin"
          >
            <Route path="/admin/posts" element={<PostList />} />
            <Route path="/admin/create-post" element={<CreatePostForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
