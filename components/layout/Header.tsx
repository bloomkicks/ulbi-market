import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  Typography,
  IconButton,
} from "@mui/material";
import HeaderNav from "./HeaderNav";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import classes from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AppBar color="secondary" sx={{ height: "50px" }}>
      <Toolbar
        sx={{
          height: "100%",
          minHeight: "0 !important",
          width: "100%",
          maxWidth: "1366px",
          mx: "auto",
        }}
      >
        <Box mr="auto">
          <Typography variant="h6" component="h6">
            КупиДевайс
          </Typography>
        </Box>
        <Box ml="auto">
          <Drawer
            onClose={() => setIsOpen(false)}
            open={isOpen}
            anchor="right"
            sx={{
              "& .MuiPaper-elevation": {
                paddingTop: "10px",
              },
            }}
          >
            <HeaderNav
              display={{ xs: "inline-flex", md: "none" }}
            />
          </Drawer>
          <HeaderNav />
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
