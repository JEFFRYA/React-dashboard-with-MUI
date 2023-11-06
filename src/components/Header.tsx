import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useProSidebar } from "react-pro-sidebar";

function Header (){

    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

    return(
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={ () => broken ? toggleSidebar() : collapseSidebar() } color="secondary">
                    <MenuTwoToneIcon />
                </IconButton>
                <Box
                    component="img" />
                <Box sx={{ flexGrow: 1}} />
                <IconButton title="cerrar sesion" color="secondary">
                    <AccountBoxIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: "primary.main"
    }
}

export default Header;