
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function RoleGuard({role, children}: {role: string, children: React.ReactElement}) {
    const { user } = useAuth();

    if (user?.role !== role)
        return <Navigate to="/dashboard" />;

  return children;
}