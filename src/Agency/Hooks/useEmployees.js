import { useMutation, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useCreateEmployee = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (employee) => apiServices.employees.createEmployee(employee),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchEmployeesByAgencyId]);
			setIsOpen(false);
		},
	});
};

export const useUpdateEmployee = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (employee) => apiServices.employees.updateEmployee(employee),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchEmployeesByAgencyId]);
			setIsOpen(false);
		},
	});
};

export const useDeleteEmployee = (setIsOpen) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => apiServices.employees.deleteEmployee(id),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchEmployeesByAgencyId]);
			setIsOpen(false);
		},
	});
};
