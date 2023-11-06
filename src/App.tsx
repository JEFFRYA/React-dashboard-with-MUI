import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from "./config/theme";
import SideNav from "./components/SideNav";
import Header from "./components/Header";


export const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <Header />
          <Box sx={styles.container}>
            <BrowserRouter>
              <SideNav />
              <Box component={"main"} sx={styles.mainSection}>
                <AppRouter />
              </Box>
            </BrowserRouter>
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