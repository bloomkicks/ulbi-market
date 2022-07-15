import { Typography, Box, Grid } from "@mui/material";
import { StarRate } from "@mui/icons-material";
import { Rating } from "../../models/Product";

const Title = ({
  title,
  rating = 0,
}: {
  title: string;
  rating: Rating;
}) => {
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      maxWidth={{xs: "250px"}}
      xs={10}
      md={4}
    >
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        position="relative"
        alignItems="center"
        width="100%"
      >
        <StarRate
          display="block"
          sx={{ height: "100px", width: "auto" }}
        />
        <Typography
          variant="h5"
          color="white"
          sx={{
            position: "absolute",
            top: "54%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {rating}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Title;
