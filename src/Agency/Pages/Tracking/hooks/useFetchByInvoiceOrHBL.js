import { useQuery } from "react-query";
import apiTracking from "@/Agency/Api/apiTracking";

const getInvoiceById = async (id) => {
	const data = await apiTracking.parcels.getByInvoiceId(id);
	return data;
};

const getProductByHBL = async (id) => {
	const data = await apiTracking.parcels.getByHbl(id);
	return data;
};

export const useFetchByInvoiceOrHBL = (id) => {
	if (id && id.length > 7) {
		return useQuery(["fetchProductByHbl", id], () => getProductByHBL(id), {
			enabled: Boolean(id),
		});
	} else {
		return useQuery(["fetchInvoiceById", id], () => getInvoiceById(id), {
			enabled: Boolean(id),
		});
	}
};
