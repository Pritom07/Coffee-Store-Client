import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-sine", once: true });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
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
          <label className="text-white">Name</label>
          <br />
          <input
            type="text"
            className="input w-72 focus:outline-none focus:ring-2 focus:ring-[#E3B577]"
            placeholder="Enter your name"
            name="name"
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

        <button className="bg-[#E3B577] text-[#331A15] p-2 rounded-[6px] border-2 border-[#331A15] mt-4 w-full cursor-pointer font-semibold">
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
