import React, { useContext, useEffect, useRef, useState } from "react";
import { currentFetch } from "./App";
import { useLocation, useNavigate } from "react-router-dom";
import "./Styling/cart.css";
import { connect } from "react-redux";
import { Button } from "@mui/material";
function Cart({ dispatch, user: { user }, cart: { cart } }) {
  const [list, setlist] = useState([]);
  const [price, setprice] = useState(0);
  var c = useRef(0);
  const set = useContext(currentFetch);
  const navigate = useNavigate();
  useEffect(() => {
    c.current = 0;
    window.localStorage.setItem("cartlist", JSON.stringify(cart));
    getCart();
  }, [user, cart]);
  function getCart() {
    if (user != null) {
      set(true);
      fetch("https://flavour-backend.vercel.app/cartProduct/" + user._id)
        .then((res) => res.json())
        .then((data) => {
          c.current = 0;
          console.log(data);
          // dispatch({type:'ADDPRODUCT',payload:data})
          console.log(cart);
          window.localStorage.setItem("cartlist", JSON.stringify(cart));
          setlist(data);
          set(false);
        });
    } else {
     // const p = JSON.parse(window.localStorage.getItem("cartlist"));
      setlist(cart);
    }
  }

  function removeProduct(product) {
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
  }
  return (
    <div className="container w-100 mt-5 ">
      {list.length != 0 ? (
        <div className=" mx-auto ontop">
          {list.map((a) => {
            c.current = c.current + a.price;
            console.log(c.current);
            return (
              <div className="row border border-1 w-75 bg-white justify-content-start align-items-center mb-2">
                <p className="col-3 m-0 p-0 ">
                  <img
                    src={a.strMealThumb}
                    alt="product"
                    className="w-100 p-2"
                  />
                </p>
                <div className="col-4">
                  <p className="productDetail">{a.strMeal}</p>

                  <p>{a.category}</p>
                  <p>{a.country}</p>
                </div>
                <div className="col-2 ">
                  <p style={{ fontWeight: "600" }}>$ {a.price}</p>
                  <Button variant="contained" className="bg-warning  text-white" onClick={()=>{removeProduct(a)}}> Delete</Button>
                  {/* <button
                    onClick={() => {
                      removeProduct(a);
                    }}
                    className="btn btn-danger text-info btn-sm fs-6 rounded-0"
                    style={{ fontFamily: "" }}
                  >
                    Delete Item
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
      <div id="cartSummary" className="container w-25 bg-white pb-3">
        <div className=" border-bottom border-1 h4 fw-normal text-start py-3">
          Price Breakup
        </div>
        <p>
          Product Count: <span className="float-end">{list.length}</span>
        </p>
        <p>
          Price :<span className="float-end"> $ {parseInt(c.current)}</span>
        </p>
        <p className="border-bottom border-1 pb-3">
          Shipping:<span className="float-end text-success">FREE</span>
        </p>
        <p className="fs-5 ">
          Total:<span className="float-end"> $ {parseInt(c.current)}</span>
        </p>
        <div className="text-center">
        <Button variant="contained" className="bg-warning text-danger w-100">Proceed to Checkout</Button>
        {/* <button className="btn btn-danger text-info rounded-0">Proceed to Checkout</button> */}
        </div>
       
      </div>
      
      <div></div>
    </div>
  );
}
export default connect((store) => {
  return store;
})(Cart);
