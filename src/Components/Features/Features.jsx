const Features = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-2.5 md:px-2">
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <div>
          <img src="Images/icons/1.png" className="w-14" />
          <div className="mt-1.5">
            <h1 className="font-rancho text-3xl">Awesome Aroma</h1>
            <p className="font-railway text-[16px] mt-1 text-justify font-medium leading-5 md:leading-6">
              You will definitely be a fan of the design & aroma of your coffee.
            </p>
          </div>
        </div>
        <div>
          <img src="Images/icons/2.png" className="w-14" />
          <div className="mt-1.5">
            <h1 className="font-rancho text-3xl">High Quality</h1>
            <p className="font-railway text-[16px] mt-1 text-justify font-medium leading-5 md:leading-6">
              We served the coffee to you maintaining the best quality.
            </p>
          </div>
        </div>
        <div>
          <img src="Images/icons/3.png" className="w-14" />
          <div className="mt-1.5">
            <h1 className="font-rancho text-3xl">Pure Grades</h1>
            <p className="font-railway text-[16px] mt-1 text-justify font-medium leading-5 md:leading-6">
              The coffee is made of the green coffee beans which you will love.
            </p>
          </div>
        </div>
        <div>
          <img src="Images/icons/4.png" className="w-14" />
          <div className="mt-1.5">
            <h1 className="font-rancho text-3xl">Proper Roasting</h1>
            <p className="font-railway text-[16px] mt-1 text-justify font-medium leading-5 md:leading-6">
              Your coffee is brewed by first roasting the green coffee beans.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
