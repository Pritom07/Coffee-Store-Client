import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { ThemeContext } from "../../Provider";
import { toast } from "react-toastify";

const Signin = () => {
  const [pass, seePass] = useState(false);
  const navigate = useNavigate();
  const { signinUser } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-sine", once: true });
  }, []);

  const handlePasswordSeeing = () => {
    seePass(!pass);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signinUser(email, password)
      .then((userCredential) => {
        const UserLastSignIn = userCredential.user.metadata.lastSignInTime;
        const user = { email, password, UserLastSignIn };

        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              toast.success(
                "Thanks, You are successfully SignedIn the website!"
              );
              navigate("/");
            }
          });
      })
      .catch((err) => {
        toast.error(
          `${err.message} Please enter correct Email and Password or Don't have an account SignUp first.`
        );
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
          SignIn Here !
        </h1>

        <div>
          <label className="text-white">Email</label>
          <br />
          <input
            type="email"
            className="input w-72 focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            placeholder="Enter your email"
            name="email"
          />
        </div>

        <div className="mt-3">
          <label className="text-white">Password</label>
          <br />
          <input
            type={pass ? "text" : "password"}
            className="input w-72 focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            placeholder="Enter your password"
            name="password"
          />
        </div>

        <div
          onClick={handlePasswordSeeing}
          className="cursor-pointer text-2xl absolute bottom-48 right-16"
        >
          {pass ? <IoEyeOff /> : <IoEye />}
        </div>

        <div className="mt-3.5">
          <a className="link link-hover text-white">Forgot password?</a>
        </div>
        <button className="bg-[#E3B577] text-[#331A15] p-2 rounded-[6px] border-2 border-[#331A15] mt-4 w-full cursor-pointer font-semibold">
          SignIn
        </button>
        <h1 className="text-white mt-2.5">
          Don't have an account ?{" "}
          <Link
            to="/pages/signup"
            className="text-red-600 text-xl font-semibold"
          >
            SignUp
          </Link>
        </h1>
      </form>
    </section>
  );
};

export default Signin;
