import Nav from "../components/main_page/Nav";
import Products from "../components/main_page/products/Products";
import Footer from "../components/main_page/footer/Footer";
import { NextPage } from "next";
import classes from './index.module.scss'

const Home: NextPage = () => {
  return (
    <main className={classes.page}>
      <Nav />
      <Products />
      <Footer />
    </main>
  )
};

export default Home;
