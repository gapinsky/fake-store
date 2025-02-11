import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const AsideSocials = () => {
  return (
    <div className="inline-flex justify-around text-3xl p-8 ">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className="text-blue-500 border-black border-solid-2 border-2 p-3 rounded-full hover:scale-110 hover:cursor-pointer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="text-pink-600 border-black border-solid-2 border-2 p-3 rounded-full hover:scale-110 hover:cursor-pointer"
      >
        <RiInstagramFill />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        className="text-red-500 border-black border-solid-2 border-2 p-3 rounded-full hover:scale-110 hover:cursor-pointer"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default AsideSocials;
