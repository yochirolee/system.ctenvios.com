import { useMutation, useQuery, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useFetchInvoices = () => {
	return useQuery([queryKeys.fetchInvoices], () => apiServices.invoices.getInvoices());
};

export const useCreateInvoice = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (newInvoice) => apiServices.invoices.createInvoice(newInvoice),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchInvoices]);
		},
	});
};

export const usePayInvoice = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (paymentData) => apiServices.invoices.payInvoice(paymentData),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchInvoiceById]);
		},
	});
};

export const useFetchInvoiceById = (agencyId) => {
	return useQuery([queryKeys.fetchInvoiceById, agencyId], () =>
		apiServices.invoices.getInvoiceById(agencyId),
	);
};

export const useFetchInvoicesByAgencyId = (id) => {
	console.log(id, "id");
	return useQuery([queryKeys.fetchInvoicesByAgencyId, id], () =>
		apiServices.invoices.getInvoicesByAgencyId(id),
	);
};

/* 
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
}; */
