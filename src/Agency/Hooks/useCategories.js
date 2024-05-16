import { useMutation, useQuery, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";

export const useFetchCategories = () => {
	return useQuery(["getCategories"], () => apiServices.categories.get());
};

export const useCreateCategory = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation((data) => apiServices.categories.create(data), {
		onSuccess: () => {
			queryClient.invalidateQueries("getCategories");
			setIsOpen(false);
		},
	});
};

export const useFetchServicesCategoriesByServiceId = (id) => {
	return useQuery(
		["servicesCategoriesPricesByServiceId", id],
		() => apiServices.serviceCategories.getServicesCategoriesByServiceId(id),
		{ enabled: !!id },
	);
};
