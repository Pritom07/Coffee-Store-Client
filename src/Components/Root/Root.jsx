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
    </div>
  );
};

export default Root;
