import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Addcoffee from "./Components/Addcoffee/Addcoffee";
import Users from "./Components/Users/Users";
import CoffeeDetails from "./Components/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "./Components/UpdateCoffee/UpdateCoffee";
import Error from "./Components/Error";
import Signin from "./Components/Pages/Signin/Signin";
import Signup from "./Components/Pages/Signup/Signup";
import UserAccess from "./Components/Pages/UserAccess/UserAccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root></Root>}>
        <Route
          index
          loader={() => fetch("http://localhost:5000/coffees")}
          element={<Home></Home>}
        ></Route>
        <Route path="/addcoffee" element={<Addcoffee></Addcoffee>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route
          path="/coffees/:id"
          loader={({ params }) =>
            fetch(`http://localhost:5000/coffees/${params.id}`)
          }
          element={<CoffeeDetails />}
        ></Route>
        <Route
          path="/updateCoffee/:id"
          loader={({ params }) =>
            fetch(`http://localhost:5000/coffees/${params.id}`)
          }
          element={<UpdateCoffee />}
        ></Route>
      </Route>
      ,
      <Route path="/pages" element={<UserAccess />}>
        <Route path="/pages/signin" element={<Signin />}></Route>
        <Route path="/pages/signup" element={<Signup />}></Route>
      </Route>
      ,<Route path="*" element={<Error />}></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
