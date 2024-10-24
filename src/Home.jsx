import React, { useEffect, useRef } from "react";
import "./Styling/style.css";

// Importing each image statically
import img1 from "./assets/03.jpg";
import img2 from "./assets/767048.jpg";
import img3 from "./assets/1097928.jpg";
import img4 from "./assets/01.jpeg";
import img5 from "./assets/04.jpeg";
import img6 from "./assets/02.jpg";
import img7 from "./assets/05.jpg";

import { useNavigate } from "react-router-dom";
import { FaUserTie, FaUtensils, FaCartArrowDown, FaCalendar } from "react-icons/fa";
import { Button, Typography, ThemeProvider, createTheme } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const ref = useRef();
  
  // Array of imported images
  const arr = [img1, img2, img3, img4, img5, img6, img7];

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      color:'#525252',
    },
  });

  var c = 0;

  // Using setInterval to change the background image
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(c);
      ref.current.style.backgroundImage = `url(${arr[c]})`;
      c++;

      if (c === arr.length) {
        c = 0;
      }
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="" className="" style={{marginTop:'10vh'}}>
      <div id="homePic" ref={ref}></div>
      <div className="" style={{ height: "85vh",marginTop:'10vh' }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h1" className="fw-normal text-white" style={{marginTop:'15vh',fontSize:'17vh',marginLeft:'6%'}}>Taste the flavour</Typography>
          <Typography variant="h5" className="w-75 text-white" style={{marginLeft:'6%'}}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </Typography>
        </ThemeProvider>
        <Button
          className="fs-6 mt-3"
          variant="contained"
          onClick={() => {
            navigate("/explore");
          }}
          style={{ marginLeft: "6%" }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Home;
