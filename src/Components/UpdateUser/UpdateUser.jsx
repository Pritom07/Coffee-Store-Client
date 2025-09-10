import { useLoaderData, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const userData = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, email, password } = userData;
  const [pass, seePass] = useState(false);

  const handlePasswordSeeing = () => {
    seePass(!pass);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const updatedUser = { name, email, password };

    fetch(`https://coffee-store-server-ten-ashy.vercel.app/users/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: `${name} updated successfully !`,
            icon: "success",
            draggable: true,
          });
          navigate("/users");
        }
      });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/Images/more/11.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center mt-5 px-1.5">
        <h1 className="font-rancho text-[#374151] text-5xl text-center">
          Updating Existing User Details
        </h1>
        <p className="font-railway text-[#1B1A1A] text-xl text-justify md:text-center mt-3.5">
          Our coffee store users are passionate coffee lovers who enjoy rich
          flavors and cozy atmospheres. They appreciate high-quality brews,
          whether it's a strong espresso or a creamy latte. Many visit
          regularly, making the café a part of their daily routine. Their love
          for great coffee and warm conversations creates a welcoming community.
        </p>
      </div>
      <form onSubmit={handleFormSubmit} className="max-w-5xl mx-auto px-1.5">
        <div>
          <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input w-full"
            defaultValue={name}
          />
        </div>
        <div className="mt-3">
          <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input w-full focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            defaultValue={email}
          />
        </div>
        <div className="mt-3">
          <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
            Password
          </label>
          <input
            type={pass ? "text" : "password"}
            name="password"
            className="input w-full"
            defaultValue={password}
          />
        </div>
        <div
          onClick={handlePasswordSeeing}
          className="cursor-pointer text-2xl relative bottom-8 left-[90%] md:left-[96%]"
        >
          {pass ? <IoEyeOff /> : <IoEye />}
        </div>
        <button className="bg-[#D2B48C] text-[#331A15] font-rancho text-2xl border-2 border-[#331A15] w-full p-2 mt-6 rounded-[4px] cursor-pointer">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
