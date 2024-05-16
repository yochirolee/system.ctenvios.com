import { useMutation, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";

export const useCreateProviderFare = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation((data) => apiServices.providerFares.create(data), {
		onSuccess: () => {
			queryClient.invalidateQueries("getProviders");
			setIsOpen(false);
		},
	});
};
