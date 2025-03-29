import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Signin = () => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-sine", once: true });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
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

        <div className="mt-2.5">
          <label className="text-white">Password</label>
          <br />
          <input
            type="password"
            className="input w-72 focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            placeholder="Enter your password"
            name="password"
          />
        </div>

        <div className="mt-2.5">
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
