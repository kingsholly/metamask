import { Container, Grid, Typography, Button } from "@mui/material";

function Newsletter() {
  return (
    <Container
      sx={{
        maxWidth: "100%!important",
        textAlign: "center",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: {
                xs: "28px", // Font size for extra-small screens (less than 600px)
                sm: "32px", // Font size for small screens (600px and above)
                // md: "48px", // Font size for medium screens (960px and above)
              },
              fontWeight: "700",
              marginTop: "20px",
            }}
          >
            Receive our Newsletter
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "16px",
            }}
          >
            Sign up to receive updates and announcements
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginTop: "17px" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              fontSize: "14px",
              padding: "8px 28px !important",
              fontWeight: "normal",
              height: "50px",
              marginBottom: "16px",
            }}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Newsletter;
