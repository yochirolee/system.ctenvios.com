import { TableCell, TableRow } from "@tremor/react";
import { React, useEffect, useMemo, useRef, useState } from "react";
import { SelectProductType } from "./SelectProductType";
import { TrashIcon } from "@heroicons/react/24/outline";
import { set, useForm } from "react-hook-form";
import { useInvoiceStore } from "../../../Store/InvoiceStorage";
import { shallow } from "zustand/shallow";

let newProduct = {
	productId: Date.now(),
	serviceId: null,
	servicePriceId: null,
	description: "",
	weight: 0,
	publicPrice: 0,
	isSellByPounds: false ,
};

export const NewProductRow = ({ selectedService, product, onChange, onRemove }) => {
	if (!selectedService) return null;

	const [selectedServicePrice, setSelectedServicePrice] = useState(null);

	const [updateProduct] = useInvoiceStore((state) => [state.updateProduct], shallow);

	console.log("running new product row");

	useEffect(() => {
		newProduct = {
			productId: product.productId,
			serviceId: selectedService.id,
			servicePriceId: selectedServicePrice?.id,
			description: "",
			weight: 0,
			publicPrice: selectedServicePrice?.publicPrice,
			isSellByPounds: selectedServicePrice?.isSellByPounds,
		};
	}, [selectedServicePrice]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		newProduct = { ...newProduct, [name]: value };
		onChange(newProduct);
	};

	return (
		<TableRow className="border-b border-dashed  ">
			<TableCell>
				<SelectProductType
					servicesPrices={selectedService.servicesPrices}
					selectedServicePrice={selectedServicePrice}
					setSelectedServicePrice={setSelectedServicePrice}
				/>
			</TableCell>
			<TableCell>{selectedServicePrice?.name}</TableCell>
			<TableCell>
				<dd className="mt-1 min-w-[300px] text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0">
					{selectedServicePrice?.isSellByPounds ? (
						<textarea
							type="text"
							name="description"
							id="description"
							onChange={(e) => handleInputChange(e)}
							className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					) : (
						selectedServicePrice?.description
					)}
				</dd>
			</TableCell>

			<TableCell>
				{selectedServicePrice?.isSellByPounds ? (
					<div className="inline-flex items-center gap-1">
						<input
							type="number"
							name="weight"
							id="weight"
							step="0.01"
							onChange={(e) => handleInputChange(e)}
							className="block w-[80px] px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/> <span>Lbs</span>
					</div>
				) : (
					<div>
						{selectedServicePrice?.weight} Lbs
					</div>
				)}
			</TableCell>
			<TableCell>{selectedServicePrice?.publicPrice}</TableCell>

			<TableCell>
				{product.isSellByPounds ? product.publicPrice * product.weight : product.publicPrice}
			</TableCell>
			<TableCell>
				<span onClick={() => onRemove(product?.productId)}>
					<TrashIcon className="h-5 w-5 text-red-400 hover:text-red-500"></TrashIcon>
				</span>
			</TableCell>
		</TableRow>
	);
};
