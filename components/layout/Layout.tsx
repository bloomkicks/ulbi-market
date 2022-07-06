import { PropsWithChildren } from "react";
import Header from "./Header";
import classes from "./Layout.module.scss";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={classes.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
