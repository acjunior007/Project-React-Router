import type React from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({children}: {children: React.ReactElement}) {
  const {user} = useAuth();

  return user ? children : <Navigate to="/login"/>;
  
}