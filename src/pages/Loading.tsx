import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl mb-3" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
