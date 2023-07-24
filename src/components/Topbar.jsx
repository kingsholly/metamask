import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";
function Topbar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const handleButtonClick = () => {
    setShowAnnouncement(false);
  };

  return (
    <div>
      {showAnnouncement && (
        <div className="topbar">
          <div className="toplink">
            <a href="https://metamask.io/portfolio/">
              Discover MetaMask Portfolio today. Track, manage, buy, swap,
              bridge, and stake your web3 assets in one place!{" "}
            </a>{" "}
            <ArrowForwardIcon style={{ fontSize: "15px", color: "white" }} />
          </div>
          <div className="topicon">
            {" "}
            <IconButton onClick={handleButtonClick}>
              <CloseIcon style={{ fontSize: "15px" }} />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;
