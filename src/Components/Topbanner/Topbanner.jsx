const Topbanner = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="hero min-h-screen px-4 md:px-8 flex items-center justify-center"
        style={{
          backgroundImage: "url('/Images/more/3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content xs:text-center sm:text-center md:text-left">
          <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mr-7">
            <h1 className="mb-3 sm:mb-5 text-lg xs:text-xl sm:text-3xl md:text-5xl font-bold font-rancho leading-tight whitespace-nowrap">
              Would you like a cup of delicious coffee?
            </h1>
            <p className="mb-3 sm:mb-5 font-railway text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back! Your companion of every moment! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn sm:w-auto font-normal font-rancho text-base xs:text-lg sm:text-xl md:text-2xl bg-[#E3B577] text-[#242222] hover:text-white hover:bg-black px-6 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
