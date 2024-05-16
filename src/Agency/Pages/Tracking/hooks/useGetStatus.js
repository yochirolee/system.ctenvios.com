import apiTracking from "@/Agency/Api/apiTracking";
import { useQuery } from "react-query";

export const useGetStatus = () => {
	return useQuery({
		queryKey: "fetchStatus",
		queryFn: () => apiTracking.status.get(),
	});
};
