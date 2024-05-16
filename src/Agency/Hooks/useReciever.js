import { useEffect, useReducer, useState } from "react";
import apiServices from "../Api/apiServices";
import { useDebounce } from "./useDebounce";

export const useSearchReciever = (query, customer) => {
	const [recievers, setRecievers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const searchQuery = useDebounce(query, 1000);

	useEffect(() => {
		const searchRecievers = async () => {
			setIsLoading(true);
			const data = await apiServices.recievers.findReciever(searchQuery);
			setRecievers(data);
			setIsLoading(false);
		};
		if (searchQuery !== "" && searchQuery?.length > 3) {
			searchRecievers();
		} else {
			setRecievers(customer?.recievers);
		}
	}, [searchQuery, customer?.id]);

	return { recievers, isLoading };
};
