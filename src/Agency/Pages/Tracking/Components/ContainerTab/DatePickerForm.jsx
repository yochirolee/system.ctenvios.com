import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { trackingHooks } from "../../hooks/useTracking";
import { AlertDestructive } from "../Alert";
import { useState } from "react";

const FormSchema = z.object({
	updatedAt: z.date({
		required_error: "A date is required.",
	}),
});

export function DatePickerForm({ selectedContainerId }) {
	const form = useForm({
		resolver: zodResolver(FormSchema),
	});

	const [isOpen, setIsOpen] = useState(false);

	const changeLocationMutation = trackingHooks.useParcelsToPort();

	const onSubmit = async (data) => {
		data.containerId = selectedContainerId;
		data.locationId = 4;
		data.statusId=2;
		
		console.log(data, "data form");
		changeLocationMutation.mutate(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="updatedAt"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-[240px] pl-3 text-left font-normal",
												!field.value && "text-muted-foreground",
											)}
										>
											{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				{changeLocationMutation.isError && (
					<AlertDestructive
						title={"Opps...."}
						message={
							changeLocationMutation?.error?.message
								? changeLocationMutation?.error?.message
								: "Something went wrong"
						}
					/>
				)}
				<Button type="submit">
					{changeLocationMutation.isLoading ? (
						<>
							<EllipsisHorizontalIcon className="animate-pulse mx-auto h-5 w-5 mr-2 text-white " />
							<p>Updating Tracking please wait</p>
						</>
					) : (
						"Agregar al Puerto del Mariel"
					)}
				</Button>
			</form>
		</Form>
	);
}
