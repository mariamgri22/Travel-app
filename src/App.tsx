import "./App.css";
import Login from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <ProtectedRoute>
            <Route path="/" element={<Home />} />
          </ProtectedRoute> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
