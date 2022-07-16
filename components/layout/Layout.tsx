import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

import ThemeProvider from "./ThemeProvider";
import Header from "./Header";
import classes from "./Layout.module.scss";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider>
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
