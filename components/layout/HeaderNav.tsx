import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./HeaderNav.module.scss";
import { MouseEventHandler } from "react";

const links = [
  {
    name: "Админ",
    url: "#",
  },
  {
    name: "Корзина",
    url: "/basket",
  },
  {
    name: "Войти",
    url: "/login",
  },
];

const HeaderNav = ({
  display,
  clickHandler,
}: {
  display?: {
    xs: string;
    md: string;
  };
  clickHandler?: MouseEventHandler;
}) => {
  return (
    <Box
      component="nav"
      className={classes.nav}
      display={display || { xs: "none", md: "inline-flex" }}
      flexDirection={{ xs: "column", md: "row" }}
      gap="5px"
    >
      {links.map((link, i) => {
        return (
          <Link href={link.url} passHref>
            <Button
              onClick={clickHandler || function () {}}
              variant="text"
              component="a"
              key={
                "asd" + Math.random().toFixed(4) + link.name + i
              }
              size="large"
              sx={{
                borderRadius: { xs: 0, md: "5px" },
                justifyContent: "center",
                alignItems: "center",
                color: {
                  md: "primary.contrastText",
                },
                bgcolor: "transparent",
                ":hover": {
                  bgcolor: {
                    xs: "background.default",
                    md: "primary.light",
                  },
                },
              }}
            >
              <Typography component="h6" variant="body1">
                {link.name}
              </Typography>
            </Button>
          </Link>
        );
      })}
    </Box>
  );
};

export default HeaderNav;
