import { useRouter } from "next/router";
import { Grid, Typography as Typo, Box } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  ProductVisible,
  ProductId,
} from "../../../models/Product";
import classes from "./ProductsItem.module.scss";

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
      <Box className={classes.image}>
        <Typo variant="h5">Image</Typo>
      </Box>
      <Box className={classes.main}>
        <Typo variant="body2">{formattedDescription}</Typo>
        <Typo variant="subtitle1" lineHeight="1.5em">
          {visible.title}
        </Typo>
      </Box>
      <Box className={classes.rating}>
        <Typo
          component="strong"
          variant="subtitle1"
          fontWeight="bold"
          sx={{
            verticalAlign: "middle",
          }}
        >
          {visible.rating !== 'No' ? visible.rating : "0"}
        </Typo>
        <StarBorder fontSize="small" />
      </Box>
    </Grid>
  );
};

export default ProductsItem;
