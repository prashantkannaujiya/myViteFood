import { useEffect, useState } from "react";
import { GiChickenOven } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import './Styling/style.css'
import { createTheme, ThemeProvider, Typography } from "@mui/material";
function HomeMenu() {
  const [clicked, setclicked] = useState("Dessert");
  const [menu, setmenu] = useState([]);
const theme=createTheme({
  typography:{
    fontFamily:'Poppins, sans serif'
  }
})
  useEffect(() => {
    fetch("https://flavour-backend.vercel.app/fetch/" + clicked + "/" + -1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      
        setmenu(data);
        
      })
      .catch((e) => {
        console.log(e);
      });
  }, [clicked]);
  return (
    <div className="container">
    <ThemeProvider theme={theme}>
      <Typography variant='h5' className="text-warning text-center">
Food Menu
      </Typography>
      <Typography variant='h4' className="text-center mb-4">Most Popular</Typography>
    </ThemeProvider>
      {/* <h5 className="text-center text-warning">Food Menu</h5>
      <h2 className="text-center mb-4">Most Popular</h2> */}
      <div className=" fs-4 text-center mb-3 text-center mx-5">
        <span
          className={
            clicked == "Dessert"
              ? "border-4 border-bottom border-warning me-4 pb-3"
              : "border-4 border-bottom me-4 pb-3"
          }
          onClick={() => {
            setclicked("Dessert");
          }}
          style={{cursor:'pointer'}}
        >
          <i class="bi bi-cup-hot-fill text-warning me-1 fs-2"></i>Dessert
        </span>
        <span
          className={
            clicked == "Chicken"
              ? "border-4 border-bottom border-warning pb-3 me-4"
              : "border-4 border-bottom pb-3 me-4"
          }
          onClick={() => {
            setclicked("Chicken");
          }}
          style={{cursor:'pointer'}}
        >
          {" "}
          <GiChickenOven className="text-warning me-1 fs-2" size={"48px"} />
          Chicken
        </span>
        <span
          className={
            clicked == "Vegetarian"
              ? "border-4 border-bottom border-warning pb-3"
              : "border-4 border-bottom pb-3"
          }
          onClick={() => {
            setclicked("Vegetarian");
          }}

          style={{cursor:'pointer'}}
        >
          {" "}
          <GiFullPizza  className="text-warning me-1 fs-2" size={"48px"} />
        Vegetarian
        </span>
      </div>
      <div className="container h-auto mt-3 pt-5">
        <div className="row row-cols-2 mb-2">
          {(() => {
        let  c=[];
            if (menu.length != 0) {
              for (var i = 0; i < 10; i++) {
                c.push(
                 <div className="col card border-0 mb-3" >
                  <div className="row justify-content-between align-items-center">
                    <div className="col-2"> 
                    <img src={menu[i].strMealThumb} className="img-fluid " />
                    </div>
                    <div className="col-6 flex-fill">
                      <div className="card-header fs-5 d-flex bg-white justify-content-between fw-bol p-0"><span >{menu[i].strMeal}</span><span className="text-warning text-end "><i className="bi bi-currency-rupee"></i>{menu[i].price}</span></div>
                      <div className="card-text p-0 fst-italic"></div>
                    </div>

                  </div>
                 </div>
                );
              }
              console.log(c);
              return c;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
export default HomeMenu;
