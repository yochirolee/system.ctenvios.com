import { useEffect, useState } from "react";
import apiServices from "../Api/apiServices";
import { useDebounce } from "./useDebounce";

export const useSearchCustomer = (query) => {
	const [customers, setCustomers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const searchQuery = useDebounce(query, 1000);

	console.log(searchQuery, "searchQuery");

	useEffect(() => {
		setCustomers([]);
		const searchCustomers = async () => {
			setIsLoading(true);
			const data =
				searchQuery !== "" && searchQuery?.length > 3
					? await apiServices.customers.findCustomer(searchQuery)
					: await apiServices.customers.getCustomers();
			setCustomers(data);
			setIsLoading(false);
		};

		searchCustomers();
	}, [searchQuery]);

	return { customers, isLoading };
};
