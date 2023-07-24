import { Container, Grid, Typography } from "@mui/material";

import about1 from "../assets/wallet-illo.svg";
import about2 from "../assets/Explore-illo.svg";
import about3 from "../assets/Browse-illo.svg";

function Aboutsection() {
  return (
    <Container
      className="headerdark"
      maxWidth="992px"
      sx={{
        backgroundColor: "#ffffff",
        transition: "all 0.5s ease 0s",
        maxWidth: "1080px",
        width: "100%",
        margin: "0 auto",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <Grid container alignItems="center">
        {/* Content on the left side */}
        <Grid
          item
          xs={12}
          md={4.8}
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <div>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "28px", // Font size for extra-small screens (less than 600px)
                  sm: "24px", // Font size for small screens (600px and above)
                  // md: "48px", // Font size for medium screens (960px and above)
                },
                fontWeight: "700",
                marginTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Buy, store, send and swap tokens
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: "16px",
                marginBottom: "50px",
              }}
            >
              Available as a browser extension and as a mobile app, MetaMask
              equips you with a key vault, secure login, token wallet, and token
              exchange—everything you need to manage your digital assets.
            </Typography>
          </div>
        </Grid>

        {/* Image on the right side */}
        <Grid item xs={12} md={7.2}>
          <div style={{ textAlign: "center" }}>
            {/* Insert your image here */}
            <img className="featuredimage" src={about1} alt="MEtamask" />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        sx={{
          flexDirection: "row-reverse",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {/* Image on the right side */}

        {/* Content on the left side */}
        <Grid
          item
          xs={12}
          md={4.8}
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <div>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "28px", // Font size for extra-small screens (less than 600px)
                  sm: "24px", // Font size for small screens (600px and above)
                  // md: "48px", // Font size for medium screens (960px and above)
                },
                fontWeight: "700",
                marginTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Explore blockchain apps
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: "16px",
                marginBottom: "50px",
              }}
            >
              MetaMask provides the simplest yet most secure way to connect to
              blockchain-based applications. You are always in control when
              interacting on the new decentralized web.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={7.2}>
          <div style={{ textAlign: "center" }}>
            {/* Insert your image here */}
            <img className="featuredimage" src={about2} alt="MEtamask" />
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        {/* Content on the left side */}
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <div>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "28px", // Font size for extra-small screens (less than 600px)
                  sm: "24px", // Font size for small screens (600px and above)
                  // md: "48px", // Font size for medium screens (960px and above)
                },
                fontWeight: "700",
                marginTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Own your data
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: "16px",
                marginBottom: "50px",
              }}
            >
              MetaMask generates passwords and keys on your device, so only you
              have access to your accounts and data. You always choose what to
              share and what to keep private.
            </Typography>
          </div>
        </Grid>

        {/* Image on the right side */}
        <Grid item xs={12} md={7.5}>
          <div style={{ textAlign: "center" }}>
            {/* Insert your image here */}
            <img className="featuredimage" src={about3} alt="MEtamask" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Aboutsection;
