import { React, useEffect, useState } from "react";
import { SelectServicePrice } from "./SelectServicePrice";
import { TrashIcon } from "@heroicons/react/24/solid";

export const NewProductForm = ({ selectedService, index }) => {
	const [selectedServicePrice, setSelectedServicePrice] = useState(null);
	
	const [newProduct, setNewProduct] = useState({});

	useEffect(() => {
		setNewProduct({
			...newProduct,
			serviceId: selectedService?.id,
			serviceName: selectedService?.name,
			publicPrice: selectedServicePrice?.publicPrice,
			isSellByPounds: selectedServicePrice?.isSellByPounds,
			description: selectedServicePrice?.name,
		});
	}, [selectedServicePrice]);

	console.log(newProduct, selectedServicePrice, "newProduct");

	return (
		<dl key={index} className="divide-y divide-gray-100 ">
			<div className=" py-6 border-b border-dashed grid grid-flow-col grid-cols-12  items-center px-0">
				<dd className="mt-1 mr-8 col-span-4 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					<SelectServicePrice
						selectedService={selectedService}
						selectedServicePrice={selectedServicePrice}
						setSelectedServicePrice={setSelectedServicePrice}
					/>
				</dd>
				<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					{newProduct.description}
				</dd>

				<dd className="mt-1 min-w-[300px] text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0">
					{newProduct?.isSellByPounds ? (
						<textarea
							type="text"
							name="description"
							id="description"
							className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					) : (
						""
					)}
				</dd>
				<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					{newProduct?.isSellByPounds ? (
						<div>
							<input
								type="number"
								name="weight"
								id="weight"
								step="0.01"
								onChange={(e) =>
									setNewProduct({ ...newProduct, weight: parseFloat(e.target.value).toFixed(2) })
								}
								className="block w-[80px] px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
							/>
						</div>
					) : (
						""
					)}
				</dd>

				<dd className="mt-1 text-sm  leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					{newProduct?.isSellByPounds
						? newProduct?.publicPrice * newProduct.weight
						: newProduct?.publicPrice}
				</dd>
				<dd className="flex justify-self-end mt-1 text-sm leading-6  justify-end text-gray-700 col-span-1 sm:col-span-1 sm:mt-0">
					<TrashIcon className="h-6 w-6 p-1  rounded-md bg-red-500 hover:bg-red-600 text-white" />
				</dd>
			</div>
		</dl>
	);
};
