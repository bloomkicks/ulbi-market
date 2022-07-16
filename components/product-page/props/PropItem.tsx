import { Box, ListItem } from "@mui/material";

const PropItem = ({
  prop,
  value,
}: {
  prop: string;
  value: string | object;
}) => {
  const formattedKey = prop[0].toUpperCase() + prop.slice(1);
  const isObj = typeof value === "object";

  let Multiple = () => <div></div>;
  if (isObj) {
    Multiple = () => {
      return (
        <Box paddingLeft="15px" paddingBottom="7.5px">
          {Object.entries(value).map((entry) => {
            return <PropItem prop={entry[0]} value={entry[1]} />;
          })}
        </Box>
      );
    };
  }

  return (
    <>
      <ListItem
        divider
        sx={{
          bgcolor: "background.paper",
        }}
      >
        {formattedKey}: {!isObj ? value : ""}
      </ListItem>
      {isObj && <Multiple />}
    </>
  );
};

export default PropItem;
