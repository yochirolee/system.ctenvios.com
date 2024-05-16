import { React, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { cn } from "../../../../lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useLocations } from "../hooks/useLocations";
import { Spinner } from "@/Agency/Components/ui/Spinner";

export const ComboBoxLocations = ({ form }) => {
	const { data: locations, error, isLoading } = useLocations();
	const [open, setOpen] = useState(false);

	

	return (
		<FormField
			control={form.control}
			name="locationId"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Locations</FormLabel>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									role="combobox"
									className={cn(
										"w-[200px] justify-between",
										!field.name && "text-muted-foreground",
									)}
								>
									{field.value && locations ? (
										locations?.find((location) => location?.id === field.value)?.name
									) : error ? (
										"Error Loading Locations"
									) : isLoading ? (
										<Spinner />
									) : (
										"Select Location"
									)}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search Location..." />
								<CommandEmpty>No Location found.</CommandEmpty>
								<CommandGroup>
									{locations?.map((location) => (
										<CommandItem
											value={location?.name}
											key={location?.id}
											onSelect={() => {
												form.setValue("locationId", location?.id);
												setOpen(false);
												// close popover
												// Add code here to close the popover
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													location?.id === field?.value ? "opacity-100" : "opacity-0",
												)}
											/>
											{location?.name}
										</CommandItem>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
