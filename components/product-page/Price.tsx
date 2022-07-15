import { Typography, Grid, Button } from "@mui/material";

const Price = ({ price }: { price: number }) => {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={{xs: "250px"}}
      xs={10}
      md={4}
      sx={{ backgroundColor: "white" }}
    >
      <Typography
        variant="subtitle1"
        component="strong"
        sx={{ paddingBottom: "2px" }}
      >
        от {price} ₽
      </Typography>
      <Button variant="outlined">
        {" "}
        <Typography variant="subtitle2">
          Добавить в корзину
        </Typography>
      </Button>
    </Grid>
  );
};

export default Price;
