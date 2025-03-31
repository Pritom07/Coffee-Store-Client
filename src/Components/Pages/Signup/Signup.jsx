import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Provider";
import { toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Signup = () => {
  const { createUser } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [pass, seePass] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-sine", once: true });
  }, []);

  const handlePasswordSeeing = () => {
    seePass(!pass);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const user = { name, email, password };
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|-]).{6,}$/;

    if (!regex.test(password)) {
      toast.warn(
        "Your password should contain atleast one Uppercase,atleast one Lowercase ,atleast one number,one special character and length should be atleast 6."
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const User = userCredential.user;

        fetch("https://coffee-server-orcin.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("One User created successfully !");
              navigate("/pages/signin");
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <section
      data-aos="fade-up"
      className="flex justify-center items-center min-h-screen"
    >
      <form
        onSubmit={handleFormSubmit}
        className="backdrop-blur-md max-w-5xl mx-auto p-12 rounded-[5px] font-railway"
      >
        <h1 className="text-center text-white font-rancho text-3xl font-semibold mb-2.5">
          SignUp Here !
        </h1>
        <div>
          <label className="text-white">Name</label>
          <br />
          <input
            type="text"
            className="input w-72 focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>

        <div className="mt-2.5">
          <label className="text-white">Email</label>
          <br />
          <input
            type="email"
            className="input w-72 focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        <div className="mt-2.5">
          <label className="text-white">Password</label>
          <br />
          <input
            type={pass ? "text" : "password"}
            className="input w-72 focus:outline-none focus:ring-2 focus:ring-[#E3B577] relative"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>
        <p className="text-red-500 font-bold text-[14px] mt-2">
          Password should contain atleast one <br /> uppercase, atleast one
          lowwrcase,atleast <br /> one number,one special character and <br />
          length should be atleast 6.
        </p>
        <div
          onClick={handlePasswordSeeing}
          className="cursor-pointer text-2xl absolute bottom-60 right-16"
        >
          {pass ? <IoEyeOff /> : <IoEye />}
        </div>

        <button className="bg-[#E3B577] text-[#331A15] p-2 rounded-[6px] border-2 border-[#331A15] mt-3 w-full cursor-pointer font-semibold hover:scale-x-95">
          SignUp
        </button>
        <h1 className="text-white mt-2.5">
          Already have an account ?{" "}
          <Link
            to="/pages/signin"
            className="text-green-600 text-xl font-semibold"
          >
            SignIn
          </Link>
        </h1>
      </form>
    </section>
  );
};

export default Signup;
