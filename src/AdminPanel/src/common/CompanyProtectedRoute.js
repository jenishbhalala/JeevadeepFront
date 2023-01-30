import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  const userToken = localStorage.getItem("userToken");
  const cpToken = localStorage.getItem("cpToken");
  try {
    if (userToken && cpToken) {
      return false;
    } else {
      if (userToken || cpToken) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    return false;
  }
};

const CompanyProtectedRoute = () => {
  const location = useLocation();
  const isAuth = isAuthenticated();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default CompanyProtectedRoute;
