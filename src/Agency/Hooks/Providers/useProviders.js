import { useMutation, useQuery, useQueryClient } from "react-query";
import apiServices from "../../Api";

export const useFetchProviders = () => {
	return useQuery(["getProviders"], () => apiServices.providers.get());
};

export const useCreateProvider = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation((data) => apiServices.providers.create(data), {
		onSuccess: () => {
			queryClient.invalidateQueries("getProviders");
            setIsOpen(false)
		},
	});
};
