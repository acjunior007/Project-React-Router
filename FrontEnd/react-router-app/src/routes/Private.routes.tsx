
import { lazy } from 'react';
import PrivateRouter from '../components/PrivateRoute';
import RoleGuard from '../components/RoleGuard';

const DashboardLayout = lazy(() => import('../pages/dashboard/DashboardLayout'));
const DashboardHome = lazy(() => import('../pages/dashboard/DashboardHome'));

const Profile = lazy(() => import('../pages/dashboard/Profile'));
const Admin = lazy(() => import('../pages/dashboard/Admin'));

export const PrivateRoutes = [
  {
    path: '/dashboard',
    element: (
        <PrivateRouter>
            <DashboardLayout />
        </PrivateRouter>
    ),
    children: [
        { index: true, Element: <DashboardHome /> },
        { path: 'profile', Element: <Profile /> },
        { path: 'admin', 
            Element:
            (
                <RoleGuard role="admin">
                    <Admin />
                </RoleGuard>
            )
        }
    ]
    }
];
