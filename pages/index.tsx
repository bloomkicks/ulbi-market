import NavBar from "../components/main-page/NavBar";
import Products from "../components/main-page/products/Products";
import Footer from "../components/main-page/footer/Footer";
import { NextPage } from "next";

import products from "../data/products";

const Home: NextPage = () => {
  return (
    <main>
      <NavBar />
      <Products products={products} />
      <Footer />
    </main>
  )
};

export default Home;
