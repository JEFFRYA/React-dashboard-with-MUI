import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from "../containers/dashboard/dashboard";
import ModuleOne from "../containers/module_one/module_one";
import ModuleTwo from "../containers/module_two/module_two";
import ModuleTree from "../containers/module_tree/module_tree";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Dashboard" />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="ModuleOne" element={<ModuleOne />} />
                <Route path="ModuleTwo" element={<ModuleTwo />} />
                <Route path="ModuleTree" element={<ModuleTree />} />
            </Routes>
        </>
    )
}

export default AppRouter;