import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";

import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import ModuleOne from "../module_one/module_one";
import ModuleTwo from "../module_two/module_two";
import ModuleTree from "../module_tree/module_tree";

import theme from "../../config/theme";
import SideNav from "../../components/SideNav";
import Header from "../../components/Header";

export const ContainersRoute = () => {

    return(
        <>
            <ThemeProvider theme={theme}>
            <ProSidebarProvider>
                
                <Header />
                <Box sx={styles.container}>
                    <SideNav />
                    <Box component={"main"} sx={styles.mainSection}>
                    
                        <CssBaseline />
                        <Routes>
                            <Route path="/" element={<Navigate to="/Dashboard" />} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="ModuleOne" element={<ModuleOne />} />
                            <Route path="ModuleTwo" element={<ModuleTwo />} />
                            <Route path="ModuleTree" element={<ModuleTree />} />
                        </Routes>

                    </Box>
                </Box>
            </ProSidebarProvider>
            </ThemeProvider>
        </>
    )

}

/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
      display: "flex",
      bgcolor: "",
      height: "calc(100% - 64px)"
    },
    mainSection: {
      p: 1,
      heigth: "100%",
      width: "100%",
      overflow: "auto"
    }
}