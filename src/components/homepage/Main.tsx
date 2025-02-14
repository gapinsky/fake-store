import Advertise from "./Advertise";
import MainCarousel from "./MainCarousel";
import NewCollection from "./NewCollection";

const Main = () => {
  return (
    <div className=" h-full flex flex-col justify-end">
      <NewCollection />
      <Advertise />
      <MainCarousel />
    </div>
  );
};

export default Main;
