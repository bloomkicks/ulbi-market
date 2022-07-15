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
    url: "#",
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
      gap="3px"
    >
      {links.map((link, i) => {
        return (
          <Link href={link.url} passHref>
            <Button
              onClick={clickHandler || function (){}}
              component="a"
              key={"asdfkasjd" + link.name + i}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                px: "20px",
                py: "10px",
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
