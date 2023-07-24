import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import Gallery from "./Gallery";

function Whatismm() {
  //const videoUrl = "https://www.youtube.com/watch?v=YVgfHZMFFFQ";
  //const videoId = videoUrl.split("v=")[1];
  return (
    <Container
      className="headerdark"
      maxWidth="992px"
      sx={{
        maxWidth: "992px",
        textAlign: "center",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <Grid container alignItems="center">
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
              marginBottom: "32px",
            }}
          >
            What is MetaMask?
          </Typography>
        </Grid>
      </Grid>
      <Card
        sx={{
          borderRadius: "16px",
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "48px",
        }}
      >
        <CardActionArea
          component="a"
          href={`https://www.youtube.com/embed/${"YVgfHZMFFFQ"}`}
          target="_blank"
        >
          <CardMedia
            component="iframe"
            // You can adjust the height of the video
            src={`https://www.youtube.com/embed/${"YVgfHZMFFFQ"}`}
            title="YouTube Video"
            sx={{
              height: {
                // xs: "28px", // Font size for extra-small screens (less than 600px)
                sm: "550px", // Font size for small screens (600px and above)
                // md: "48px", // Font size for medium screens (960px and above)
              },
            }}
          />
        </CardActionArea>
      </Card>
      <Grid container alignItems="center" sx={{ paddingTop: "48px" }}>
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
              marginBottom: "32px",
            }}
          >
            Your key to blockchain applications
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "16px",
              marginBottom: "50px",
            }}
          >
            MetaMask is the leading self-custodial wallet. The safe and simple
            way to access blockchain applications and web3. Trusted by millions
            of users worldwide.
          </Typography>
        </Grid>
      </Grid>
      <Gallery />
    </Container>
  );
}
export default Whatismm;
