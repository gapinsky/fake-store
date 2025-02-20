import { Link } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  price: number;
  id: number;
}

const CarouselCard = ({ img, title, price, id }: Props) => {
  return (
    <Link to={`/${id}`}>
      <div className="w-[200px] aspect-square hover:cursor-pointer hover:scale-105">
        <img src={img} alt={title} className="aspect-square" />
        <p className="p-1 text-lg text-center font-semibold">
          Super Deal: {price}$
        </p>
      </div>
    </Link>
  );
};

export default CarouselCard;
