import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-5xl">
      Page Not Found
      <Link
        to="/"
        className="bg-blue-500 px-4 py-2 text-white text-2xl mt-5 rounded-lg"
      >
        Take me back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
