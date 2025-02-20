import { NavLink } from "react-router-dom";

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
    <NavLink
      to={`/${url}`}
      className={({ isActive }) => (isActive ? " text-5xl" : "")}
    >
      <li className="mb-2 py-1 px-2 hover:cursor-pointer ">{children}</li>
    </NavLink>
  );
};

export default CategoryItem;
