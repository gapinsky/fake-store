import { useQuery } from "@tanstack/react-query";

const api_key = "https://fakestoreapi.com/products";

function useFetchProducts(fetchValue: string = "") {
  return useQuery({
    queryKey: ["productsData", fetchValue],
    queryFn: async () => {
      const response = await fetch(`${api_key}${fetchValue}`);
      return await response.json();
    },
  });
}

export default useFetchProducts;
