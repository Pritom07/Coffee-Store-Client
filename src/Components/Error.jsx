import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import { FaArrowLeftLong } from "react-icons/fa6";

const Error = () => {
  return (
    <div>
      <section className="max-w-5xl mx-auto">
        <p className="text-center mt-4 font-rancho text-[22px] text-[#374151] font-semibold">
          <Link to="/">
            <FaArrowLeftLong className="inline mr-1.5" /> Back to Home
          </Link>
        </p>
        <img src="/Images/ErrorPage.png" className="min-h-screen" />
      </section>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url('/Images/more/13.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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

export default Error;
