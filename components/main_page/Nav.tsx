import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <a href="#">Телефоны</a>
      <a href="#">Ноутбуки</a>
      <a href="#">Холодильники</a>
    </nav>
  );
};

export default Nav;
