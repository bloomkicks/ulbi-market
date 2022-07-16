import { NextPage } from "next";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

import products from "../../data/products";

import Image from "../../components/product-page/Image";
import Title from "../../components/product-page/Title";
import Price from "../../components/product-page/Price";
import Chars from "../../components/product-page/props/Props";

const Product: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find(
    (product) => product.id === productId
  );

  if (!product) router.replace("/product");

  return (
    <Grid container spacing={2} justifyContent="center">
      <Image />
      <Title
        title={product!.visible.title}
        rating={product!.visible.rating!}
      />
      <Price price={product!.visible.price} id={product!.id} />
      <Chars props={product!.props} />
    </Grid>
  );
};

export default Product;
