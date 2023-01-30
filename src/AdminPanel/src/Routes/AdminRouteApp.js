import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Error from "../pages/Error/Error";
import DefaultLayout from "../pages/layout/DefaultLayout";
const AdminRouteApp = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
        <Route  path="/login" element={<Login />}exact />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AdminRouteApp;
