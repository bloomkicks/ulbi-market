import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./Header.module.scss";

const links = [
  {
    name: "Админ",
    url: "#",
  },
  {
    name: "Корзина",
    url: "#",
  },
  {
    name: "Выйти",
    url: "#",
  },
];

const Header = () => {
  return (
    <AppBar color="secondary" sx={{ height: "50px" }}>
      <Toolbar
        sx={{
          height: "100%",
          minHeight: "0 !important",
          width: "100%",
          maxWidth: "1366px",
          mx: "auto",
        }}
      >
        <Box mr="auto">
          <Typography variant="h6" component="h6">
            КупиДевайс
          </Typography>
        </Box>
        <Box component="nav" ml="auto">
          {links.map((link, i) => {
            return (
              <Button
                component="a"
                key={"asdfkasjd" + link.name + i}
                href={link.url}
                sx={{
                  display: {
                    xs: "none",
                    md: "inline-flex",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                  px: "25px",
                  py: "10px",
                  mx: "3px",
                }}
              >
                {link.name}
              </Button>
            );
          })}
          <IconButton
            sx={{
              display: { xs: "inline-flex", md: "none" },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
