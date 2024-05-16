import { React, useEffect, useState } from "react";
import { SelectProductType } from "../Products/SelectProductType";
import { useAppStore } from "../../../Store/AppStore";
import { shallow } from "zustand/shallow";
import { TrashIcon } from "@heroicons/react/24/outline";

export const NewPackage = ({ selectedService, pack, index }) => {
	const [selectedServicePrice, setSelectedServicePrice] = useState(null);

	const [updatePackage, deletePackage] = useAppStore(
		(state) => [state.updatePackage, state.deletePackage],
		shallow,
	);

	const handleInputChange = (e) => {
		let { name, value } = e.target;
		if (name === "weight") value = parseFloat(value);
		if (name === "publicPrice") value = parseFloat(value);
		updatePackage({ ...pack, [name]: value }, pack.hbl);
	};

	useEffect(() => {
		updatePackage(
			{
				...pack,
				servicePriceId: selectedServicePrice?.id,
				categoryId: selectedServicePrice?.productCategoryId,
				description: selectedServicePrice?.isSellByPounds ? "" : selectedServicePrice?.description,
				weight: selectedServicePrice?.isSellByPounds ? "" : selectedServicePrice?.weight,
				publicPrice: selectedServicePrice?.publicPrice,
				isSellByPounds: selectedServicePrice?.isSellByPounds,
			},
			pack.hbl,
		);
	}, [selectedServicePrice]);

	return (
		<div className=" grid shadow-sm grid-flow-col grid-cols-12 items-center gap-4 justify-between bg-white h-auto rounded-lg p-4 m-4">
			<div className="col-span-1 ">{index + 1}</div>
			<div className=" col-span-2">
				<SelectProductType
					selectedService={selectedService?.servicesPrices}
					selectedServicePrice={selectedServicePrice}
					setSelectedServicePrice={setSelectedServicePrice}
				/>
			</div>
			{selectedServicePrice && (
				<>
					<div className="col-span-4 ">
						{selectedServicePrice?.isSellByPounds ? (
							<textarea
								type="text"
								name="description"
								id="description"
								placeholder="Descripcion del Producto o Paquete"
								onChange={(e) => handleInputChange(e)}
								className=" w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
							/>
						) : (
							pack?.description
						)}
					</div>
					<div className="col-span-2 ">{selectedServicePrice?.publicPrice}</div>
					<div className="col-span-2 ">
						{selectedServicePrice?.isSellByPounds ? (
							<input
								type="number"
								name="weight"
								id="weight"
								onChange={(e) => handleInputChange(e)}
								placeholder="00.00"
								className="block w-32 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
							/>
						) : (
							selectedServicePrice?.weight
						)}
					</div>
					<div className="col-span-2 ">
						${pack?.subTotal ? parseFloat(pack?.subTotal).toFixed(2) : 0}
					</div>
					<div className="flex col-span-1 border-l px-3 justify-end">
						<TrashIcon
							onClick={() => deletePackage(pack?.hbl)}
							className=" h-5 w-5 hover:text-red-500"
							aria-hidden="true"
						/>
					</div>
				</>
			)}
		</div>
	);
};
