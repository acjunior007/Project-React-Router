import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Navbar() {
  const user = useAuth();

  return (
    <nav className="flex justify-between items-center bg-blue-500 m-4 p-2 rounded text-white">
      
      <Link to="/" >Home</Link>
      {!user.user?.email && <Link  to="/login" >Login</Link>}
      {user.user?.email && <Link  to="/dashboard" >Dashboard</Link>}
      {user.user?.email && <button onClick={user.logout} className="bg-red-500 p-1 rounded text-white">Logout</button>}
    </nav>
  );
}