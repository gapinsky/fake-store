import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const CategoryItem = ({ children }: Props) => {
  const url = children
    ?.toLocaleString()
    .toLowerCase()
    .replace(" ", "_")
    .replace("'", "");

  return (
    <Link to={`/${url}`}>
      <li className="mb-2 py-1 px-2 rounded-sm border-2 border-transparent hover:border-solid-2 hover:border-2 hover:border-black hover:cursor-pointer">
        {children}
      </li>
    </Link>
  );
};

export default CategoryItem;
