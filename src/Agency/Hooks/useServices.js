import { useMutation, useQuery, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useFetchServices = () => {
	return useQuery([queryKeys.fetchServices], () => apiServices.services.getServices());
};

export const useFetchServicesByAgencyId = (id) => {
	return useQuery(
		[queryKeys.fetchServicesByAgencyId, id],
		() => apiServices.services.getServicesByAgencyId(id),
		{ enabled: !!id },
	);
};

export const useCreateService = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (newService) => apiServices.services.createService(newService),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchServicesProviders]);
			setIsOpen(false);
		},
	});
};

export const useUpdateService = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (service) => apiServices.services.updateService(service),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchServicesProviders]);
			setIsOpen(false);
		},
	});
};

export const useDeleteService = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => apiServices.services.deleteService(id),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchServicesProviders]);
		},
	});
};
