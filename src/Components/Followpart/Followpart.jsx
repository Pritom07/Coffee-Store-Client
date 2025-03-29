import "./Followpart.css";

const Followpart = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-2 heightmaintain">
      <div className="flex flex-col justify-center items-center leading-16">
        <h1 className="font-railway text-xl text-[#1B1A1A]">Follow Us Now</h1>
        <h1 className="font-rancho text-[55px] text-[#331A15] text-center">
          Follow on Instagram
        </h1>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 md:mt-6">
        <img src="/Images/cups/Rectangle 9.png" />
        <img src="/Images/cups/Rectangle 10.png" />
        <img src="/Images/cups/Rectangle 11.png" />
        <img src="/Images/cups/Rectangle 12.png" />
        <img src="/Images/cups/Rectangle 13.png" />
        <img src="/Images/cups/Rectangle 14.png" />
        <img src="/Images/cups/Rectangle 15.png" />
        <img src="/Images/cups/Rectangle 16.png" />
      </section>
    </div>
  );
};

export default Followpart;
