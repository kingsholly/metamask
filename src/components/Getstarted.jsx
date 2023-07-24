import { Container, Grid, Typography, Button } from "@mui/material";
import Metamasklogo from "./Metamasklogo";

function Getstarted() {
  return (
    <Container
      sx={{
        backgroundColor: "#24292e",
        maxWidth: "100%!important",
        textAlign: "center",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} md={12}>
          <Metamasklogo />
        </Grid>
        <Grid item xs={12} md={12}>
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
              color: "white",
            }}
          >
            Get Started
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginTop: "32px" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              fontSize: "14px",
              padding: "8px 28px !important",
              fontWeight: "normal",
              height: "40px",
              marginBottom: "16px",
            }}
          >
            Download MetaMask Today
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Getstarted;
