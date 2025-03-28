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
      <section className="max-w-5xl mx-auto flex justify-center items-center min-h-screen px-2">
        <div className="card card-side bg-[#F4F3F0] shadow-sm flex flex-col md:flex-row justify-between items-center">
          <figure>
            <img src={photoURL} className=" w-ful md:w-[450px]" />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-[#331A15] font-rancho text-4xl">
              Niceties
            </h1>
            <h1 className="font-railway font-semibold text-xl">
              Name : <span className="font-medium text-[#5C5B5B]">{name}</span>
            </h1>
            <h1 className="font-railway font-semibold text-xl">
              Chef : <span className="font-medium text-[#5C5B5B]">{chef}</span>
            </h1>
            <h1 className="font-railway font-semibold text-xl">
              Supplier :{" "}
              <span className="font-medium text-[#5C5B5B]">{supplier}</span>
            </h1>
            <h1 className="font-railway font-semibold text-xl">
              Taste :{" "}
              <span className="font-medium text-[#5C5B5B]">{taste}</span>
            </h1>
            <h1 className="font-railway font-semibold text-xl">
              Category :{" "}
              <span className="font-medium text-[#5C5B5B]">{category}</span>
            </h1>
            <h1 className="font-railway font-semibold text-xl">
              Details :{" "}
              <span className="font-medium text-[#5C5B5B]">{details}</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeDetails;
