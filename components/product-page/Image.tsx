import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Image = () => {
  return (
    <Grid
      item
      container
      justifyContent="center"
      xs={10}
      md={4}
      maxWidth={{ xs: "275px" }}
    >
      <Box
        sx={{
          backgroundColor: "#c4c4c4",
          width: "225px",
          height: "225px",
        }}
      ></Box>
    </Grid>
  );
};

export default Image;
