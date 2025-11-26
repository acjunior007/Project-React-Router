import { useAuth } from "../context/AuthProvider";

export default function Dashboard() {
    const { user } = useAuth() ;

  return (
    <div>
      <h1>Dashboard (Protected)</h1>
      <p>Welcome, {user?.email} to your dashboard!</p>
    </div>
  );
}