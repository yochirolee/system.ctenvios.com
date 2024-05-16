import { MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import {
	Card,
	Table,
	TableRow,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableBody,
} from "@tremor/react";

export default function CustomersTable({ customers }) {
	return (
		<div className="p-4">
			<Table className="mt-4">
				<TableHead>
					<TableRow>
						<TableHeaderCell>Nombre y Apellidos</TableHeaderCell>
						<TableHeaderCell>Telefono</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Direccion</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{customers?.map((customer) => (
						<TableRow key={customer.id}>
							<TableCell>{customer.firstName + " " + customer.lastName}</TableCell>
							<TableCell>{customer.mobile}</TableCell>
							<TableCell>{customer.email}</TableCell>
							<TableCell>{customer.address}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
