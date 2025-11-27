import { useAuth } from "../../context/AuthContext";

export default function DashboardHome() {
  const { user } = useAuth() ;
  return (
    <div>
      <h1>Dashboard layout (Protected)</h1>
      <p>Welcome, {user?.email} to your dashboard!</p>
    </div>
  );
}