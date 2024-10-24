import { Box, Badge, Divider, Typography, createTheme, ThemeProvider } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderMUI = ({ dispatch, user: { user } }) => {
    const theme = createTheme({
        typography: {
          fontFamily: "Raleway, sans-serif",
          color: '',
          fontSize: '2px',
          letterSpacing: '3px'
        }
      });
    const location=useLocation();
    const [searchText, setsearchText] = useState("");
    const navigate = useNavigate();
    
   const [f,setf]=useState(false)
    const ref = useRef();
    const searchbutton = useRef();
    useEffect(() => {
      //setlogin(false)
  
      console.log(searchbutton.current);
      console.log(ref.current)
      document.body.addEventListener("click", (e) => {
       
        if(searchbutton.current)
        {
          if (e.target != ref.current && e.target != searchbutton.current && !searchbutton.current.contains(e.target)) {
         
            ref.current.className = "searchfield";
            setf(false)
          }
        }
       
      });
    }, [user, location]);
  
    function searchclicked() {
      if (!f) {
        console.log('in f false')
        ref.current.className = "rounded-3 appearBox";
        setf(true)
      } else {
        console.log('in f true')
        searchPage()
        ref.current.className = "rounded-3 searchfield";
        setf(false)
      }
    }
    function searchPage() {
     
      navigate("/searchFood", { state: {searchText:searchText }});
      ev.target.reset();
    }
   
    return (
        <div  className={location.pathname == "/" ? " bg-transparent " : "  bg-dark  sticky-top"} >
            <Box sx={{display:'flex',justifyContent:'space-between',padding:'3vh 5%'}}>
                <Typography sx={{fontFamily:'Pacifico,sans-serif',color:'yellow',fontSize:'35px'}}>
                    Flavour
                </Typography>
                {/* <Divider/> */}
                <ThemeProvider theme={theme}>
                <Box sx={{display:"flex", justifyContent:'space-between',width:'40%'}}>
                    <Badge >
                    <Link to={"/"}>Home</Link>
                    </Badge>
                    <Badge >
                    <Link to={"/explore"}>Menu</Link>
                    </Badge>
                    <Badge >
                    <Link to={"/"}>About Us</Link>
                    </Badge>
                    <Badge >
                    <Link to={"/"}>
                  <i class="bi bi-person"></i>
                  </Link>
                    </Badge>
                    <Badge >
                    <Link to={"/cart"}>
                    <i class="bi bi-cart3"></i>
                  </Link>
                    </Badge>
<Badge >
<input  className="rounded-2 searchfield"/>
<Link onClick={searchclicked} ref={searchbutton}>
                  <i class="bi bi-search"></i>
                  </Link>
</Badge>
                </Box>
                </ThemeProvider>
              
            </Box>
        </div>
    );
};

export default connect((store) => {
    return store;
  })(HeaderMUI);