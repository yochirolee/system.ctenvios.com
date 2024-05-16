import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
	Form,
} from "@/components/ui/form";

import { ComboboxStatus } from "./ComboBoxStatus";
import { ComboBoxLocations } from "./ComboBoxLocations";
import { DatePicker } from "./DatePicker";
import { trackingHooks } from "../hooks/useTracking";

const formSchema = z.object({
	locationId: z.number({
		message: "Location is required",
	}),
	statusId: z.number({
		message: "Status is required",
	}),
	updatedAt: z.date(
		{
			message: "Date is required",
		},
		{
			validate: (date) => date > new Date("1900-01-01") && date < new Date(),
		},
	),
});

export function FormUpdateContainer({ selectedContainerId, setIsOpen }) {
	const form = useForm({
		resolver: zodResolver(formSchema),
	});

	const changeLocationMutation = trackingHooks.useParcelsToCustoms(setIsOpen);

	const onSubmit = async (data) => {
		data.containerId = selectedContainerId;
		changeLocationMutation.mutate(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<DatePicker form={form} />
				<ComboBoxLocations form={form} />
				<ComboboxStatus form={form} />
				<Button type="submit">{changeLocationMutation.isLoading ? "Updating..." : "Update"}</Button>
			</form>
		</Form>
	);
}
