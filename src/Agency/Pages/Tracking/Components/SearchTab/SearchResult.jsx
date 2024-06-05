import { React } from "react";
import { Badge } from "@/components/ui/badge";
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
	Copy,
	ListChecks,
	ListOrderedIcon,
	MoreHorizontalIcon,
	MoreVertical,
	PrinterIcon,
	CheckCheck,
	Container,
	FileSpreadsheet,
	ShieldAlert,
	ShipIcon,
	Tractor,
	TruckIcon,
	Warehouse,
	Truck,
	SearchSlashIcon,
	SearchCodeIcon,
	ShieldAlertIcon,
	PhoneIcon,
	MapPinIcon,
	UserIcon,
} from "lucide-react";

import { format, parseISO } from "date-fns";

import { getIcon } from "../../../../../Utils/getIcon";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const SearchResult = ({ invoice, setSelectedHbl }) => {
	if (!invoice || Object.keys(invoice).length < 1) return null;

	console.log(invoice);
	return (
		<Card className="overflow-hidden xl:col-span-2">
			<CardHeader className="flex flex-row  items-center bg-muted/50">
				<div className="grid gap-0.5">
					<CardTitle className="group flex items-center gap-2 text-lg">
						<p className="text-[1.5rem] leading-none text-slate-900">
							<span className="font-bold">{invoice?.agency}</span>
						</p>
					</CardTitle>
				</div>
				<div className="ml-auto flex flex-col items-end gap-1">
					{/* <Button size="sm" variant="outline" className="h-8 gap-1">
						<ShipIcon className="h-3.5 w-3.5" />
						<span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
							{invoice?.containerName}
						</span>
					</Button> */}
					<div className="flex items-center">
						<p className="text-[1.5rem] leading-none text-slate-900">
							<span className="font-bold">{invoice?.invoiceId}</span>
						</p>
						<p className="ml-3 space-x-1 text-sm">
							<span className="font-semibold text-slate-900">Factura</span>
						</p>
					</div>
					{/* 	<div className="text-xs text-muted-foreground">
						Invoice Date: <time dateTime="2023-11-23">November 23, 2023</time>
					</div> */}
				</div>
			</CardHeader>
			<CardContent className=" text-sm  mx-auto">
				<div className="grid grid-cols-2 gap-6 py-10">
					<Card className="border-none">
						<CardHeader>
							<CardTitle className="text-xl">Cliente</CardTitle>
						</CardHeader>
						<CardContent className="grid gap-4">
							<div className="flex items-center gap-3">
								<UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
								<div>
									<p className="font-medium">{invoice?.customer?.fullName}</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										{invoice?.customer?.email} test@test.com
									</p>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
								<div>
									<p>{invoice?.customer?.mobile}</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-none">
						<CardHeader>
							<CardTitle className="text-xl">Destinatario</CardTitle>
						</CardHeader>
						<CardContent className="grid gap-4">
							<div className="flex items-center gap-3">
								<UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
								<div>
									<p className="font-medium">{invoice?.receiver?.fullName}</p>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										{invoice?.receiver?.ci}
									</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<PhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
								<div>
									<p>{invoice?.receiver?.mobile}</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<MapPinIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
								<div>
									<p>{invoice?.shippingAddress}</p>
									<p>{invoice?.province + " " + invoice?.city}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</CardContent>

			{/* {invoice?.parcels?.map((pack, index) => (
				<Card className="m-4">
					<CardHeader>
						<CardTitle className="text-xl ">
							<div className="my-2 space-y-2">
								<div className=" flex items-center  ">
									<p
										onClick={() => setSelectedHbl(pack?.hbl)}
										className="text-[1.3rem] leading-none text-slate-900 cursor-pointer"
									>
										<span className="font-bold">{pack?.hbl}</span>
									</p>

									<p className="ml-3 space-x-1 text-xs">
										<span className="font-semibold text-slate-900">HBL</span>
									</p>
								</div>
							</div>
						</CardTitle>
						<div className="flex gap-3">
							<p>{pack?.description}</p>
							<Badge variant="secondary">{pack?.weight} Lbs</Badge>
						</div>
					</CardHeader>
					<CardContent className="grid grid-flow-col gap-4 ">
						<div className="flex  p-4 space-x-4">
							{pack?.events?.map((step, index) => (
								<div className="flex flex-col items-center  gap-4">
									<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
										<div className="h-5 w-5 text-gray-500 dark:text-gray-400">
											{getIcon(pack?.events[index]?.locationId)}
										</div>
									</div>
									<div className="grid gap-1">
										<p className="font-medium">{step?.locations.name}</p>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											{format(
												parseISO(step.locations?.updatedAt),
												"dd/MM/yyyy",
											)}
										</p>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			))} */}

			<div className="bg-muted/60 p-6">
				<div className="flex  justify-between items-end font-semibold    gap-4 ">
					<div className="inline-flex gap-2 items-center">
						<h2 className="text-lg">Packages</h2>
						<div class="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
							{invoice?.parcels?.length}
						</div>
					</div>
				</div>

				{invoice?.parcels?.map((pack, index) => (
					<Card key={index} className="my-2 ">
						<CardHeader className=" space-y-0 p-2">
							<CardTitle className=" flex justify-between items-center p-2 text-sm border-b border-dashed">
								<div className="my-2 space-y-2">
									<div className=" flex items-center  ">
										<p
											onClick={() => setSelectedHbl(pack?.hbl)}
											className="text-[1.5rem] leading-none text-slate-900 cursor-pointer"
										>
											<span className="font-bold">{pack?.hbl}</span>
										</p>

										<p className="ml-3 space-x-1 text-sm">
											<span className="font-semibold text-slate-900">HBL</span>
										</p>
									</div>
								</div>
								{
									<div className=" flex flex-col xl:flex-row items-center gap-2">
										<Badge className="ml-2 gap-2">
											{getIcon(pack?.events[pack?.events?.length - 1]?.locationId)}
											{pack?.location}
										</Badge>
										<time className="flex items-center text-xs  pr-2">
											<span className="mx-2 ">Facturado hace:</span>
											<div className="font-bold">
												<relative-time
													format="relative"
													tense="past"
													datetime={pack?.events[0]?.updatedAt}
												></relative-time>
											</div>
										</time>
									</div>
								}
							</CardTitle>
						</CardHeader>
						<CardContent className="">
							<div className="my-2 space-y-2">
								<div className="text-slate-700 font-semibold">{pack?.description}</div>
								<span className="text-xs">{pack?.weight} Lbs</span>
							</div>

							<ScrollArea className="w-full p-4 ">
								<div className="flex  space-x-4 p-4">
									{pack?.events?.map((event, index) => (
										<div key={index} className="flex flex-col  shrink-0  items-center">
											<Badge className="ml-2 gap-2" variant={"secondary"}>
												{getIcon(event?.locationId)}
												<span className="shrink-0">{event?.locations?.name}</span>
											</Badge>
											<div className="mt-1 text-center">
												<p className="text-[10px] text-slate-600">{event?.status?.name}</p>
											</div>

											<time className="flex flex-col items-center text-[10px]">
												{event?.updatedAt && format(parseISO(event?.updatedAt), "dd/MM/yyyy")}
												{/* <time className="flex items-center text-xs font-bold pr-2">
													<relative-time
														format="relative"
														datetime={format(parseISO(event?.updatedAt), "yyyy-MM-dd")}
													></relative-time>
												</time> */}
											</time>
										</div>
									))}
								</div>
								<ScrollBar orientation="horizontal" />
							</ScrollArea>
						</CardContent>

						{/* <TimeLine history={pack?.trackingHistory} /> */}
						<CardFooter className="flex justify-end items-center border-t pt-2">
							<Button size="sm" variant="ghost">
								<PrinterIcon className="w-4 h-4 mr-2 shrink-0" />
								Print Label
							</Button>
							<Button onClick={() => setSelectedHbl(pack.hbl)} size="sm" variant="ghost">
								<SearchCodeIcon className="w-4 h-4 mr-2 shrink-0" />
								Details
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</Card>
	);
};
