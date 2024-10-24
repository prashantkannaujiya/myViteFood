import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Styling/searchFood.css";
import { connect } from "react-redux";
import { currentFetch } from "./App";
function SearchFood({ dispatch, user }) {
  const [list, setlist] = useState([]);
  const location = useLocation();
  const searchItem = location.state.searchText;
  const navigate = useNavigate();
  console.log(searchItem);
  const load = useContext(currentFetch);
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
        });
    } else {
      alert("Login needed to use cart");
    }
  }
  useEffect(() => {
    load(true);
    fetch("https://flavour-backend.vercel.app/searchFood/" + searchItem)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setlist(data);
        load(false);
      })
      .catch((err) => {
        navigate("/error");
        load(false);
      });
  }, [searchItem]);

  return (
    <div className=" mt-4 container h-auto">
      {list.length != 0 ? (
        <div id="searchPage">
          <h3 className="text-center text-secondary">
            Found {list.length} results for <i>{searchItem}</i>{" "}
          </h3>
          {list.map((a) => {
            return (
              <div className="card w-50 mx-auto p-2 bg-light border-0 rounded-0 shadow " >
                <div className="row  justify-content-center align-items-center">
                  <div className="col h-25 w-auto text-end">
                    <img src={a.strMealThumb} className="img-fluid h-75 w-50" style={{widt:'75%',height:''}}  />
                  </div>
                  <div className="col text-start h-25">
                    <div className="card-body">
                      <p className="card-text">{a.strMeal}</p>
                 
                      <p className="card-text">$ {a.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="notFound">
          <h2>Nothing matched your query</h2>
          <h2>Try with something else</h2>
        </div>
      )}
    </div>
  );
}
export default connect((store) => {
  return store;
})(SearchFood);
