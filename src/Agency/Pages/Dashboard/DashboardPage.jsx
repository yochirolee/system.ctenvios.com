import { React, useMemo, useState } from "react";
import { useInvoiceStore } from "../../../Store/InvoiceStorage";
import { shallow } from "zustand/shallow";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Button, Table, TableBody, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { useFetchServicesByAgencyId } from "../../Hooks/useServices";
import ServicesRadioGroup from "../../Components/Services/ServicesRadioGroup";
import { NewProductRow } from "../../Components/Products/NewProductRow";
import FormTable from "./test";
import { useAuth } from "../../../Auth/Hooks/useAuth";

export const DashboardPage = () => {
	const { currentUser } = useAuth();
	const { data: agencyServices, isLoading } = useFetchServicesByAgencyId(currentUser?.agencyId);
	const [selectedService, setSelectedService] = useState(null);

	const [invoice, addProduct, updateProduct, deleteProduct] = useInvoiceStore(
		(state) => [state.invoice, state.addProduct, state.updateProduct, state.deleteProduct],
		shallow,
	);

	const handleAddRow = () => {
		addProduct({ productId: Date.now(), serviceId: selectedService.id });
	};

	const handleRemoveRow = (productId) => {
		deleteProduct(productId);
	};

	const handleInputChange = (product) => {
		updateProduct(product);
	};

	const amountToPay = useMemo(() => {
		let total = 0;
		invoice.products.forEach((product) => {
			total += product.isSellbyPounds
				? parseFloat(product.publicPrice * product.weight)
				: parseFloat(product.publicPrice);
		});
		return total;
	}, [invoice.products]);

	const handleSubmit = () => {
		console.log(formData);
		// Aquí puedes realizar cualquier acción con los datos recopilados.
	};

	const handleChangeSelectedService = (selectedService) => {
		setSelectedService(selectedService);
	};

	if (isLoading) return <div className="text-center text-gray-500">Cargando...</div>;

	console.log(invoice, "invoice")

	return (
		<>
			<div className=" ">
				<ServicesRadioGroup
					agencyServices={agencyServices}
					selectedService={selectedService}
					setSelectedService={handleChangeSelectedService}
				/>
				<div className="flex flex-row  pb-4  items-center px-4 sm:px-0">
					<div className="flex flex-col w-full">
						<h3 className="text-base font-semibold leading-7 text-gray-900">
							Listado de Productos
						</h3>
						<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
							Productos para agregar a Factura.
						</p>
					</div>
					<div className=" inline-flex items-center gap-4 ">
						<span className="inline-flex w-lg items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
							<p className="pr-4">No Productos:</p>
							{invoice.products.length ? invoice.products.length : 0}
						</span>
						<Button icon={PlusCircleIcon} onClick={() => handleAddRow()}>
							Agregar Producto
						</Button>
					</div>
				</div>

				<Table className="overflow-visible  ">
					<TableHead className="my-0 py-0  bg-gray-100">
						<TableRow className="text-xs">
							<TableHeaderCell>Tipo de Producto</TableHeaderCell>
							<TableHeaderCell>Producto</TableHeaderCell>
							<TableHeaderCell>Descripcion</TableHeaderCell>
							<TableHeaderCell>Peso</TableHeaderCell>
							<TableHeaderCell>Precio</TableHeaderCell>
							<TableHeaderCell>SubTotal</TableHeaderCell>
							<TableHeaderCell></TableHeaderCell>
						</TableRow>
					</TableHead>

					<TableBody className="text-xs ">
						{invoice?.products?.map((product) => (
							<NewProductRow
								key={product.productId}
								product={product}
								selectedService={selectedService}
								onChange={handleInputChange}
								onRemove={handleRemoveRow}
							/>
						))}
					</TableBody>
				</Table>
				<span>{amountToPay.isNaN ? amountToPay : 0} Total</span>
				<h1>Invoice</h1>
				{invoice.products.map((product) => (
					<div key={product.productId}>
						<span>{product.description}</span>
						<span>{product.publicPrice}</span>
						<span>{product.weight}</span>
						<span>{product.isSellbyPounds}</span>
					</div>
				))}
			</div>
		</>
	);
};
