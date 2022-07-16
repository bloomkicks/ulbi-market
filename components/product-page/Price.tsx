import { ProductId } from "../../models/Product";
import { Typography, Grid, Button, Box } from "@mui/material";

import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket";

const Price = ({
  price,
  id,
}: {
  price: number;
  id: ProductId;
}) => {
  const dispatch = useDispatch();

  function addToBasket(): void {
    dispatch(basketActions.add(id));
  }

  return (
    <Grid
      item
      container
      alignItems="center"
      maxWidth={{ xs: "250px" }}
      xs={10}
      md={4}
    >
      <Box
        height="100%"
        width="100%"
        maxHeight="150px"
        padding="10px 20px"
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          component="strong"
          sx={{ paddingBottom: "2px" }}
        >
          от {price} ₽
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "primary.contrastText",
          }}
          onClick={addToBasket}
        >
          {" "}
          <Typography
            variant="subtitle2"
            color="primary.contrastText"
          >
            Добавить в корзину
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
};

export default Price;
