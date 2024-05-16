import apiTracking from "@/Agency/Api/apiTracking";
import { useQuery } from "react-query";

export const useLocations = () => {
	return useQuery({
		queryKey: "fetchLocations",
		queryFn: () => apiTracking.locations.get(),
	});
};
