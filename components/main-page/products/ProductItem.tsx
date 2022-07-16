import { useRouter } from "next/router";
import { Grid, Typography, Box } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  ProductVisible,
  ProductId,
} from "../../../models/Product";
import classes from "./ProductItem.module.scss";

const ProductsItem = ({
  visible,
  id,
}: {
  visible: ProductVisible;
  id: ProductId;
}) => {
  const router = useRouter();
  const formattedDescription = visible.description.slice();

  function clickHandler() {
    router.push("/product/" + id);
  }

  return (
    <Grid
      item
      component="section"
      className={classes.item}
      maxWidth={{ xs: "400px" }}
      onClick={clickHandler}
      xs={11}
      sm={6}
      md={4}
      lg={3}
    >
      <Box bgcolor="primary.main" className={classes.image}>
        <Typography variant="h5">Image</Typography>
      </Box>
      <Box className={classes.main}>
        <Typography variant="body2">
          {formattedDescription}
        </Typography>
        <Typography variant="subtitle1" lineHeight="1.5em">
          {visible.title}
        </Typography>
      </Box>
      <Box className={classes.rating}>
        <Typography
          component="strong"
          variant="subtitle1"
          fontWeight="bold"
          sx={{
            verticalAlign: "middle",
          }}
        >
          {visible.rating !== "No" ? visible.rating : "0"}
        </Typography>
        <StarBorder fontSize="small" />
      </Box>
    </Grid>
  );
};

export default ProductsItem;
