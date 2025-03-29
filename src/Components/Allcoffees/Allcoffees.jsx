import { BsFillCupFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import EachCoffee from "../EachCoffee/EachCoffee";
import { useState } from "react";

const Allcoffees = ({ coffeesCollection }) => {
  const [coffees, setCoffees] = useState(coffeesCollection);
  const navigate = useNavigate();

  const handleAddCoffee = () => {
    navigate("/addcoffee");
  };

  return (
    <div
      className="mt-7 min-h-screen"
      style={{
        backgroundImage: "url('/Images/more/4.png')",
        backgroundSize: "15% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-railway text-[20px] text-[#1B1A1A]">
          --- Sip & Savor ---
        </h1>
        <h1 className="font-rancho text-[50px] md:text-[55px]">
          Our Popular Products
        </h1>
        <button
          onClick={handleAddCoffee}
          className="bg-[#E3B577] text-white font-rancho text-2xl border-2 border-[#331A15] p-2 rounded-[4px] hover:bg-[#F5F4F1] hover:text-gray-400 cursor-pointer"
        >
          Add Coffee <BsFillCupFill className="inline text-[#331A15]" />
        </button>
      </div>
      <div
        className="px-2.5 md:px-2 min-h-screen"
        style={{
          backgroundImage: "url('/Images/more/5.png')",
          backgroundSize: "30% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto mt-8">
          {coffees.map((coffee) => (
            <EachCoffee
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Allcoffees.propTypes = {
  coffeesCollection: PropTypes.array.isRequired,
};

export default Allcoffees;
