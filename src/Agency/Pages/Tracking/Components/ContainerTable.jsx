import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ListFilter } from "lucide-react";
import { React } from "react";
export const ContainerTable = ({ container }) => {
	if (!container) return null;
	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Packages</CardTitle>
				<CardDescription>List of Container Packages.</CardDescription>
				<div className="ml-auto flex items-center gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm" className="h-8 gap-1">
								<ListFilter className="h-3.5 w-3.5" />
								<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
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
					<Button size="sm" variant="outline" className="h-8 gap-1">
						<File className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Table>
					<ScrollArea className="h-72 w-full">
						<TableHeader>
							<TableRow>
								<TableHead>HBL</TableHead>
								<TableHead className="hidden sm:table-cell">Invoice No,</TableHead>
								<TableHead className="hidden sm:table-cell">Location</TableHead>
								<TableHead className="hidden md:table-cell">Status</TableHead>
								<TableHead className="text-right">Date</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{container.map((item) => (
								<TableRow key={item.id}>
									<TableCell>
										<div className="flex items-center gap-2">
											<BoxIcon className="h-5 w-5" />
											<span>{item.hbl}</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<FileBadgeIcon className="h-5 w-5" />
											<span>{item.invoiceId}</span>
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">
										{item.events[item.events.length - 1]?.location.name}
									</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge variant="success">{item.events[item.events.length - 1]?.status}</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">
										{formatDate(item.events[item.events.length - 1]?.createdAt)}
									</TableCell>
									<TableCell className="text-right">{item.amount}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</ScrollArea>
				</Table>
			</CardContent>
		</Card>
	);
};
