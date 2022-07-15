import Phone from "../../models/Phone";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

import Image from "../../components/product-page/Image";
import Title from "../../components/product-page/Title";
import Price from "../../components/product-page/Price";
import Chars from "../../components/product-page/Chars";

const example = new Phone(
  "Samsung 21A",
  "A cool budget phone for poor ass niggas",
  100000,
  ["phone", "budget phone", "choosen", "samsung"],
  { width: 16.2, height: 31 },
  "Bounderless",
  { front: 3.3, main: 5.1 }
);

const Product: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <Grid container spacing={2} justifyContent="center">
      <Image />
      <Title title={example.title} rating={example.rating!} />
      <Price price={example.price} />
      <Chars />
    </Grid>
  );
};

export default Product;
