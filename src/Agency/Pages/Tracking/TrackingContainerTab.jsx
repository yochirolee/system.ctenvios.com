import { React, useState } from "react";
import { DataTable } from "./Components/Table/data-table";
import { columns } from "./Components/Table/columns";
import { ComboBoxContainers } from "./Components/ComboBoxContainers";
import { Spinner } from "@/Agency/Components/ui/Spinner";
import { Button } from "@/components/ui/button";
import { File, ListFilter } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DialogUpdate } from "./Components/DialogUpdate";
import { DialogExcelUpdate } from "./Components/DialogExcelUpdate";
import { AlertDestructive } from "./Components/Alert";
import { DatePickerForm } from "./Components/ContainerTab/DatePickerForm";
import { trackingHooks } from "./hooks/useTracking";
import { TrackingStats } from "./Components/TrackingStats";
import { ExportToExcelButton } from "./Components/ContainerTab/ExportToExcelButton";
import { DonutChartParcelsTypes } from "./Components/ContainerTab/DonutChartParcelsTypes";

export const TrackingContainerTab = () => {
	const [selectedContainerId, setSelectedContainerId] = useState(null);
	const {
		data: container,
		isLoading: isLoadingContainer,
		isError,
	} = trackingHooks.useFetchContainerById(selectedContainerId);

	return (
		<div>
			<div className="flex flex-col md:flex-row justify-between items-center bg-muted/20 p-4 rounded-md">
				<ComboBoxContainers value={selectedContainerId} setValue={setSelectedContainerId} />

				<div>
					<DialogExcelUpdate />
					<DialogUpdate selectedContainerId={selectedContainerId} />
				</div>
			</div>
			{isLoadingContainer ? (
				<div className="flex items-center gap-2 py-4 justify-center">
					<Spinner />
					<p>Loading...</p>
				</div>
			) : (
				<div className="mt-4">
					{container?.data?.length > 0 ? (
						<div className="py-2 lg:p-4  ">
							{container.inPort ? (
								<TrackingStats container={container?.data} />
							) : (
								<div className="flex flex-1 my-4 py-4 bg-muted/40  items-center justify-center rounded-lg border border-dashed shadow-sm">
									<div className="flex flex-col items-center gap-1 text-center p-4">
										<h3 className="text-2xl font-bold tracking-tight">
											El Contenedor seleccionado debe estar en transito al Mariel
										</h3>
										<p className="text-sm text-muted-foreground">
											El Contenedor seleccionado no ha arribado al Mariel o no se tiene informacion
											actualizada
										</p>
										<div className="mt-4">
											<DatePickerForm selectedContainerId={selectedContainerId} />
										</div>
									</div>
								</div>
							)}
							<div className="grid grid-cols-12 gap-2 grid-flow-col">
								<div className="col-span-12 ">
									<div className=" flex justify-between py-2">
										<div className="ml-auto flex items-center gap-2">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="outline" size="sm" className="h-8 gap-1">
														<ListFilter className="h-3.5 w-3.5" />
														<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
															Filter
														</span>
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuLabel>Filter by</DropdownMenuLabel>
													<DropdownMenuSeparator />
													<DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
													<DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
													<DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
												</DropdownMenuContent>
											</DropdownMenu>
											<ExportToExcelButton data={container.data} fileName={"test"} />
										</div>
									</div>

									<DataTable columns={columns} data={container.data} />
								</div>
								
							</div><div className="col-span-2">
									<DonutChartParcelsTypes/>
								</div>
							{/* <div>
									<EventDetails currentEvent={"CTE230624123854"} />
								</div> */}
						</div>
					) : (
						<>
							{isError ? (
								<AlertDestructive
									title="Error"
									message="An error occurred while fetching the data"
								/>
							) : (
								<div className="flex items-center gap-2 py-2 justify-center">
									{!!container?.inPort ? (
										<div className="flex flex-1 h-96 bg-muted/40  items-center justify-center rounded-lg border border-dashed shadow-sm">
											<div className="flex flex-col items-center gap-1 text-center p-4">
												<h3 className="text-2xl font-bold tracking-tight">
													No tracking information available
												</h3>
												<p className="text-sm text-muted-foreground">
													El Contenedor seleccionado no ha arribado al Mariel o no se tiene
													informacion actualizada
												</p>
												<div className="mt-4">
													<DatePickerForm selectedContainerId={selectedContainerId} />
												</div>
											</div>
										</div>
									) : (
										<div className="relative flex flex-1 h-96  items-center justify-center rounded-lg border border-dashed shadow-sm">
											<div className="flex flex-col items-center gap-1 text-center p-4">
												<h3 className="text-2xl font-bold tracking-tight">
													No tracking information available
												</h3>
												<p>Select a container to view tracking information</p>
											</div>
										</div>
									)}
								</div>
							)}
						</>
					)}
				</div>
			)}
		</div>
	);
};
