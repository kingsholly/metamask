import { ImageList, ImageListItem } from "@mui/material";
import g1 from "../assets/g1.webp";
import g2 from "../assets/g2.webp";
import g3 from "../assets/g3.webp";
import g4 from "../assets/g4.webp";
import gg from "../assets/g5.webp";
import gg2 from "../assets/g6.webp";
import g7 from "../assets/g7.webp";
import g8 from "../assets/g8.webp";
function Gallery() {
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
      img: gg,
      title: "Hats",
    },
    {
      img: gg2,
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
            style={{ objectFit: "contain", height: "100%" }}
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Gallery;
