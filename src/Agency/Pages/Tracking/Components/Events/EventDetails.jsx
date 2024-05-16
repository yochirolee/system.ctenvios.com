import { React, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Copy,
	CreditCard,
	MessageCircleIcon,
	MoreVertical,
	Truck,
} from "lucide-react";
import { useQuery } from "react-query";
import apiTracking from "@/Agency/Api/apiTracking";
import { getIcon } from "../../../../../Utils/getIcon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EventSheet } from "./EventSheet";
import { formatDate, formatDateWithHours } from "@/Utils/formatDate";
import { NoEventDetails } from "./noEventDetails";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const useFetchEventByHBL = (hbl) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["fetchEventByHbl", hbl],
		queryFn: () => apiTracking.events.getByHbl(hbl),
		enabled: !!hbl,
	});
	return { data, isLoading, isError };
};

export const EventDetails = ({ hbl }) => {
	if (!hbl) return null;
	const { data: parcel, isLoading, isError } = useFetchEventByHBL(hbl);
	if (isError) return <div>Error...</div>;

	return parcel || isLoading ? (
		<Card className="overflow-hidden">
			<CardHeader className="flex flex-row items-start bg-muted/50">
				<div className="grid gap-0.5">
					<CardTitle className="group flex flex-col items-center gap-2 text-lg">
						{isLoading ? <span>Loading...</span> : parcel?.hbl}
					</CardTitle>
				</div>
				{/* 	<div className="ml-auto flex items-center gap-1">
					{packages.length > 1 && (
						<Pagination className="ml-auto mr-0 w-auto">
							<PaginationContent>
								<PaginationItem>
									<Button
										onClick={() => decrementIndex()}
										size="icon"
										variant="outline"
										className="h-6 w-6"
									>
										<ChevronLeft className="h-3.5 w-3.5" />
										<span className="sr-only">Previous Order</span>
									</Button>
								</PaginationItem>
								<PaginationItem>
									<Button
										onClick={() => incrementIndex()}
										size="icon"
										variant="outline"
										className="h-6 w-6"
									>
										<ChevronRight className="h-3.5 w-3.5" />
										<span className="sr-only">Next Order</span>
									</Button>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					)}
				</div> */}
			</CardHeader>
			<CardContent className="p-6 text-sm">
				<ScrollArea className="h-[750px] py-4 px-4  ">
					<div className="grid gap-3">
						{parcel?.events?.map((event, index) => (
							<div key={index} className="grid items-center gap-2">
								<div className="flex flex-col  items-center gap-2 ">
									<div className="flex  justify-between items-center border border-gray-200 rounded-lg py-2 px-4 w-full ">
										<div className="flex space-x-4 items-center ">
											{getIcon(event?.locationId)}
											<div className="grid gap-1.5">
												<div className="flex gap-2">
													<div className="text-sm font-medium">{event?.location?.name}</div>
													<div className="text-[10px] text-gray-500 dark:text-gray-400">
														{event?.status}
													</div>
												</div>
												<div className="text-gray-500 text-xs dark:text-gray-400">
													{formatDate(event?.createdAt)}
												</div>
											</div>
										</div>
										<div className="space-x-2">
											<EventSheet event={event} hbl={hbl} />
											<Button size="icon" variant="ghost" className="h-6 w-6">
												<ChevronDown className="size-4" />
												<span className="sr-only">Add Comment</span>
											</Button>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-2  border-l border-blue-500/60 mx-4 p-4">
									{event?.notes?.map((note, i) => (
										<div key={i} className="flex items-start my-2 gap-4">
											<Avatar>
												<AvatarImage alt="Jared Palmer" src="/placeholder-avatar.jpg" />
												<AvatarFallback>YL</AvatarFallback>
											</Avatar>
											<div className="space-y-2">
												<div className="flex items-center gap-2">
													<div className="font-medium">Yochiro Lee</div>
													<div className="text-xs text-gray-500 dark:text-gray-400">
														{note?.updatedAt ? formatDateWithHours(note?.updatedAt) : ""}
													</div>
												</div>

												<div className="rounded-lg border bg-white space-y-3 p-3 shadow-sm dark:border-gray-800 dark:bg-gray-950">
													{note.imageUrl && (
														<img
															src={note.imageUrl}
															alt="Note Image"
															className="rounded-lg max-w-48 max-h-48"
														/>
													)}
													<p>{note?.comment}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</CardContent>

			<CardFooter className=" py-3"></CardFooter>
		</Card>
	) : (
		<NoEventDetails title={hbl} description={"No existen eventos para este hbl"} />
	);
};
