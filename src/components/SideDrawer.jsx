import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { Fragment, useState } from "react";
import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Muiswitch from "./Muiswitch";

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Stack spacing={3}>
      <Stack spacing={2} px={"20px"}>
        <Typography aria-haspopup="true" style={{ zIndex: 1301 }}>
          Features
        </Typography>
        <Menu id="basic-menu" aria-labelledby="basic-menu">
          <MenuItem>MetaMask Portfolio</MenuItem>
          <MenuItem>Swaps</MenuItem>
          <MenuItem>Buy Crypto </MenuItem>
          <MenuItem>EIP-1559</MenuItem>
        </Menu>
        <Typography style={{ zIndex: 1301 }}>Build</Typography>
        <Menu id="menu2" aria-labelledby="menu2">
          <MenuItem>Developer Docs</MenuItem>
          <MenuItem>Instituions</MenuItem>
          <MenuItem>Snaps </MenuItem>
          <MenuItem>Flask</MenuItem>
          <MenuItem>SDK</MenuItem>
        </Menu>
        <Typography>Resources</Typography>
        <Typography>Learn</Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{
          borderRadius: "999px",
          textTransform: "none",
          fontSize: "16px",
          padding: "8px 28px !important",
          fontWeight: "normal",
          height: "40px",
        }}
      >
        Download
      </Button>
      <Muiswitch />
    </Stack>
  );

  return (
    <Fragment>
      <IconButton onClick={toggleDrawer("top", !open)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        sx={{
          "& .MuiDrawer-root": {
            height: "fit-content",
          },
          "& .MuiBackdrop-root": {
            display: "none",
          },
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "728px",
            mx: "auto",
            top: "125.488px",
            p: 3,
            boxShadow: "none",
            height: "fit-content",
          },
        }}
        anchor={"top"}
        open={open}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {list()}
      </SwipeableDrawer>
    </Fragment>
  );
}
