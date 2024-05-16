import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useGetStatus } from "../hooks/useGetStatus";
import { Spinner } from "@/Agency/Components/ui/Spinner";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
export function ComboboxStatus({ form }) {
	const [open, setOpen] = useState(false);
	const { data: statuses, error, isLoading } = useGetStatus();

	return (
		<FormField
			control={form.control}
			name="statusId"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>Status</FormLabel>
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
									{field.value && statuses ? (
										statuses?.find((status) => status?.id === field.value)?.name
									) : error ? (
										"Error Loading Status"
									) : isLoading ? (
										<Spinner />
									) : (
										"Select Status"
									)}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search Status..." />
								<CommandEmpty>No Status found.</CommandEmpty>
								<CommandGroup>
									{statuses?.map((status) => (
										<CommandItem
											value={status?.name}
											key={status?.id}
											onSelect={() => {
												form.setValue("statusId", status?.id);
												setOpen(false);
												// close popover
												// Add code here to close the popover
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													status?.id === field?.value ? "opacity-100" : "opacity-0",
												)}
											/>
											{status?.name}
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
}
