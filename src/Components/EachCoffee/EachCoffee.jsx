import PropTypes from "prop-types";
import { useContext } from "react";
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../Provider";
import { toast } from "react-toastify";

const EachCoffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, taste, photoURL } = coffee;
  const navigate = useNavigate();
  const { User } = useContext(ThemeContext);

  const handleShowing = (id) => {
    navigate(`/coffees/${id}`);
  };

  const handleEditing = (idx) => {
    //i am using private route here without using if(User){}
    navigate(`/updateCoffee/${idx}`);
  };

  const handleDelete = (id) => {
    if (User) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffee-server-orcin.vercel.app/coffees/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: `${name} deleted successfully`,
                  icon: "success",
                });
                const newCoffeesCollection = coffees.filter(
                  (coffee) => coffee._id !== id
                );
                setCoffees(newCoffeesCollection);
              }
            });
        }
      });
    } else {
      navigate("/pages/signin");
      toast.warn("You have to SignIn first to Delete Coffee.");
    }
  };

  return (
    <div className="flex">
      <div className="card card-side bg-[#F5F4F1] flex-grow flex flex-col lg:flex-row justify-center items-center">
        <div>
          <figure>
            <img src={photoURL} />
          </figure>
        </div>
        <div className="card-body flex justify-center items-center -mt-2">
          <section className="flex justify-between items-center">
            <div>
              <h1 className="font-railway font-semibold text-xl text-[#1B1A1A]">
                Name :{" "}
                <span className="text-[#5C5B5B] text-[18px]">{name}</span>
              </h1>
              <h1 className="font-railway font-semibold text-xl text-[#1B1A1A]">
                Chef :{" "}
                <span className="text-[#5C5B5B] text-[18px]">{chef}</span>
              </h1>
              <h1 className="font-railway font-semibold text-xl text-[#1B1A1A]">
                Taste :{" "}
                <span className="text-[#5C5B5B] text-[18px]">{taste}</span>
              </h1>
            </div>
            <div className="pl-3.5">
              <button
                onClick={() => handleShowing(_id)}
                className="bg-[#D2B48C] text-white text-[18px] p-3 rounded-[4px] cursor-pointer"
              >
                <IoEye />
              </button>
              <br />
              <button
                onClick={() => handleEditing(_id)}
                className="bg-[#3C393B] text-white text-[18px] p-3 mt-2 rounded-[4px] cursor-pointer"
              >
                <MdEdit />
              </button>
              <br />
              <button
                onClick={() => handleDelete(_id)}
                className="bg-[#EA4744] text-white text-[18px] p-3 mt-2 rounded-[4px] cursor-pointer"
              >
                <MdDelete />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

EachCoffee.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default EachCoffee;
