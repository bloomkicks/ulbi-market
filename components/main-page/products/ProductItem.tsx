import { useRouter } from "next/router";
import { Grid, Typography, Box, Card } from "@mui/material";
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
      <Card>
        <Box bgcolor="primary.main" className={classes.image}>
          <Typography variant="h1" component="p">
            Image
          </Typography>
        </Box>
        <Box padding="0 4px 5px 4px" className={classes.main}>
          <Typography variant="caption">
            {formattedDescription}
          </Typography>
          <Typography variant="h3" lineHeight="1.5em">
            {visible.title}
          </Typography>
        </Box>
        <Box className={classes.rating}>
          <Typography
            component="strong"
            sx={{
              verticalAlign: "middle",
            }}
          >
            {visible.rating !== "No" ? visible.rating : "0"}
          </Typography>
          <StarBorder fontSize="small" />
        </Box>
      </Card>
    </Grid>
  );
};

export default ProductsItem;
