import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
function HomeContent()
{const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
    return(
        <div>
 <div className="conatiner row justify-content-between w-100 align-items-center p-5 mb-5  mt-5 ">
        <div className="col w-auto p-0 m-0">
          <div className=" d-flex justify-content-center align-items-end">
            <img
              className="w-50  " style={{height:'35vh'}}
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
            />

            <img
              className="w-25 h-50 ms-3"
              src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg"
            />
          </div>
          <div className="d-flex justify-content-center align-items-start mt-3">
            <img
              className="w-25 vh-45 "
              src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/12/Food_craving_GettyImages958841812_Feature-732x549.jpg"
            />
            <img
              className="w-50 h-50 ms-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BKFoBIPxdppLn61m02UM4NL5cr5GkwEHpGQjceqwNw&s"
            />
          </div>
        </div>
        <div className="col-5 ">
 
          <ThemeProvider theme={theme}>   
          <Typography variant="h4" className="text-warning mt-4">About Us</Typography>
          <Typography variant="h4">Welcome to Flavour</Typography>
          <Typography variant={"body1"} fontSize={16} className="mb-3 mt-3">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </Typography>
       
          <Typography variant="body2" fontSize={16} fontFamily={''} className="mb-3">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </Typography>
{/* Your app components */}
</ThemeProvider>
          
          {/* <h2>Welcome to Flavour</h2> */}
          {/* <p className='fs-5'>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </p>

          <p className='fs-5'>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p> */}
          <div>
            <span className="container">
              <span className="display-5 text-warning fw-bold border-4 border-start border-warning ps-2">15</span>
              <span className="card d-inline-block border-0">
                <p className="card-body">
                  <p className="m-0">Years of</p>
                  <p className="m-0 fw-bold">Experience</p>
                </p>
              </span>
              <span className="display-5 text-warning fw-bold border-4 border-start border-warning ps-2 ms-3">50</span>
              <span>
                <span className="card d-inline-block border-0">
                  <p className="card-body">
                    <p className="m-0">Popular</p>
                    <p className="m-0 fw-bold">Masterchefs</p>
                  </p>
                </span>
              </span>
            </span>
          </div>
     </div>
     </div>

        </div>
    )
}
export default HomeContent;