import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const UserAccess = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/Images/more/17.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default UserAccess;
