import { Container, Grid, Typography, Link } from "@mui/material";

import meta from "../assets/meta.svg";
const menustyle = {
  cursor: "pointer",
  color: "rgb(0 0 0 / 74%)",
  display: "flex",
  padding: "7px 0px 7px",
  "&:hover": {
    color: "#037dd5", // Set the link color on hover
  },
  fontSize: {
    xs: "16px", // Font size for extra-small screens (less than 600px)
    sm: "12px", // Font size for small screens (600px and above)
    // md: "48px", // Font size for medium screens (960px and above)
  },
};
function Footer() {
  return (
    <Container
      className="headerdark"
      maxWidth="992px"
      sx={{
        backgroundColor: "#e9ebee",

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
          <Grid
            item
            xs={12}
            md={2}
            sx={{ marginBottom: "40px", textAlign: "left" }}
          >
            <img
              src={meta}
              alt="metmask"
              className="toplogo"
              height="40px"
              width="210px"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            style={{
              color: "rgb(246, 133, 27)",
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            LEARN MORE
          </Typography>
          <Link href="#" underline="none" sx={menustyle}>
            {"About"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Developer Docs"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Download"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"MetaMask Institutional"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"News"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Security"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {""}
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            style={{
              color: "rgb(246, 133, 27)",
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            GET INVOLVED
          </Typography>
          <Link href="#" underline="none" sx={menustyle}>
            {"Github"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Gitcoin"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Open Positions"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Swag Shop"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Press & Partnerships"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {""}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {""}
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            style={{
              color: "rgb(246, 133, 27)",
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            LEGAL
          </Typography>
          <Link href="#" underline="none" sx={menustyle}>
            {"Privacy Policy"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Terms of Use"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"contributor License Agreement"}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {"Sitemap"}
          </Link>
          <Link underline="none" sx={menustyle}>
            {""}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {""}
          </Link>
          <Link href="#" underline="none" sx={menustyle}>
            {""}
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ marginTop: "20px", textAlign: "left" }}
          >
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              @2023 MetaMask • A Consensys Formation
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Footer;
