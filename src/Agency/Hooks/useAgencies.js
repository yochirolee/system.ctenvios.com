import { useMutation, useQuery, useQueryClient } from "react-query";
import { queryKeys } from "./queryKeys";
import apiServices from "../Api";

export const useFetchAgencies = () => {
	return useQuery([queryKeys.fetchAgencies], () => apiServices.agencies.getAgencies());
};

export const useFetchAgencyById = (id) => {
	return useQuery([queryKeys.fetchAgencyById, id], () => apiServices.agencies.getAgencyById(id));
};

export const useCreateAgency = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (newAgency) => apiServices.agencies.createAgency(newAgency),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchAgencies]);
			setIsOpen(false);
		},
	});
};

export const useUpdateAgency = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (agency) => apiServices.agencies.updateAgency(agency),
		onSuccess: (agency) => {
			queryClient.invalidateQueries([queryKeys.fetchAgencyById, agency.id]);
			setIsOpen(false);
		},
	});
};

export const useDeleteAgency = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => apiServices.agencies.deleteAgency(id),
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.fetchAgencies);
		},
	});
};

export const useFetchEmployeesByAgencyId = (id) => {
	return useQuery(["fetchEmployeesByAgencyId", id], () =>
		apiServices.agencies.getEmployeesByAgencyId(id),
	);
};

export const useFetchAgencyLoggedEmployee = (email) => {
	return useQuery(
		[queryKeys.fetchAgencyLoggedEmployee, email],
		() => apiServices.employees.getEmployeeByEmail(email),
		{
			enabled: !!id,
		},
	);
};

export const useFetchServicesProvidersByAgencyId = (id) => {
	if (!id) throw new Error("id is required");
	return useQuery(
		["fetchServicesProvidersByAgencyId", id],
		() => apiServices.agencies.getServicesProvidersByAgencyId(id),
		{
			enabled: !!id,
		},
	);
};
