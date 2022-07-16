import { createTheme, ThemeProvider, Box } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "./Header";
import classes from "./Layout.module.scss";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 950,
      lg: 1250,
      xl: 1550,
    },
  },
  palette: {
    primary: {
      main: "#c4c4c4",
      dark: "#b0b0b0",
      light: "#d0d0d0",
      contrastText: "#000",
    },
    divider: "#000",
    background: {
      default: "#f3f3f3",
    },
  },
});

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        minHeight="100vh"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.background.default,
        }}
        className={classes.layout}
      >
        <Header />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
