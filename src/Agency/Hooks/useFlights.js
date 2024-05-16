import { useMutation, useQuery, useQueryClient } from "react-query";
import { queryKeys } from "./queryKeys";
import apiServices from "../Api/apiServices";

export const useFetchAllFlights = () => {
	return useQuery("fetchFlights", () => apiServices.flights.getFlights());
};

export const useFetchFlightById = (id) => {
	return useQuery({
		queryKey: ["fetchFlightById", id],
		queryFn: () => apiServices.flights.getFlightById(id),
		enabled: !!id,
	});
};
/*

export const useCreateAgency = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (newAgency) => apiServices.agencies.createAgency(newAgency),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchAgencies]);
			setIsOpen(false);
		},
	});
}; */
