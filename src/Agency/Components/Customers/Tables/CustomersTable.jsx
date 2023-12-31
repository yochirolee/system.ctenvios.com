import {
	Card,
	Title,
	Text,
	Flex,
	Table,
	TableRow,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableBody,
	Badge,
	Button,
	TextInput,
} from "@tremor/react";

const colors = {
	"Ready for dispatch": "gray",
	Cancelled: "rose",
	Shipped: "emerald",
};

const transactions = [
	{
		transactionID: "#123456",
		user: "Lena Mayer",
		item: "Under Armour Shorts",
		status: "Ready for dispatch",
		amount: "$ 49.90",
		link: "#",
	},
	{
		transactionID: "#234567",
		user: "Max Smith",
		item: "Book - Wealth of Nations",
		status: "Ready for dispatch",
		amount: "$ 19.90",
		link: "#",
	},
	{
		transactionID: "#345678",
		user: "Anna Stone",
		item: "Garmin Forerunner 945",
		status: "Cancelled",
		amount: "$ 499.90",
		link: "#",
	},
	{
		transactionID: "#4567890",
		user: "Truls Cumbersome",
		item: "Running Backpack",
		status: "Shipped",
		amount: "$ 89.90",
		link: "#",
	},
	{
		transactionID: "#5678901",
		user: "Peter Pikser",
		item: "Rolex Submariner Replica",
		status: "Cancelled",
		amount: "$ 299.90",
		link: "#",
	},
	{
		transactionID: "#6789012",
		user: "Phlipp Forest",
		item: "On Clouds Shoes",
		status: "Ready for dispatch",
		amount: "$ 290.90",
		link: "#",
	},
	{
		transactionID: "#78901234",
		user: "Mara Pacemaker",
		item: "Ortovox Backpack 40l",
		status: "Shipped",
		amount: "$ 150.00",
		link: "#",
	},
	{
		transactionID: "#89012345",
		user: "Sev Major",
		item: "Oakley Jawbreaker",
		status: "Ready for dispatch",
		amount: "$ 190.90",
		link: "#",
	},
];

import { DocumentPlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function CustomersTable() {
	return (
		<div className="p-4">
			<Flex justifyContent="between" className="space-x-2">
				<div>
					<Flex justifyContent="start" className="space-x-2">
						<Title>No. Facturas</Title>
						<Badge color="gray">1230</Badge>
					</Flex>
					<Text className="mt-2">Lista de Facturas</Text>
				</div>
				<div className="inline-flex gap-4">
					<TextInput icon={MagnifyingGlassIcon} placeholder="Buscar..." />
					<Button icon={DocumentPlusIcon} variant="primary">Crear Factura</Button>
				</div>
			</Flex>
			<Card>
				<Table className="mt-6">
					<TableHead>
						<TableRow>
							<TableHeaderCell>Transaction ID</TableHeaderCell>
							<TableHeaderCell>User</TableHeaderCell>
							<TableHeaderCell>Item</TableHeaderCell>
							<TableHeaderCell>Status</TableHeaderCell>
							<TableHeaderCell className="text-right">Amount</TableHeaderCell>
							<TableHeaderCell>Link</TableHeaderCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{transactions.map((item) => (
							<TableRow key={item.transactionID}>
								<TableCell>{item.transactionID}</TableCell>
								<TableCell>{item.user}</TableCell>
								<TableCell>{item.item}</TableCell>
								<TableCell>
									<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
										Badge
									</span>
								</TableCell>
								<TableCell className="text-right">{item.amount}</TableCell>
								<TableCell>
									<Button size="xs" variant="secondary" color="gray">
										See details
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
			<Card></Card>
		</div>
	);
}
