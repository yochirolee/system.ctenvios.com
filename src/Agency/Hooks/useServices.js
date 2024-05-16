import { useMutation, useQuery, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useFetchServices = () => {
	return useQuery(["getServices"], () => apiServices.services.get());
};

export const useFetchServicesByAgencyId = (id) => {
	return useQuery(
		[queryKeys.fetchServicesByAgencyId, id],
		() => apiServices.services.getByAgencyId(id),
		{ enabled: !!id },
	);
};
export const useFetchServicesByProviderId = (id) => {
	return useQuery(
		[queryKeys.fetchServicesByProviderId, id],
		() => apiServices.services.getServicesByProviderId(id),
		{ enabled: !!id },
	);
};

export const useCreateService = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (newService) => apiServices.services.create(newService),
		onSuccess: () => {
			queryClient.invalidateQueries(["getProviders"]);
			setIsOpen(false);
		},
	});
};

export const useUpdateService = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (service) => apiServices.services.updateService(service),
		onSuccess: () => {
			queryClient.invalidateQueries(["getProviders"]);
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
