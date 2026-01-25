import React from "react";
import { useUserStore } from "@/store/userStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useUserStore((state) => state.user_logged_in);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
