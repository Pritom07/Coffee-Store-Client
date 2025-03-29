import { useLoaderData } from "react-router-dom";
import Allcoffees from "../Allcoffees/Allcoffees";
import Features from "../Features/Features";
import Topbanner from "../Topbanner/Topbanner";
import Followpart from "../Followpart/Followpart";

const Home = () => {
  const coffeesCollection = useLoaderData();
  return (
    <div>
      <Topbanner />
      <div className="bg-[#ECEAE3]">
        <Features />
      </div>
      <div>
        <Allcoffees coffeesCollection={coffeesCollection} />
      </div>
      <Followpart />
    </div>
  );
};

export default Home;
