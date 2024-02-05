import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Discoveries from "./pages/Discoveries";
import Community from "./pages/Community";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/discoveries" element={<Discoveries />} />
      <Route path="/statistics" element={<Statistics />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
