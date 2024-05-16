import { ChevronRightCircle, FileBadge, MoreHorizontal, Package2Icon } from "lucide-react";

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
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { EventDetails } from "./Components/Events/EventDetails";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { trackingHooks } from "./hooks/useTracking";

export const TrackingInquiriesTab = () => {
	const [selectedInvoice, setSelectedInvoice] = useState(null);

	const { data, isLoading, isError } = trackingHooks.useFetchTrackingPackagesProblems();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error...</div>;
	return (
		<main className="grid flex-1 items-start gap-4 sm:py-0  md:gap-8 lg:grid-cols-2 ">
			<div className="col-span-1">
				<Card>
					<CardHeader>
						<CardTitle>Hbl Problems</CardTitle>
						<CardDescription>
							Manage your products and view their sales performance.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="hidden w-[100px] sm:table-cell">
										<span className="sr-only">img</span>
									</TableHead>
									<TableHead>Invoice</TableHead>
									<TableHead>Type</TableHead>
									<TableHead className="hidden md:table-cell">HBL</TableHead>
									<TableHead>
										<span className="sr-only">Actions</span>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data.map((invoice) => (
									<TableRow key={invoice.hbl}>
										<TableCell className="hidden sm:table-cell ">
											<Package2Icon className="h-4 w-4 text-red-600" />
										</TableCell>
										<TableCell className="font-medium  items-center">{invoice.invoiceId}</TableCell>
										<TableCell>
											<Badge variant="outline">Problem</Badge>
										</TableCell>
										<TableCell className="hidden md:table-cell">{invoice.hbl}</TableCell>
										<TableCell>
											<Button variant="ghost" onClick={() => setSelectedInvoice(invoice)}>
												<ChevronRightCircle className="h-4 w-4" />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
					<CardFooter>
					{/* 	<div className="text-xs text-muted-foreground">
							Showing <strong>1-10</strong> of <strong>32</strong> products
						</div> */}
					</CardFooter>
				</Card>
			</div>
			<EventDetails hbl={selectedInvoice?.hbl} />
			
		</main>
	);
};
