import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Login from "./Login";
import { useState } from "react";
import { useEffect } from "react";
import "./Styling/style.css";
function Header({ dispatch, user: { user } }) {
  var [login, setlogin] = useState(false); // display or hide login box
  const [searchText, setsearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
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
    <div className="">
      <div
        className={location.pathname == "/" ? " bg-transparent " : "  bg-dark  "} 
      >
        <nav className="navbar navbar-expand-lg justify-content-between px-5">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand siteIcon fs-2">flavour</Link>

            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end "
              id="ftco-nav"
            >
              <ul
                className="navbar-nav justify-content-around w-50 fs-5 text-white align-items-center"
                style={{ width: "" }}
              >
                <li className="nav-item ms-4">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-item ms-4">
                  <Link to={"/explore"}>Menu</Link>
                </li>
                <li className="nav-item ms-4">
                  <Link to={"/"}>About Us</Link>
                </li>
                <li className="nav-item ms-4">
                  <Link to={"/"}>
                  <i class="bi bi-person"></i>
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link to={"/cart"}>
                    <i class="bi bi-cart3"></i>
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <input
                    ref={ref}
                    type="text"
                    className="rounded-2 searchfield"
                    onChange={(e) => {
                      setsearchText(e.target.value);
                    }}
                  />
                  <Link onClick={searchclicked} ref={searchbutton}>
                  <i class="bi bi-search"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default connect((store) => {
  return store;
})(Header);
