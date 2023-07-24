//import { Adb, KeyboardArrowDownIcon } from "@mui/icons-material";
import { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import "../App.css";
import meta from "../assets/meta.svg";
import {
  CssBaseline,
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import Muiswitch from "./Muiswitch";
import MobileNav from "./Mobilenavbar";

const menustyle = {
  marginRight: "20px",
  cursor: "pointer",
  color: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 10px",
  fontSize: "16px",
};

function Header() {
  const matches = useMediaQuery("(max-width: 991px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const openMenu = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
    setOpen(open);
  };

  // const changeColor = (e) => {
  //   document.body.classList.toggle("dark");
  // };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "white", zIndex: 3000 }}
      className="headerdark"
    >
      <Container>
        <Toolbar sx={{ position: "relative", zIndex: 4000 }}>
          <CssBaseline />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
              padding: "10px 20px",
            }}
            component="div"
          >
            <Box className="svgdark">
              <img
                src={meta}
                alt="metmask"
                className="toplogo"
                height="40px"
                width="210px"
              />
            </Box>

            {matches ? (
              <MobileNav />
            ) : (
              <Box
                className="textdark"
                sx={{
                  display: matches ? "none" : "flex",
                  justifyContent: matches ? "space-between" : "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={menustyle}
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onMouseOver={handleClick}
                  onMouseLeave={handleClose}
                  style={{ zIndex: 1301 }}
                >
                  Features <KeyboardArrowDown />
                </Typography>
                <Menu
                  id="basic-menu"
                  aria-labelledby="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem>MetaMask Portfolio</MenuItem>
                  <MenuItem>Swaps</MenuItem>
                  <MenuItem>Buy Crypto </MenuItem>
                  <MenuItem>EIP-1559</MenuItem>
                </Menu>
                <Typography
                  sx={menustyle}
                  aria-controls={openMenu ? "menu2" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onMouseOver={handleClick}
                  onMouseLeave={handleClose}
                  style={{ zIndex: 1301 }}
                >
                  Build <KeyboardArrowDown />
                </Typography>
                <Menu
                  id="menu2"
                  aria-labelledby="menu2"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem>Developer Docs</MenuItem>
                  <MenuItem>Instituions</MenuItem>
                  <MenuItem>Snaps </MenuItem>
                  <MenuItem>Flask</MenuItem>
                  <MenuItem>SDK</MenuItem>
                </Menu>
                <Typography sx={menustyle}>
                  Resources <KeyboardArrowDown />
                </Typography>
                <Typography sx={menustyle}>Learn</Typography>
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
                <IconButton>
                  <Muiswitch />
                </IconButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
