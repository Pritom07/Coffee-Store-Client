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
import Provider from "./Components/Provider";
import { ToastContainer, Zoom } from "react-toastify";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root></Root>}>
        <Route
          index
          loader={() =>
            fetch("https://coffee-store-server-ten-ashy.vercel.app/coffees")
          }
          element={<Home></Home>}
        ></Route>
        <Route path="/addcoffee" element={<Addcoffee></Addcoffee>}></Route>
        <Route
          path="/users"
          loader={() =>
            fetch("https://coffee-store-server-ten-ashy.vercel.app/users")
          }
          element={<Users></Users>}
        ></Route>
        <Route
          path="/coffees/:id"
          loader={({ params }) =>
            fetch(
              `https://coffee-store-server-ten-ashy.vercel.app/coffees/${params.id}`
            )
          }
          element={<CoffeeDetails />}
        ></Route>
        <Route
          path="/updateCoffee/:id"
          loader={({ params }) =>
            fetch(
              `https://coffee-store-server-ten-ashy.vercel.app/coffees/${params.id}`
            )
          }
          element={
            <PrivateRoute>
              <UpdateCoffee />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/updateUser/:id"
          loader={({ params }) =>
            fetch(
              `https://coffee-store-server-ten-ashy.vercel.app/users/${params.id}`
            )
          }
          element={
            <PrivateRoute>
              <UpdateUser />
            </PrivateRoute>
          }
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
    <Provider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
