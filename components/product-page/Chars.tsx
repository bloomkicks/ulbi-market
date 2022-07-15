import { Grid, Box, Typography } from "@mui/material";

const chars = {
  RAM: 5,
  Camera: 12,
  Size: "20x32",
};

const Chars = () => {
  return (
    <Grid item xs={12} maxWidth={{xs: "95%", md: "1000px"}} marginTop="5px">
      <Typography variant="h5" sx={{ paddingLeft: "5px" }}>
        Характеристики:
      </Typography>
      <Box
        component="ul"
        sx={{ listStyleType: "none" }}
        marginTop="4px"
      >
        {Object.entries(chars).map((value, i) => {
          return (
            <Typography
              variant="body2"
              sx={{
                padding: "5px 10px",
                backgroundColor: i % 2 == 0 ? "#fff" : "#c4c4c4",
              }}
            >
              {value[0]}: {value[1]}
            </Typography>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Chars;
