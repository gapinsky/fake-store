import { useEffect } from "react";
import Advertise from "./Advertise";
import MainCarousel from "./MainCarousel";
import NewCollection from "./NewCollection";

const Main = () => {
  useEffect(() => {
    const hasSeen = localStorage.getItem("seenAlert");
    if (!hasSeen) {
      window.alert(
        "Building this project I was havily focused on things around React so its not responsive."
      );
      localStorage.setItem("seenAlert", "true");
    }
  }, []);
  return (
    <div className=" h-full flex flex-col justify-end">
      <Advertise />
      <NewCollection />
      <MainCarousel />
    </div>
  );
};

export default Main;
