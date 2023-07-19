import { useQuery } from "react-query";
import apiServices from "../Api/apiServices";

export const useFetchProductsCategories =  () => {
	return useQuery("fetchProductsCategories", () =>
		apiServices.productsCategories.getProductsCategories(),
	);
};
