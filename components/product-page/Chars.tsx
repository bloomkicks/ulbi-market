import { PhoneProps } from "../../models/Phone";
import { Grid, Box, Typography } from "@mui/material";

function createProp(
  key: string,
  val: string | object,
  i: number
) {
  const formattedKey = key[0].toUpperCase() + key.slice(1)
  const isObj = typeof val === "object";

  let Multiple = () => <div></div>;
  if (isObj) {
    Multiple = () => {
      return (
        <Box paddingLeft="15px">
          {Object.entries(val).map((value) => {
            return createProp(value[0], value[1], i);
          })}
        </Box>
      );
    };
  }

  return (
    <>
      <Typography
        variant="body2"
        sx={{
          padding: "5px 10px",
          backgroundColor: i % 2 == 0 ? "#fff" : "#c4c4c4",
        }}
      >
        {formattedKey}: {!isObj ? val : ""}
      </Typography>
      {isObj && <Multiple />}
    </>
  );
}

const Chars = ({ props }: { props: PhoneProps }) => {
  return (
    <Grid
      item
      xs={12}
      maxWidth={{ xs: "95%", md: "1000px" }}
      marginTop="5px"
    >
      <Typography variant="h5" sx={{ paddingLeft: "5px" }}>
        Характеристики:
      </Typography>
      <Box
        component="ul"
        sx={{ listStyleType: "none" }}
        marginTop="4px"
      >
        {Object.entries(props).map((value, i) => {
          return (
            createProp(value[0], value[1], i)
          )
        })}
      </Box>
    </Grid>
  );
};

export default Chars;
