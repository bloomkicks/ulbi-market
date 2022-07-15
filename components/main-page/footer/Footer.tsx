import { Pagination } from "@mui/material";
import classes from "./Footer.module.scss";

const amountOfPages = 10;

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Pagination
        count={amountOfPages}
        sx={{
          "& .MuiPagination-ul": { 
            justifyContent: "center" 
          },
        }}
      />
    </footer>
  );
};

export default Footer;
