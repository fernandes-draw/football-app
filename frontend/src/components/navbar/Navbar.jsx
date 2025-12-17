import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/Logo CBI App.png";
import Menu from "./Menu";
import ShortMenu from "./ShortMenu";
import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const drawerWidth = 240;
const shortDrawerWidth = 80;

export default function Navbar({ content }) {
  const [isBigMenu, setIsBigMenu] = useState(false);

  const changeMenu = () => {
    setIsBigMenu(!isBigMenu);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            onClick={changeMenu}
            sx={{ marginRight: "30px", color: "white" }}
          >
            {isBigMenu ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <img src={logo} alt="Logo" width="10%" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu ? drawerWidth : shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isBigMenu ? drawerWidth : shortDrawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {isBigMenu ? <Menu /> : <ShortMenu />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}
