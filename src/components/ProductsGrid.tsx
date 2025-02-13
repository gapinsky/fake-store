import ProductCard from "../components/ProductCard";
import useFetchProducts from "../customHooks/useFetchProducts";
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: { count: number; rate: number };
}

interface Props {
  category: string;
}

const ProductsGrid = ({ category }: Props) => {
  const { data: products, isLoading, error } = useFetchProducts(category);

  if (error) return <NotFound />;
  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-4 grid-flow-row justify-items-center  overflow-hidden">
      {products.map((product: Product) => (
        <ProductCard
          title={product.title}
          price={product.price}
          image={product.image}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
