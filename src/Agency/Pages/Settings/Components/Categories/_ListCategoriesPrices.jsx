import { ScaleIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { React } from "react";
export const ListCategoriesPrices = ({ rate, deleteMutation }) => {
	return (
		<div
			key={rate.id}
			className="flex justify-between items-center border text-sm p-3 rounded-md my-2 bg-gray-100"
		>
			<div>{rate?.name}</div>
			<div>Peso: {rate?.weight} Lbs</div>

			{rate.isSellByPounds ? (
				<span className=" flex items-center  text-xs font-medium text-yellow-600  ring-blue-700/10">
					<div>Costo: {rate?.costPrice}</div>
					<ScaleIcon className="h-5 w-5 mx-2" aria-hidden="true" />
					<span> Por Libras</span>
				</span>
			) : (
				<span className="flex items-center  text-xs font-medium text-blue-700  ring-blue-700/10">
					<div>Costo: {rate?.costPrice}</div>
					<ShoppingBagIcon className="h-5 w-5 mx-2 " aria-hidden="true" />
					<span>Por Unidad</span>
				</span>
			)}
			<div>
				<button onClick={() => deleteMutation.mutate(rate.id)}>
					<XMarkIcon className="h-6 w-6 border rounded-md p-1 bg-red-100 text-red-400 border-red-400" />
					{deleteMutation.isLoading ? "Eliminando..." : "Eliminar"}
				</button>
			</div>
		</div>
	);
};
