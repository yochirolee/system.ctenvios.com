import { useQuery } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useFetchServicesProviders = () => {
	return useQuery([queryKeys.fetchServicesProviders], () =>
		apiServices.servicesProviders.getServicesProviders(),
	);
};
