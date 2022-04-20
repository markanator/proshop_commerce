import { useQuery } from "react-query";
import { IProduct } from "../../dummyData/products";
import { getAllProducts, getProductById } from "../v1/productUri";

const ALL_PRODUCTS = "products";
const ONE_PRODUCT = "product";

export const useAllProductsQuery = () => {
  return useQuery<IProduct[], Error>([ALL_PRODUCTS], async () => {
    const { data } = await getAllProducts();
    return data;
  });
};

export const useProductByIdQuery = (productId: string | number) => {
  return useQuery<IProduct, Error>([ONE_PRODUCT, productId], async () => {
    const { data } = await getProductById(productId);
    return data;
  });
};
