import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
  const isLogged = localStorage.getItem("isLogin");
  return isLogged ? <Component /> : <Navigate to="/admin/login" />;
}