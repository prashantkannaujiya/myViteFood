import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Styling/displayFood.css";
import { currentFetch } from "./App";
import { connect } from "react-redux";
import { Button } from "@mui/material";
function DisplayFood({ dispatch, user: { user }, cart: { cart } }) {
  var [food, setfood] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const processing = useContext(currentFetch);
  const refFood = useRef();
  function toCart(product) {
    console.log(user);
    if (user) {
      fetch(
        "https://flavour-backend.vercel.app/addToCart/" +
          product._id +
          "/" +
          user._id
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message == "duplicate") {
            alert("Already in cart");
          }
          if (data.message == "done") {
            alert("Inserted");
          }
        });
    } else {
      console.log("in dispatch part");
      dispatch({ type: "ADDPRODUCT", payload: product });
      console.log(cart);
    }
  }
  useEffect(() => {
    window.localStorage.setItem("cartlist", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    processing(true);

  location.state.cat &&  fetch(
      "https://flavour-backend.vercel.app/fetch/" +
        location.state.cat +
        "/" +
        location.state.price
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setfood(data);
        processing(false);
        refFood.current.className =
          refFood.current.className + " foodAnimation";
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
        processing(false);
      });

    window.addEventListener("scroll", () => {
      const s = document.body.scrollTop || document.documentElement.scrollTop;

      if (s > 500) {
        setisVisible(true);
      } else {
        setisVisible(false);
      }
    });
  }, [location.state]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const imageError = (e) => {
    e.target.src =
      "https://static.vecteezy.com/system/resources/previews/024/392/058/non_2x/alert-mark-failed-to-load-something-went-wrong-tap-to-retry-concept-illustration-flat-design-eps10-simple-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg";
  };
  return (
    <div className=" container " ref={refFood}>
      {food.length != 0 ? (
        <div id="displayFoo" className="row row-cols-3 text-center ">
          {food.map((a) => {
            return (
              <div id="produc" className="col-lg-4 mt-5 px-3 pb-2">
                <div className="card w-auto p-0 rounded-0 border-0">
                  <img
                    className="card-img-top img-fluid rounded-0"
                    src={a.strMealThumb}
                    alt={a.id}
                    onError={(e) => {
                      imageError(e);
                    }}
                  />
                  <div className="card-body">
                    <p className="card-title text-secondary text-truncate">
                      {a.strMeal}
                    </p>
                    <p
                      className="text-secondary"
                      style={{ fontFamily: "Arial" }}
                    >
                      $ {a.price}
                    </p>
                    <p>
                      <Button
                        variant="contained"
                        className="bg-warning text-white w-100 rounded-0"
                        onClick={() => {
                          toCart(a);
                        }}
                      >
                        Add to Cart
                      </Button>
                      {/* <button
                        className="btn btn-danger text-info w-100 rounded-0"
                        
                        onClick={() => {
                          toCart(a);
                        }}
                      >
                        Add to Cart
                      </button> */}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="h3 text-center bg-white mt-5" style={{fontFamily:'Raleway'}}>
          No product matches your query
        </p>
      )}
      {isVisible && (
        <div className="text-center mb-4" onClick={scrollToTop} id="top">
          <Button
            className="bg-danger px-4 text-warning rounded-0 d-flex justify-content-between align-items-center "
            style={{ letterSpacing: "1px" }}
          >
            <span className="me-1"> Back To Top</span>
            <i class="bi bi-arrow-up-circle-fill fs-3"></i>
          </Button>
        </div>
      )}
    </div>
  );
}
export default connect((store) => {
  return store;
})(DisplayFood);
