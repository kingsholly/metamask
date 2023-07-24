import { Container, Grid, Typography, Button } from "@mui/material";
import swag from "../assets/swag.webp";

function Swag() {
  return (
    <Container
      sx={{
        backgroundColor: "#6a737d",
        maxWidth: "100%!important",
        textAlign: "center",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} md={1.5}></Grid>
        <Grid item xs={12} md={3}>
          <div style={{ textAlign: "center", padding: "0 20px" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "28px", // Font size for extra-small screens (less than 600px)
                  sm: "0px", // Font size for small screens (600px and above)
                  // md: "48px", // Font size for medium screens (960px and above)
                },
                fontWeight: "700",
                marginTop: "20px",
                color: "white",
                paddingBottom: "20px",
              }}
            >
              Shop MetaMask Swag
            </Typography>
            {/* Insert your image here */}
            <img
              className="swagimg"
              src={swag}
              alt="MEtamask"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3} sx={{ marginTop: "32px" }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: {
                xs: "0px", // Font size for extra-small screens (less than 600px)
                sm: "24px", // Font size for small screens (600px and above)
                // md: "48px", // Font size for medium screens (960px and above)
              },
              fontWeight: "700",
              marginTop: "20px",
              color: "white",
              paddingBottom: "20px",
            }}
          >
            Shop MetaMask Swag
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "999px",
              borderColor: "white",
              textTransform: "none",
              fontSize: "16px",
              padding: "8px 28px !important",
              fontWeight: "normal",
              height: "50px",
              marginBottom: "16px",
              color: "white",
              marginTop: "40px",
            }}
          >
            Shop Now
          </Button>
        </Grid>
        <Grid item xs={12} md={4.5}></Grid>
      </Grid>
    </Container>
  );
}
export default Swag;
