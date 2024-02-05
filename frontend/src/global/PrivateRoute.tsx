import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = React.useRef<number | null>(null);
  const { token, removeToken } = useAuth();

  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  const events = ["load", "mousemove", "mousedown", "click", "scroll", "keypress"];

  events.forEach((event) => {
    window.addEventListener(event, () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (token) {
        timeoutRef.current = setTimeout(() => {
          removeToken();
          navigate("/login");
        }, 900000); // 15m
      }
    });
  });

  if (
    !token &&
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/"
  ) {
    navigate("/login");
  }

  return <>{children}</>;
};

export default PrivateRoute;
