interface Props {
  img: string;
  title: string;
  price: number;
}

const CarouselCard = ({ img, title, price }: Props) => {
  return (
    <div className="w-[200px] aspect-square hover:cursor-pointer hover:scale-105">
      <img src={img} alt={title} className="aspect-square" />
      <p className="p-1 text-lg text-center font-semibold">
        Super Deal: {price}$
      </p>
    </div>
  );
};

export default CarouselCard;
