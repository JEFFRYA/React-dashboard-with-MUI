import { Avatar, Box, Typography, useTheme } from "@mui/material"
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import AssignmentIcon from '@mui/icons-material/Assignment';

function SideNav () {

    const { collapsed } = useProSidebar();
    const theme = useTheme();
    const location = useLocation();

    return(
        <Sidebar style={{
                height: "100%",
                top: "auto"
            }}
            breakPoint="md">
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} variant="rounded">
                    <AssignmentIcon />
                </Avatar>
                {/* <Avatar sx={styles.avatar}
                    alt="avatar" 
                    src="src/assets/logo-react.png"
                /> */}
                {!collapsed ? <Typography variant="body2" sx={styles.nameComplete}>Nombre Completo</Typography> : null }
                {!collapsed ? <Typography variant="overline">Rol en la aplicaciòn</Typography> : null }
            </Box>
            <Menu 
                menuItemStyles={{
                    button: ({active}) => {
                        return {
                            background: active? theme.palette.primary.light : undefined
                        }
                    }
                }}>
                <MenuItem active={location.pathname === "/"} component={<Link to="/" />} icon={ <DashboardOutlined />}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>
                <SubMenu label="Modulo 1" icon={ <DashboardOutlined />}>
                    <MenuItem active={location.pathname === "/ModuleOne"} component={<Link to="/ModuleOne" />} icon={ <DashboardOutlined />}>
                        Sub menu 1
                    </MenuItem>
                </SubMenu>
                <SubMenu label="Modulo 2" icon={ <DashboardOutlined />}>
                    <MenuItem active={location.pathname === "/ModuleTwo"} component={<Link to="/ModuleTwo" />} icon={ <DashboardOutlined />}>
                        Sub menu 2
                    </MenuItem>
                </SubMenu>
                <SubMenu label="Modulo 2" icon={ <DashboardOutlined />}>
                    <MenuItem active={location.pathname === "/ModuleTree"} component={<Link to="/ModuleTree" />} icon={ <DashboardOutlined />}>
                        Sub menu 3
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    avatarContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 5
    },
    avatar: {
        bgcolor: "secondary.main"
    },
    nameComplete: {
        mt: 1
    }
}

export default SideNav;