import { Grid } from "@mui/material";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <Grid
      container
      component="aside"
      direction="column"
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
      <a href="#">Телефоны</a>
      <a href="#">Ноутбуки</a>
      <a href="#">Холодильники</a>
    </Grid>
  );
};

export default Nav;
