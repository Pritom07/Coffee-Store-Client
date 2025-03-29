import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div
        className="min-h-screen md:pt-[70px] mt-10"
        style={{
          backgroundImage: "url('/Images/more/13.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Footer />
      </div>
      <div
        className="h-12 flex justify-center items-center"
        style={{
          backgroundImage: "url('/Images/more/24.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white font-rancho text-2xl">
          Copyright Coffee Store ! All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Root;
