import PropItem from "./PropItem";
import { ProductProps } from "../../../models/Product";
import {
  Grid,
  Typography,
  List,
} from "@mui/material";

const Chars = ({ props }: { props: ProductProps }) => {
  return (
    <Grid
      item
      xs={12}
      maxWidth={{ xs: "95%", md: "1000px" }}
      marginTop="5px"
    >
      <List
        subheader={
          <Typography
            variant="h5"
            sx={{ paddingLeft: "5px", marginBottom: "5px" }}
          >
            Характеристики:
          </Typography>
        }
      >
        {Object.entries(props).map((entry) => {
          return <PropItem prop={entry[0]} value={entry[1]} />;
        })}
      </List>
    </Grid>
  );
};

export default Chars;
