import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto px-1">
      <img src="/Images/more/logo1.png" className="w-20 pt-1" />
      <section className="grid grid-cols-12 mt-2.5">
        <div className="col-span-12 xl:col-span-7 px-1">
          <h1 className="font-rancho text-5xl">Coffee Store</h1>
          <h1 className="font-railway text-xl mt-2.5">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </h1>
          <section className="flex items-center mt-4">
            <div className="text-4xl text-[#331A15]">
              <FaFacebook />
            </div>
            <div className="text-4xl text-[#331A15] ml-6">
              <FaTwitter />
            </div>
            <div className="text-4xl text-[#331A15] ml-6">
              <BsInstagram />
            </div>
            <div className="text-4xl text-[#331A15] ml-6">
              <BsLinkedin />
            </div>
          </section>
          <section className="mt-5">
            <h1 className="font-rancho text-5xl">Get in Touch</h1>
            <h1 className="font-railway text-xl mt-3">
              <BsFillTelephoneFill className="inline mr-3.5" />
              +88 01838 589 589
            </h1>
            <h1 className="font-railway text-xl mt-2">
              <FaEnvelope className="inline mr-3.5" />
              Information@gmail.com
            </h1>
            <h1 className="font-railway text-xl mt-2">
              <FaLocationDot className="inline mr-3.5" />
              15, Nowab Siraj-ud-dowla road, Chattogram
            </h1>
          </section>
        </div>
        <div className="col-span-12 xl:col-span-5 px-1 mt-7 xl:mt-0">
          <h1 className="font-rancho text-5xl">Contact With Us</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="bg-base-300 w-full p-2 mt-5 focus:outline-none focus:ring-2 focus:ring-[#E3B577] rounded-[4px]"
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="bg-base-300 w-full p-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#E3B577] rounded-[4px]"
            />
            <br />
            <input
              type="text"
              placeholder="Message"
              className="bg-base-300 w-full p-2 mt-3 h-14 focus:outline-none focus:ring-2 focus:ring-[#E3B577] rounded-[4px]"
            />
            <br />
            <button className="text-[#331A15] font-rancho text-2xl border-2 border-[#331A15] px-3 py-2 rounded-3xl mt-6 cursor-pointer hover:scale-x-95 mb-5 xl:mb-0">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
