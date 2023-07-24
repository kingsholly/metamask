import { ImageList, ImageListItem } from "@mui/material";
import g1 from "../assets/g1.webp";
import g2 from "../assets/g2.webp";
import g3 from "../assets/g3.webp";
import g4 from "../assets/g4.webp";
import g5 from "../assets/g5.webp";
import g6 from "../assets/g6.webp";
import g7 from "../assets/g7.webp";
import g8 from "../assets/g8.webp";
function Gallery() {
  return (
    <ImageList
      sx={{
        overflowY: "hidden",

        gridTemplateColumns: {
          sm: "repeat(4, 1fr)!important",
          md: "repeat(4, 1fr)",
          xs: "repeat(2, 1fr)!important",
        },
      }}
      cols={4}
      rowHeight={164}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: g1,
    title: "Breakfast",
  },
  {
    img: g2,
    title: "Burger",
  },
  {
    img: g3,
    title: "Camera",
  },
  {
    img: g4,
    title: "Coffee",
  },
  {
    img: g5,
    title: "Hats",
  },
  {
    img: g6,
    title: "Honey",
  },
  {
    img: g7,
    title: "Basketball",
  },
  {
    img: g8,
    title: "Fern",
  },
];
export default Gallery;
