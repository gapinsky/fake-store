import Advertise from "./Advertise";
import HomeGrid from "./HomeGrid";
import NewCollection from "./NewCollection";

const Main = () => {
  return (
    <div className=" h-full flex flex-col justify-end">
      <NewCollection />
      <Advertise />
      <HomeGrid />
    </div>
  );
};

export default Main;
