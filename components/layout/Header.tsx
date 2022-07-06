import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <h2>КупиДевайс</h2>
        <nav className={classes.nav}>
          <a href="#">
            <div>Админ</div>
          </a>
          <a href="#">
            <div>Корзина</div>
          </a>
          <a href="#">
            <div>Выйти</div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
