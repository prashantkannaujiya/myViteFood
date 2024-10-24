import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";

import "./Styling/style.css";
import { FaUserAlt } from "react-icons/fa";
import Explore from "./Explore";
import DisplayFood from "./DisplayFood";
import Login from "./Login";
import Register from "./Register";
import { createContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { Provider } from "react-redux";
import mainstore from "./reducers/store";
import { connect } from "react-redux";
import Header from "./Header";
import SearchFood from "./SearchFood";
import Errorfound from "./Errorfound";
import Payment from "./Payment";
import { Container } from "@mui/material";
import HeaderMUI from "./HeaderMUI";

export const currentFetch = createContext();

function App({ dispatch, user }) {
  const navigate = useNavigate();
  const [fetch,setfetch]=useState(false)
const location=useLocation()
  useEffect(()=>{
 
    console.log(location.pathname)
let p=document.body;
p.style.backgroundColor=location.pathname!='/' ? '#f0f4f8' : 'white';
  },[location.pathname])
  return (
    <>

    <div className="">
      <currentFetch.Provider value={setfetch}>
      {/* <Header></Header> */}
<HeaderMUI></HeaderMUI>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/explore" element={<Explore></Explore>}>
          <Route path="/explore/food" element={<DisplayFood></DisplayFood>} />
        </Route>
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/searchFood" element={<SearchFood></SearchFood>}/>
        <Route path='/error' element={<Errorfound></Errorfound>}/>
        <Route path='/pay' element={<Payment></Payment>}/>
      </Routes>
      </currentFetch.Provider>
      {fetch && <div className="lds-dual-ring"></div>}
      {fetch && <div className="waitBackground"></div>}
    </div>
   
   
    </>
  );
}

export default connect((store) => {
  return store;
})(App);
