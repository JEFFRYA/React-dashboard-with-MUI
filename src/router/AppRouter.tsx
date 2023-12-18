import { Route, Routes } from 'react-router-dom';
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from './PrivateRoute';
import { ContainersRoute } from "../containers/routes/containersRoute";
import { PublicRoute } from './PublicRoute';

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/*" element={
                    <PrivateRoute>
                        <ContainersRoute />
                    </PrivateRoute>
                } />
                <Route path="Login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
            </Routes>
        </>
    )
}

export default AppRouter;