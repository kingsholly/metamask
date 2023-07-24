//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { Stack } from "@mui/material";
import "./App.css";
import Aboutsection from "./components/Aboutsection";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";
import Header from "./components/header";
import Herosection from "./components/Herosection";
import Newsletter from "./components/Newsletter";
import Swag from "./components/Swag";
import Topbar from "./components/Topbar";
import Whatismm from "./components/Whatismm";

function App() {
  return (
    <div>
      <Stack sx={{ position: "fixed", top: 0, width: "100%", zIndex: 565 }}>
        <Topbar />
        <Header />
      </Stack>
      <Stack pt="55px">
        <Herosection />
        <Aboutsection />
        <Getstarted />
        <Whatismm />
        <Developers />
        <Swag />
        <Newsletter />
      </Stack>
      <Footer />
    </div>
  );
}

export default App;
