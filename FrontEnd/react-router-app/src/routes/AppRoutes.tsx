import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
            }
        />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}