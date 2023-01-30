import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = isAuthenticated();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
