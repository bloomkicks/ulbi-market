import Nav from "../components/main-page/Nav";
import Products from "../components/main-page/products/Products";
import Footer from "../components/main-page/footer/Footer";
import { NextPage } from "next";
import classes from './index.module.scss'

import products from "../data/products";

const Home: NextPage = () => {
  return (
    <main className={classes.page}>
      <Nav />
      <Products products={products} />
      <Footer />
    </main>
  )
};

export default Home;
