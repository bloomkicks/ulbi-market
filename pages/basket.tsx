import { RootState } from "../store";
import { NextPage } from "next";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Products from "../components/main-page/products/Products";
import allProducts from "../data/products";

const Basket: NextPage = () => {
  const basket = useSelector((state: RootState) => state.basket);

  const products = allProducts.filter((product) =>
    basket.includes(product.id)
  );

  console.log(basket);

  return (
    <main>
      <Typography
        variant="h4"
        component="h1"
        sx={{ paddingLeft: "20px" }}
      >
        Корзина товаров:
      </Typography>
      <Products
        products={products} styles={{marginLeft: {sm: '10px'}}}/>
    </main>
  );
};

export default Basket;
