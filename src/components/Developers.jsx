import { Container, Grid, Typography, Link } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
const menustyle = {
  marginRight: "20px",
  cursor: "pointer",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "22px",
  fontSize: "16px",
  "&:hover": {
    color: "#037dd5", // Set the link color on hover
  },
};
function Developers() {
  return (
    <Container
      maxWidth="992px"
      sx={{
        backgroundColor: "#24292e",

        textAlign: "center",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{ maxWidth: "990px!important", margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: {
                xs: "40px", // Font size for extra-small screens (less than 600px)
                sm: "24px", // Font size for small screens (600px and above)
                // md: "48px", // Font size for medium screens (960px and above)
              },
              fontWeight: "700",
              marginTop: "20px",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Developers
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "14px",

              color: "white",
            }}
          >
            MetaMask is powered by a strong community from across the globe.
            Interested in contributing? Find out how and what to contribute
            using the resources below.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginTop: "28px" }}>
          <Link href="#" underline="none" sx={menustyle}>
            {"Open Issues"} <KeyboardArrowRight />
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Open Bounties"} <KeyboardArrowRight />
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Documentation"} <KeyboardArrowRight />
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Contributing Guidelines"} <KeyboardArrowRight />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Developers;
