import {
	PencilSquareIcon,
	ScaleIcon,
	ShoppingBagIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import { React, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../Hooks/queryKeys";
import apiServices from "../../Api/apiServices";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { FaceSmileIcon } from "@heroicons/react/20/solid";

export const AgencyServicesPricesList = ({ setIsOpen, servicesPrices }) => {
	console.log(servicesPrices, "servicesPrices");
	if (servicesPrices?.length === 0)
		return <div className="text-center text-gray-500">No hay tarifas creadas</div>;
	const [isOpenServicePriceForm, setIsOpenServicePriceForm] = useState(false);
	const [selectedServicePrice, setSelectedServicePrice] = useState(null);
	const [isEditing, setIsEditing] = useState(FaceSmileIcon);

	const queryClient = useQueryClient();
	const deleteServicePriceMutation = useMutation({
		mutationFn: (id) => apiServices.servicesPrices.deleteServicePrice(id),
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.fetchServicesByAgency);
		},
	});

	const handleEditServicePrice = (servicePrice) => {
		setSelectedServicePrice(servicePrice);
		setIsEditing(true);
		setIsOpen(true);
	};

	return (
		<div className="xl:col-span-8  pb-4 ">
			<Table>
				<TableHead className="my-0 py-0 bg-gray-100">
					<TableRow className="text-xs">
						<TableHeaderCell>Tarifa</TableHeaderCell>
						<TableHeaderCell>Tipo de Venta</TableHeaderCell>
						<TableHeaderCell>Costo</TableHeaderCell>
						<TableHeaderCell>Precio Agencia</TableHeaderCell>
						<TableHeaderCell>Precio Publico</TableHeaderCell>
						<TableHeaderCell>Margen</TableHeaderCell>
						<TableHeaderCell>Actions</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody className="text-xs">
					{servicesPrices?.map((servicePrice) => (
						<TableRow key={servicePrice.id}>
							<TableCell>{servicePrice.name}</TableCell>
							<TableCell>
								<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
									<ScaleIcon className="h-5 w-5 mx-2" aria-hidden="true" />
									<span> {servicePrice.type}</span>
								</span>
							</TableCell>
							<TableCell>{parseFloat(servicePrice.costPrice).toFixed(2)} usd</TableCell>
							<TableCell>{parseFloat(servicePrice.agencyPrice).toFixed(2)} usd</TableCell>
							<TableCell>{parseFloat(servicePrice.publicPrice).toFixed(2)} usd</TableCell>

							<TableCell>
								<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500/10">
									{parseFloat(servicePrice.agencyPrice - servicePrice.costPrice).toFixed(2)}
									{servicePrice.type}
								</span>
							</TableCell>
							<TableCell>
								<div className="flex border-l border-dotted pl-4">
									<span className=" rounded-lg cursor-pointer  p-2 ">
										<PencilSquareIcon
											onClick={() => handleEditServicePrice(servicePrice)}
											className="h-5 w-5 text-gray-500 hover:text-green-400"
											aria-hidden="true"
										/>
									</span>
									<span className=" rounded-lg cursor-pointer  p-2 ">
										<TrashIcon
											onClick={() => deleteServicePriceMutation.mutate(servicePrice.id)}
											className="h-5 w-5 text-gray-500 hover:text-red-400"
											aria-hidden="true"
										/>
									</span>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
