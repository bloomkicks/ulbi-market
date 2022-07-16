import Link from "next/link";
import { List, ListItemButton, Paper } from "@mui/material";
import classes from "./NavBar.module.scss";

const links = [
  {
    url: "#",
    name: "Телефоны",
  },
  {
    url: "#",
    name: "Ноутбуки",
  },
  {
    url: "#",
    name: "Холодильники",
  },
];

const Nav = () => {
  return (
    <List
      component="aside"
      sx={{
        position: { xs: "static", sm: "absolute" },
        width: { xs: "80vw", sm: "22.5vw" },
        left: { xs: 0, sm: "20px" },
        top: { xs: 0, sm: "20vh" },
        mt: { xs: "5px", sm: 0 },
        mx: "auto",
      }}
      className={classes.nav}
    >
      {links.map((link) => {
        return (
          <Link href={link.url} passHref>
            <ListItemButton divider
              sx={{
                py: '10px',
                bgcolor: "primary.main",
                color: "primary.contrastText",
                ':hover': {
                  bgcolor: 'primary.light'
                }
              }}
            >
              {link.name}
            </ListItemButton>
          </Link>
        );
      })}
    </List>
  );
};

export default Nav;
