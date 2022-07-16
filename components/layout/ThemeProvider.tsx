import {
  createTheme,
  ThemeProvider as Provider,
} from "@mui/material";

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
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "bold",
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 16,
    },
    caption: {
      fontSize: 14,
      fontFamily: "inherit",
      letterSpacing: "inherit",
      lineHeight: "inherit",
    },
    button: {
      textTransform: "none",
    },
  },
});

const ThemeProvider = ({
  children,
}: React.PropsWithChildren) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
