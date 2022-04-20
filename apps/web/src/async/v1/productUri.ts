import axios from "../../axios";

export const getAllProducts = async () => {
  return axios.get(`/products`);
};

export const getProductById = async (productId: string | number) => {
  return axios.get(`/products/${productId}`);
};
