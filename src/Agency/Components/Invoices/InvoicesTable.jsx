import {
	DocumentMagnifyingGlassIcon,
	FolderIcon,
	MagnifyingGlassIcon,
	UserPlusIcon,
} from "@heroicons/react/24/outline";
import {
	Card,
	Table,
	TableRow,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableBody,
} from "@tremor/react";
import { Link } from "react-router-dom";
import { formatDate } from "../../../Utils/formatDate";

export default function InvoicesTable({ invoices }) {
	return (
		<div className="py-4 ">
			<Table className="mt-4 ">
				<TableHead>
					<TableRow className="bg-gray-50 text-gray-600">
						<TableHeaderCell>No</TableHeaderCell>
						<TableHeaderCell>Envia</TableHeaderCell>
						<TableHeaderCell>Recibe</TableHeaderCell>
						<TableHeaderCell>Provincia</TableHeaderCell>
						<TableHeaderCell>Estado</TableHeaderCell>
						<TableHeaderCell>Amount</TableHeaderCell>
						<TableHeaderCell>No Packs</TableHeaderCell>
						<TableHeaderCell>Fecha</TableHeaderCell>
						<TableHeaderCell>Servicio</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody className="">
					{invoices?.map((invoice) => (
						<TableRow key={invoice.id}>
							<TableCell>
								<Link
									className="p-1 px-2 inline-flex gap-2 items-center border bg-gray-50 rounded-lg "
									to={"/invoices/" + invoice.id}
								>
									<DocumentMagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
									{invoice.id}
								</Link>
							</TableCell>
							<TableCell className="font-semibold text-slate-600">
								{invoice?.customer?.firstName + " " + invoice?.customer?.lastName}
							</TableCell>
							<TableCell>
								{invoice?.reciever?.firstName + " " + invoice?.reciever?.lastName}
							</TableCell>
							<TableCell>
								<div className="inline-flex  px-2 font-semibold">
									{invoice.reciever.state?.name + " " + invoice.reciever?.city?.name}
								</div>
							</TableCell>
							<TableCell>
								{!invoice?.isPaid ? (
									<span className="flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
										<div className=" flex items-center gap-x-1.5">
											<div className="flex-none rounded-full bg-red-500/20 p-1">
												<div className="h-1.5 w-1.5 rounded-full bg-red-500" />
											</div>
											<p className="text-xs leading-5 text-red-500">Pendiente Pago</p>
										</div>
									</span>
								) : (
									<span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
										<div className=" flex items-center gap-x-1.5">
											<div className="flex-none rounded-full bg-emerald-500/20 p-1">
												<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
											</div>
											<p className="text-xs leading-5 text-green-500"> Pagada</p>
										</div>
									</span>
								)}
							</TableCell>
							<TableCell className=" text-right">
								${parseFloat(invoice.amountToPay).toFixed(2)}
							</TableCell>
							<TableCell>
								<span className="rounded-full mx-2 px-2 text-right font-semibold text-xs bg-gray-600 text-white">
									{invoice?.packages?.length}
								</span>
							</TableCell>
							<TableCell>{formatDate(invoice?.createdAt)}</TableCell>
							<TableCell>{invoice?.service?.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
