import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
    name: "Выйти",
    url: "#",
  },
];

const HeaderNav = ({
  display,
  clickHandler,
}: {
  display?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
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
              variant="contained"
              component="a"
              key={
                "asd" + Math.random().toFixed(4) + link.name + i
              }
              size="large"
              sx={{
                borderRadius: {xs: 0, md: '5px'},
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
              {link.name}
            </Button>
          </Link>
        );
      })}
    </Box>
  );
};

export default HeaderNav;
