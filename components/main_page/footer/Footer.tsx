import classes from "./Footer.module.scss";

const amountOfPages = 10;

const Footer = () => {
  const pages: number[] = Array(amountOfPages)
    .fill(null)
    .map((v, i) => i + 1);

  const isMorePages = pages.length > 8;
  if (isMorePages) {
    pages.splice(7, pages.length - 8);
  }

  return (
    <nav className={classes.footer}>
      {pages.map((num, i, a) => {
        return (
          <>
            {isMorePages && i === a.length - 1 && (
              <p className={classes.dots}>....</p>
            )}
            <a href="#">
              <p>{num}</p>
            </a>
          </>
        );
      })}
    </nav>
  );
};

export default Footer;
