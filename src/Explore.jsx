import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Styling/explore.css";
import { IoIosArrowForward } from "react-icons/io";
function Explore() {
  const navigate = useNavigate();
  var [choice, setchoice] = useState("Dessert");
  var [price, setprice] = useState(-1);
  useEffect(() => {
    console.log(price);
    navigate("/explore/food", { state: { cat: choice, price: price } });
  }, [choice, price]);

  function removePrice() {
    const f = document.getElementById("priceForm");
    f.reset();
    setprice(-1);
  }
  return (
    <div id="explor" className="  d-flex justify-content-around p-0 mx-2 ">
      <div
        id="filter"
        className="card px-2 mt-5 w-25 pt-1 h-100 border-0  bg-white shadow"
      >
        <h5
          className="h5  bg-warning mb-3 px-1 text-white  py-2"
      
        >
       
          Food Category
        </h5>

        <div className="dropdown">
          <div className=" ms-0 sm fw-light text-light" id="menu">
            <p
              className=""
              onClick={(e) => {
                setchoice("Breakfast");
              }}
            >
              Breakfast  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Chicken");
              }}
            >
              Chicken  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Goat");
              }}
            >
              Goat  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Lamb");
              }}
            >
              Lamb  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Miscellaneous");
              }}
            >
              Miscellaneous  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Pasta");
              }}
            >
              Pasta  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Seafood");
              }}
            >
              Seafood  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Dessert");
              }}
            >
              Dessert  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Side");
              }}
            >
              Side  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Starter");
              }}
            >
              Starter
               
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Vegan");
              }}
            >
              Vegan  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("Vegetarian");
              }}
            >
              Vegetarian  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("steaks");
              }}
            >
              Steaks  
            </p>
            <p
              className=""
              onClick={() => {
                setchoice("our-foods");
              }}
            >
              Our Foods  
            </p>
          </div>
        </div>
        <div id="priceFilter" className="">
          <h5
            className=" h5 bg-warning text-start ps-1 mt-4 mb-3 text-white py-1"
           
          >
            Price
          </h5>
          <form id="priceForm" className="text-start text-secondary  fs-6">
            <label>
              {" "}
              <input
                className="text-start"
                type="radio"
                name="price"
                value={0}
                onClick={() => {
                  setprice(0);
                }}
              />
              Less than $ 50
            </label>
            <br />

            <label>
              {" "}
              <input
                type="radio"
                name="price"
                value={50}
                onClick={() => {
                  setprice(50);
                }}
              />
              $ 50 to $ 100
            </label>
            <br />

            <label>
              <input
                type="radio"
                name="price"
                value={100}
                onClick={() => {
                  setprice(100);
                }}
              />
              More than $ 100
            </label>
            <br />
          </form>
          <p>
            <button
              onClick={removePrice}
              className="btn btn-warning  text-white mt-3"
            >
              Reset Price
            </button>
          </p>
        </div>
        <div id="sort"></div>
      </div>
      <div className="w-100 flex-fill ms-3">
        <Outlet />
      </div>
    </div>
  );
}
export default Explore;
