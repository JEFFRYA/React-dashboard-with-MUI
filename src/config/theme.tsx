import { createTheme } from "@mui/material";
import { teal, green } from "@mui/material/colors";

let theme = createTheme({
    palette: {
        primary: {
            main: teal[500],
            light: teal[50],
            dark: teal[900],
            contrastText: "#fff"
        },
        secondary: {
            main: green[50],
            light: green[50],
            contrastText: "#fff"
        }
    }
})

theme = createTheme(theme, {
    typography: {
        link: {
            fontSize: "0.8rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "0.9rem"
            },
            fontWeight: 500,
            color: theme.palette.primary.main,
            display: "block",
            cursor: "pointer"
        },
        cardTittle: {
            fontSize: "1.2rem",
            display: "block",
            fontWeight: 500
        },
        h6: {
            fontSize: "1rem",
        },
        h7: {
            fontSize: "0.8rem",
        },
        h8: {
            fontSize: "0.7rem",
        },
    }
});

export default theme;