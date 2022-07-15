import { Grid } from "@mui/material";
import Product from "../../../models/Product";
import classes from "./Products.module.scss";
import ProductsItem from "./ProductsItem";

// const products: Product[] = [
//   new Product(
//     "Galaxy H31",
//     "A cool budget phone that fits everyone",
//     ["Phone"]
//   ),
//   new Product(
//     "Galaxy G-Pro 11",
//     "Well designed gaming mobile for gamers",
//     ["Phone"]
//   ),
//   new Product(
//     "Hopo 20 S",
//     "The best out of all, Gold design, no boundaries",
//     ["Phone"]
//   ),
// ];

const Products = ({
  products
}: {
  products: Product[];
}) => {
  return (
    <Grid
      container
      component="article"
      spacing={3}
      columnSpacing={{ xs: 0, sm: 3 }}
      paddingRight={{ xs: 0, sm: "20px" }}
      justifyContent={{ xs: "center", sm: "flex-start" }}
      sx={{
        mt: { xs: "5px", sm: "-10px" },
        marginLeft: { xs: 0, sm: "25%" },
        width: { sm: "75%" },
      }}
      className={classes.products}
    >
      {products.map(({ visible, id }) => {
        return (
          <ProductsItem visible={visible} id={id} key={id} />
        );
      })}
    </Grid>
  );
};

export default Products;
