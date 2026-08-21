import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  // ... your route logic
  return <Outlet />;
};

export default PrivateRoute;
