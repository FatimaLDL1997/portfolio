import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  console.log("isUser: " + isUser);
  if (!isUser) {
    return <Navigate to='/Purchase' />;
  }
  return children;
};

export default PrivateRoute;
