import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import classes from "./HeaderNav.module.scss";

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
}: {
  display?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
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
          <Button
            component="a"
            key={"asdfkasjd" + link.name + i}
            href={link.url}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              px: "20px",
              py: "10px",
            }}
          >
            {link.name}
          </Button>
        );
      })}
    </Box>
  );
};

export default HeaderNav;
