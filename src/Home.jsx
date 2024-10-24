import React, { useEffect, useRef } from "react";
import "./Styling/style.css";
import homePic from "./homePic.jpg";

import { Link, useNavigate } from "react-router-dom";
import {
  FaUserTie,
  FaUtensils,
  FaCartArrowDown,
  FaCalendar,
} from "react-icons/fa";
import HomeContent from "./HomeContent";
import HomeMenu from "./HomeMenu";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  createTheme,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const ref = useRef();
  const arr = [
    "03.jpg",
    "767048.jpg",
    "1097928.jpg",
    "01.jpeg",
    "04.jpeg",
    "02.jpg",
    "05.jpg",
  ];
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      color:'#525252',
    },
  });
  var c = 0;
  setInterval(() => {
    console.log(c);
    ref.current.style.backgroundImage = "url(src/assets/" + arr[c] + ")";
    c++;

    if (c == 7) {
      c = 0;
    }
  }, 5000);
  useEffect(() => {}, []);
  return (
    <div id="" className="" style={{marginTop:'10vh'}}>
      <div id="homePic" ref={ref}></div>
      <div className="" style={{ height: "85vh",marginTop:'10vh' }}>
        <ThemeProvider theme={theme} >
          <Typography variant="h1" className=" fw-normal text-white  " style={{marginTop:'15vh',fontSize:'17vh',marginLeft:'6%'}}>Taste the flavour</Typography>
          <Typography variant="h5" className="w-75  text-white" style={{marginLeft:'6%'}}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </Typography>
        </ThemeProvider>
        {/* <h2 id="homeHead">Taste the flavour</h2>
        <h4 className="w-50 text-white homequote " style={{ marginLeft: "6%" }}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </h4> */}
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
      <div>
        {/* <Grid container spacing={2}>
          <Grid item md={2}>
            <Card>
              <CardHeader>
              <i class="bi bi-award"></i>

              </CardHeader>
              <CardContent>
                <Typography variant="h4">
Best cooks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={2}>
            <Card>
              <CardHeader>
                
              </CardHeader>
              <CardContent>
                <Typography variant="h4">
Best cooks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={2}>
            <Card>
              <CardHeader>
             
              </CardHeader>
              <CardContent>
                <Typography variant="h4">
Best cooks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={2}>
            <Card>
              <CardHeader>
               
              </CardHeader>
              <CardContent>
                <Typography variant="h4">
Best cooks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}
      </div>
      <div>
      <ThemeProvider theme={theme}>
      <div className="container bg-light " >
          <div className="row px-3 mb-5 mx-auto justify-content-center  pb-3">
            <div className="col ">
              <div className="card border-0  h-100">
                <div className="card-header text-warning border-0 bg-white">
                  <FaUserTie style={{ fontSize: "65px" }}></FaUserTie>
                </div>
                <div className="card-body ">
                  <Typography variant="h5">Best cooks</Typography>
                  <Typography variant="body1">We have nice,experienced cooks.</Typography>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0  h-100 ">
                <div className="card-header text-warning border-0 bg-white">
                  <FaUtensils style={{ fontSize: "65px" }}></FaUtensils>
                </div>
                <div className="card-body">
                  <Typography variant="h5">Quality Food</Typography>
                  <Typography variant="body1">Best in town</Typography>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0  h-100 ">
                <div className="card-header text-warning border-0 bg-white">
                  <FaCartArrowDown
                    style={{ fontSize: "65px" }}
                  ></FaCartArrowDown>
                </div>
                <div className="card-body ">
                  <Typography variant="h5">Online order</Typography>
                  <Typography variant="body1">Hassle free quick ordering facility</Typography>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0  h-100 ">
                <div className="card-header text-warning border-0 bg-white">
                  <FaCalendar style={{ fontSize: "65px" }}></FaCalendar>
                </div>
                <div className="card-body ">
                  <Typography variant="h5" >24/7 Available</Typography>
                  <Typography variant="body1">We're always there for you</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
      
      </div>
      <HomeContent></HomeContent>
      <HomeMenu></HomeMenu>
    </div>
  );
}
export default Home;
