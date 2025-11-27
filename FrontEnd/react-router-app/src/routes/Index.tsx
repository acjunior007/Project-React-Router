
import { Route, Routes } from "react-router-dom";
import { Suspense } from 'react';
import { PublicRoutes } from "./Public.routes";
import { PrivateRoutes } from "./Private.routes";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {PublicRoutes.map(route => (
                    <Route key={route.path} {...route} />
                ))}

                {PrivateRoutes.map(route => (
                    <Route key={route.path} {...route} >
                        {route.children && route.children.map(child => (
                            <Route 
                                key={child.path}{...child}
                            />
                        ))}
                    </Route>

                ))}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}