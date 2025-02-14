import { Product } from "./ProductsGrid";

interface Props {
  unsortedProducts: Product[];
  setSortedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const Select = ({ unsortedProducts, setSortedProducts }: Props) => {
  const handleSort = (order: string) => {
    let dataSorted = [...unsortedProducts];
    switch (order) {
      case "ascending":
        dataSorted.sort(
          (firstProduct, secondProduct) =>
            firstProduct.price - secondProduct.price
        );
        setSortedProducts(dataSorted);
        break;
      case "descending":
        dataSorted.sort(
          (firstProduct, secondProduct) =>
            secondProduct.price - firstProduct.price
        );
        setSortedProducts(dataSorted);
        break;
      case "alphabet":
        dataSorted.sort((firstProduct, secondProduct) => {
          if (
            firstProduct.title.toLowerCase() < secondProduct.title.toLowerCase()
          )
            return -1;
          if (
            firstProduct.title.toLowerCase() > secondProduct.title.toLowerCase()
          )
            return 1;
          return 0;
        });
        setSortedProducts(dataSorted);
        break;
    }
  };

  return (
    <p className="col-span-4 place-self-start ml-12 mt-5">
      <select
        className="p-1 border-solid-black border-2 rounded-lg font-semibold hover:cursor-pointer"
        onChange={(e) => handleSort(e.target.value)}
        defaultValue={"default"}
      >
        <option value="default" disabled>
          Sorting options
        </option>
        <option value="ascending">Price ascending</option>
        <option value="descending">Price descending</option>
        <option value="alphabet">A-Z</option>
      </select>
    </p>
  );
};

export default Select;
