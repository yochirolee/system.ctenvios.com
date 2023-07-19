import { useMutation, useQuery, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useFetchServicesPrices = () => {
	return useQuery([queryKeys.fetchServicesPrices], () =>
		apiServices.servicesPrices.getServicesPrices(),
	);
};

export const useFetchServicesPricesByAgencyId = (id) => {
	return useQuery([queryKeys.fetchServicesPricesByAgencyId, id], () =>
		apiServices.servicesPrices.getServicesPricesByAgencyId(id),
	);
};
