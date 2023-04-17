import "./App.css";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import Register from "./components/Register";
import { AdminDashboard } from "./components/AdminDashboard";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
               <AdminDashboard/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
