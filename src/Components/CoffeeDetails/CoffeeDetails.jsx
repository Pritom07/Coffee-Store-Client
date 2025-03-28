import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photoURL } =
    coffee;
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/Images/more/11.png')",
        backgroundSize: "contain",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="max-w-5xl mx-auto">
        <div className="card card-side bg-[#F4F3F0] shadow-sm">
          <figure>
            <img src={photoURL} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeDetails;
