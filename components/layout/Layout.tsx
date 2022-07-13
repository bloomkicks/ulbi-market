import { createTheme, ThemeProvider } from "@mui/material";
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
      xl: 1550
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#c4c4c4",
    },
  },
});

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
