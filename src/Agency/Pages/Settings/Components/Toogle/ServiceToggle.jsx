import { Switch } from "@headlessui/react";
import apiServices from "../../../../Api/apiServices";
import { useMutation, useQueryClient } from "react-query";

export const ServiceToggle = ({ service }) => {
	if (!service) return;
	const queryClient = useQueryClient();
	const updateServiceMutation = useMutation((service) => apiServices.services.update(service), {
		onSuccess: () => {
			queryClient.invalidateQueries("getProviders");
		},
	});

	const handleActiveOrDisableService = (service) => {
		service.isActive = !service.isActive;
		updateServiceMutation.mutate(service);
	};

	return (
		<div className="py-2">
			<Switch
				checked={service.isActive}
				onChange={() => handleActiveOrDisableService(service)}
				className={`${service.isActive ? "bg-blue-600" : "bg-gray-300"}
          relative inline-flex h-[20px] w-[35px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
			>
				<span className="sr-only">is Active</span>
				<span
					aria-hidden="true"
					className={`${service.isActive ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
				/>
			</Switch>
		</div>
	);
};
