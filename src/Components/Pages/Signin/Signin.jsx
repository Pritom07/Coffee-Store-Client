import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useRef, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { ThemeContext } from "../../Provider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const Signin = () => {
  const [pass, seePass] = useState(false);
  const navigate = useNavigate();
  const { signinUser, forgottingPasswordSetting, googleSignin } =
    useContext(ThemeContext);
  const location = useLocation();
  const emailref = useRef();
  const googleProvider = new GoogleAuthProvider();

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

        fetch("https://coffee-server-orcin.vercel.app/users", {
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
                "Thanks, You are successfully SignedIn the website !"
              );
            }
            {
              location?.state ? navigate(location.state) : navigate("/");
            }
          });
      })
      .catch((err) => {
        toast.error(
          `${err.message} Please enter correct Email and Password or Don't have an account SignUp first.`
        );
      });
  };

  const handleForgetPassword = () => {
    const email = emailref.current.value;
    forgottingPasswordSetting(email)
      .then(() => {
        toast.success("An email is sent to reset your password.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    googleSignin(googleProvider)
      .then((result) => {
        const User = result.user;
        const name = User.displayName;
        const email = User.email;
        const UserLastSignIn = User.metadata.lastSignInTime;
        const signinUser = { name, email, UserLastSignIn };

        fetch("https://coffee-server-orcin.vercel.app/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signinUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.upsertedCount > 0 || data.modifiedCount > 0) {
              toast.success(
                `Thanks ${name}, You are successfully SignedIn the website !`
              );
            }
            {
              location?.state ? navigate(location.state) : navigate("/");
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
        className="backdrop-blur-md max-w-5xl mx-auto px-12 py-8 rounded-[5px] font-railway "
      >
        <h1 className="text-center text-white font-rancho text-3xl font-semibold mb-2.5">
          SignIn Here !
        </h1>

        <div>
          <label className="text-white">Email</label>
          <br />
          <input
            type="email"
            ref={emailref}
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
          className="cursor-pointer text-2xl absolute bottom-64 right-16"
        >
          {pass ? <IoEyeOff /> : <IoEye />}
        </div>

        <div className="mt-3">
          <a
            onClick={handleForgetPassword}
            className="link link-hover text-white"
          >
            Forgot password?
          </a>
        </div>
        <button className="bg-[#E3B577] text-[#331A15] p-2 rounded-[6px] border-2 border-[#331A15] mt-2.5 w-full cursor-pointer font-semibold">
          SignIn
        </button>
        <h1 className="text-white mt-2">
          Don't have an account ?{" "}
          <Link
            to="/pages/signup"
            className="text-red-600 text-xl font-semibold"
          >
            SignUp
          </Link>
        </h1>
        <div className="divider divider-warning text-white">OR</div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleGoogleSignin}
            className="py-2 border-2 border-amber-400 cursor-pointer rounded-[3px]"
          >
            <span className="bg-white p-2.5">
              <FcGoogle className="inline text-2xl" />
            </span>
            <span className="text-white font-semibold bg-blue-600 p-2.5">
              Sign in with Google
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signin;
