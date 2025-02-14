import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetchProducts from "../customHooks/useFetchProducts";
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";
import Pagination from "./Pagination";
import Select from "./Select";

export interface Product {
  id: number;
  image: string;
  price: number;
  title: string;
}

interface Props {
  category: string;
}

export interface FetchProductsResult {
  data: Product[];
  isLoading: boolean;
  error: any;
}

const ProductsGrid = ({ category }: Props) => {
  const {
    data: unsortedProducts,
    isLoading,
    error,
  } = useFetchProducts(category) as FetchProductsResult;

  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!isLoading && unsortedProducts) {
      setSortedProducts(unsortedProducts);
    }
  }, [unsortedProducts]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const lastCardId = currentPage * productsPerPage;
  const firstCardId = lastCardId - productsPerPage;
  const productsPage =
    sortedProducts && sortedProducts.slice(firstCardId, lastCardId);
  const pagesLength =
    sortedProducts && Math.ceil(sortedProducts.length / productsPerPage);

  if (error) return <NotFound />;
  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col justify-between min-h-screen max-h-screen w-full overflow-hidden">
      <div className="grid grid-cols-4 grid-flow-row justify-items-center  overflow-hidden">
        <Select
          unsortedProducts={unsortedProducts}
          setSortedProducts={setSortedProducts}
        />
        {productsPage.map((product: Product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        ))}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        pages={pagesLength}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductsGrid;
