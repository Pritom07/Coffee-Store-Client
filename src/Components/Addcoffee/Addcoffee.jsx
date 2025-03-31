import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IoMdStar } from "react-icons/io";

const Addcoffee = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const chef = form.get("chef");
    const supplier = form.get("supplier");
    const taste = form.get("taste");
    const category = form.get("category");
    const details = form.get("details");
    const photoURL = form.get("photo");
    const addedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    fetch("https://coffee-server-orcin.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: `${name} added successfully !`,
            icon: "success",
            draggable: true,
          });
          navigate("/");
        }
      });
  };
  return (
    <div
      className="min-h-screen px-2"
      style={{
        backgroundImage: "url('/Images/more/11.png')",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto mt-5">
        <h1 className="font-rancho text-5xl text-[#374151]">Add New Coffee</h1>
        <p className="font-railway text-[18px] text-[#1B1A1A] text-justify md:text-center mt-3.5">
          Coffee is a comforting and invigorating drink, cherished for its deep
          aroma and rich flavors. From a strong espresso to a creamy latte,
          every cup offers a unique blend of taste and experience. More than
          just a drink, coffee brings people together, fuels creativity, and
          sparks conversations.
        </p>
      </div>
      <form onSubmit={handleFormSubmit} className="max-w-5xl mx-auto mt-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Name
              <IoMdStar className="inline ml-1 text-xs text-red-700" />
            </label>
            <input
              type="text"
              name="name"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
              placeholder="Enter coffee name"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Chef
              <IoMdStar className="inline ml-1 text-xs text-red-700" />
            </label>
            <input
              type="text"
              name="chef"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
              placeholder="Enter coffee chef"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-3">
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
              placeholder="Enter coffee supplier"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Taste
              <IoMdStar className="inline ml-1 text-xs text-red-700" />
            </label>
            <input
              type="text"
              name="taste"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
              placeholder="Enter coffee taste"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-3">
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
              placeholder="Enter coffee category"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Details
            </label>
            <input
              type="text"
              name="details"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
              placeholder="Enter coffee details"
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
            PhotoURL
            <IoMdStar className="inline ml-1 text-xs text-red-700" />
          </label>
          <input
            type="text"
            name="photo"
            className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            placeholder="Enter photo URL"
            required
          />
        </div>
        <button className="bg-[#D2B48C] text-2xl font-rancho text-[#331A15] border-2 border-[#331A15] w-full p-1.5 mt-6 rounded-[4px] cursor-pointer">
          Add coffee
        </button>
      </form>
    </div>
  );
};

export default Addcoffee;
