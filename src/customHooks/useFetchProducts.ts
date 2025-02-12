import { useQuery } from "@tanstack/react-query";

const api_key = "https://fakestoreapi.com/products";
// const {
//   data: Products,
//   isLoading,
//   error,
// } = useQuery({
//   queryKey: ["productsData"],
//   queryFn: async () => {
//     const response = await fetch(api_key);
//     return await response.json();
//   },
// });


function useFetchProducts(){
    return useQuery({
        queryKey: ["productsData"],
        queryFn: async () => {
          const response = await fetch(`${api_key}`);
          return await response.json();
        },
      });
}

export default useFetchProducts;