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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/addcoffee" element={<Addcoffee></Addcoffee>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
