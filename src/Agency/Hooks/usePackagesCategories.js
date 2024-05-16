import { useQuery } from "react-query";
import apiServices from "../Api/apiServices";

export const useFetchCategories = () => {
	return useQuery("fetchCategories", () => apiServices.packagesCategories.getPackagesCategories());
};
