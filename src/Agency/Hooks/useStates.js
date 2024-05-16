import { useQuery } from "react-query";
import apiServices from "../Api/apiServices";
import { queryKeys } from "./queryKeys";

export const useFetchStates = () => {
	return useQuery([queryKeys.fetchStates], () => apiServices.states.getStates());
};
