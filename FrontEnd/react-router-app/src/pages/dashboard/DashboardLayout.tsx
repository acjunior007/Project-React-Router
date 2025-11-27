import { Link, Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard layout (Protected)</h1>
      <nav>
        <Link to="/dashboard">Dashboard Home</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/admin">Admin</Link>
      </nav>
      <Outlet />
    </div>
  );
}