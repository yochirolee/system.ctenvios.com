import { useMutation, useQuery, useQueryClient } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useFetchPaymentMethods = () => {
	return useQuery(["getPaymentMethods"], () => apiServices.paymentMethods.getPaymentMethods());
};
