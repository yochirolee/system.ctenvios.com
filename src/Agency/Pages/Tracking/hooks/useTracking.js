import apiTracking from "@/Agency/Api/apiTracking";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const trackingHooks = {
	useParcelsToCustoms: () => {
		const queryClient = useQueryClient();
		return useMutation({
			mutationFn: (data) => apiTracking.parcels.moveByContainerId(data),
			onSuccess: () => {
				queryClient.invalidateQueries("fetchPackagesInContainer");
				toast({
					title: "Scheduled: Catch up",
					description: "Friday, February 10, 2023 at 5:57 PM",
				});
			},
		});
	},

	useParcelsToPort: () => {
		const queryClient = useQueryClient();
		return useMutation({
			mutationFn: (data) => apiTracking.parcels.moveByContainerId(data),
			onSuccess: () => {
				queryClient.invalidateQueries("fetchPackagesInContainer");
				toast({
					title: "Contenedor Agregado al Mariel el ",
					description: data.updatedAt,
				});
			},
		});
	},

	useFetchContainerById: (selectedContainerId) => {
		return useQuery({
			queryKey: ["fetchPackagesInContainer", selectedContainerId],
			queryFn: () => apiTracking.parcels.getByContainerId(selectedContainerId),
			enabled: !!selectedContainerId,
		});
	},
	useFetchTrackingPackagesProblems: () => {
		return useQuery({
			queryKey: "fetchTrackingPackagesProblems",
			queryFn: apiTracking.tracking.getPackagesWithProblems,
		});
	},
	useCreateEventNote: () => {
		const queryClient = useQueryClient();
		return useMutation({
			mutationFn: (data) => apiTracking.notes.create(data),

			onSuccess: () => {
				queryClient.invalidateQueries("fetchEventByHbl");
				toast({
					title: "Note Created",
					description: { Date: data.createdAt, Comment: data.comment },
				});
			},
		});
	},
};
