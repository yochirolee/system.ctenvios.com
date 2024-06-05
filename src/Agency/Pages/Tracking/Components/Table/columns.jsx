import { formatDate } from "@/Utils/formatDate";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDownIcon, Edit2Icon } from "lucide-react";

const dayPassed = (date1, date2) => {
	console.log(date1, date2);
	return Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
};

const findEventDate = (events, locationId) => {
	return events.find((e) => e.locationId === locationId).createdAt;
};

export const columns = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},

	{
		accessorKey: "invoiceId",

		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Invoice
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},

	{
		accessorKey: "hbl",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					HBL
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "agency",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Agencia
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},

	{
		accessorKey: "currentLocationId",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Location
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			return (
				<Badge className="text-nowrap" variant={"outline"}>
					{row.original?.events[row.original?.events.length - 1]?.locations?.name}
				</Badge>
			);
		},
	},

	{
		id: "Status",
		header: () => {
			return (
				<Button variant="ghost">
					Status
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="flex items-center gap-2">
				<div className="w-2 h-2 rounded-full bg-green-500" />
				<span>
					{row.original?.events[row.original?.events.length - 1]?.status?.name ?? "No status"}
				</span>
			</div>
		),
	},

	/*
	<relative-time datetime="2014-04-01T16:30:00-08:00">
  April 1, 2014
</relative-time>
	*/
	{
		id: "invoiceDate",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					DayPassed
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<relative-time
			format="relative"
			
				datetime={row.original?.events[row.original?.events.length - 1]?.updatedAt}
			></relative-time>
		),
	},
	{
		id: "Date",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Last Update
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div>{formatDate(row.original?.events[row.original?.events.length - 1]?.updatedAt)}</div>
		),
	},
	{
		accessorKey: "description",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Description
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "receiver",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Destinatario
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="inline-flex items-center mx-2 w-full">
				<Avatar className="h-6 w-6 m-2">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				{row.original?.receiver}
			</div>
		),
	},
	{
		accessorKey: "province",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Provincia
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "city",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Municipio
					<ArrowUpDownIcon className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},

	{
		id: "actions",
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<Edit2Icon className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
