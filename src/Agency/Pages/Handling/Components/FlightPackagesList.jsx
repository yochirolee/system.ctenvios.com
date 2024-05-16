import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { React, useMemo } from "react";
import { Link } from "react-router-dom";
export const FlightPackageList = ({ flight }) => {
	if (!flight) return "";

	console.log(flight, "selectedFlight");

	const packages = useMemo(() => {
		return flight?.packages?.map((pack) => ({
			flightId: flight.id,
			airGuide: flight.airGuide,
			invoiceId: pack?.invoice?.id,
			hbl: pack?.hbl,
			weight: pack?.weight,
			description: pack?.description,
			customer: pack.invoice.customer,
			reciever: pack.invoice.reciever,
		}));
	}, [flight.packages]);

	console.log(packages, "formated");

	const totalWeight = useMemo(() => {
		let weight = 0;
		packages?.forEach((pack) => {
			weight += pack?.weight;
		});

		return weight;
	}, [packages]);

	return (
		<div className="p-4">
			<h4>{totalWeight}</h4>
			<div className="py-4 ">
				<Table className="mt-4  ">
					<TableHead>
						<TableRow className="bg-gray-50 text-gray-600">
							<TableHeaderCell>No</TableHeaderCell>
							<TableHeaderCell>Envia</TableHeaderCell>
							<TableHeaderCell>Recibe</TableHeaderCell>
							<TableHeaderCell>CI</TableHeaderCell>
							<TableHeaderCell>Telefonos</TableHeaderCell>
							<TableHeaderCell>Provincia</TableHeaderCell>
							<TableHeaderCell>Descripcion</TableHeaderCell>
							<TableHeaderCell>Peso</TableHeaderCell>
						</TableRow>
					</TableHead>

					<TableBody className="">
						{packages?.map((pack, index) => (
							<TableRow key={pack?.id}>
								<TableCell className="inline-flex items-center gap-2">
									{index + 1}
									<Link
										className="p-1 px-2 inline-flex gap-2 items-center border bg-gray-50 rounded-lg "
										to={"/invoices/" + pack.invoiceId}
									>
										<DocumentMagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
										{pack?.hbl}
									</Link>
								</TableCell>
								<TableCell>{pack?.customer?.firstName + " " + pack?.customer?.lastName}</TableCell>
								<TableCell className="font-medium text-slate-600">
									{pack?.reciever?.firstName + " " + pack?.reciever?.lastName}
								</TableCell>

								<TableCell className="font-medium text-slate-600">{pack?.reciever?.ci}</TableCell>
								<TableCell className="">{pack?.reciever?.mobile}</TableCell>
								<TableCell>
									<div className="inline-flex  px-2 font-semibold">
										{pack.reciever.state?.name + " " + pack.reciever?.city?.name}
									</div>
								</TableCell>
								<TableCell>{pack?.description}</TableCell>
								<TableCell>{parseFloat(pack?.weight).toFixed(2)} Lbs</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};
