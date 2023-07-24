import { Container, Grid, Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { KeyboardArrowDown } from "@mui/icons-material";
import hero1 from "../assets/home-hero.webp";
function Herosection() {
  return (
    <Container
      className="headerdark"
      maxWidth="1080px"
      sx={{
        backgroundColor: "#ffffff",
        paddingTop: "55px",
        marginTop: "60px!important",
        transition: "all 0.5s ease 0s",
        maxWidth: "1080px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Grid container alignItems="center">
        {/* Content on the left side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <div style={{ padding: "0 20px" }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "34px", // Font size for extra-small screens (less than 600px)
                  sm: "34px", // Font size for small screens (600px and above)
                  md: "48px", // Font size for medium screens (960px and above)
                },
                fontWeight: "700",
              }}
            >
              A crypto wallet & gateway to blockchain apps
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: "16px",
                marginBottom: "24px",
              }}
            >
              Start exploring blockchain applications in seconds. Trusted by
              over 30 million users worldwide.
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                fontSize: "20px",
                padding: "8px 20px !important",
                height: "45px",
                fontWeight: "normal",
              }}
            >
              Download For{" "}
              <span
                style={{
                  marginLeft: "5px",
                  paddingTop: "10px",
                }}
              >
                <GoogleIcon />{" "}
              </span>
            </Button>
          </div>
        </Grid>

        {/* Image on the right side */}
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: "center", padding: "0 20px" }}>
            {/* Insert your image here */}
            <img src={hero1} alt="MEtamask" style={{ width: "100%" }} />
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            textAlign: "center",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            LEARN MORE
          </Typography>
          <KeyboardArrowDown />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Herosection;
