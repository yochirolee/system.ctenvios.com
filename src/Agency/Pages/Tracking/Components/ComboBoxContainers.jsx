import * as React from "react";
import { useQuery } from "react-query";
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
import apiTracking from "@/Agency/Api/apiTracking";



export function ComboBoxContainers({ value, setValue }) {
	const [open, setOpen] = React.useState(false);
	const { data: containers, isLoading } = useQuery("containers", () => apiTracking.containers.get());

	if (isLoading)
		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[300px] justify-between animate-pulse"
					>
						Loading...
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
			</Popover>
		);
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[300px] justify-between"
				>
					{value
						? containers.find((container) => container.containerId == value)?.containerNumber +
						  " - " +
						  value
						: "Select Container..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0">
				<Command>
					<CommandInput placeholder="Search Container..." />
					<CommandEmpty>No Container found.</CommandEmpty>
					<CommandGroup className="h-[500px] overflow-y-auto">
						{containers?.map((container) => (
							<CommandItem
								key={container?.containerId}
								value={container?.containerId}
								onSelect={() => {
									setValue(container.containerId);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === container.containerId ? "opacity-100" : "opacity-0",
									)}
								/>
								{container.containerNumber + " - " + container.containerId}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
