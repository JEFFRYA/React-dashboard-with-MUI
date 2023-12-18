import { AppBar, Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip } from "@mui/material"
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Header() {

    const { SignIn, FNLogout } = useContext(AuthContext);
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
    const navigate = useNavigate();
    const handlerLogout = () => {
        FNLogout();
        navigate('/Login', { replace: true });
    }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                    <MenuTwoToneIcon />
                </IconButton>
                <Box
                    component="img" />
                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'right', textAlign: 'right' }}>
                    <Tooltip title="Perfil">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}>
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <MenuItem>
                    <h5 style={{
                        textAlign: "right"
                    }}>{ SignIn.Alias }</h5>
                        
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Configuraciones
                    </MenuItem>
                    <MenuItem onClick={handlerLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Cerrar sesiòn
                    </MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: "primary.dark"
    }
}

export default Header;