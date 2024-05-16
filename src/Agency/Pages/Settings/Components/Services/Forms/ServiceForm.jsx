import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateService, useUpdateService } from "../../../../../Hooks/useServices";
import { CategoriesCheck } from "../../Categories/CategoriesCheck";

export default function ServiceForm({ setIsOpen, provider, isEditing = false }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [categoriesIds, setSelectedCategoriesIds] = useState([]);

	const createServiceMutation = useCreateService(setIsOpen);
	const updateServiceMutation = useUpdateService(setIsOpen);

	const onSubmit = async (data) => {
		data.providerId = provider.id;
		data.categoriesIds = categoriesIds;

		console.log(data, "data to create service");
		isEditing ? updateServiceMutation.mutate(data) : createServiceMutation.mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{createServiceMutation.isError ? (
				<div className="text-bold text-red-500">{createServiceMutation.error.message}</div>
			) : (
				""
			)}
			<div className=" ">
				<div className="border-b border-gray-900/10 pb-12">
					<h1 className="bg-gray-800 text-white rounded p-2">
						Proveedor de Servicio: {provider.name}
					</h1>

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
								Tipo de Servicio
							</label>
							<div className="mt-2">
								<select
									{...register("type", { required: "El Tipo de Servicio es Requerido" })}
									type="text"
									name="type"
									id="type"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option value="Aereo">Aereo</option>
									<option value="Maritimo">Maritimo</option>
								</select>
							</div>
							<div className="mt-2">
								{errors.type && <p className="text-xs text-red-500 ">{errors.type?.message}</p>}
							</div>
						</div>
						<div className="sm:col-span-3">
							<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
								Nombre del Servicio
							</label>
							<div className="mt-2">
								<input
									{...register("name", { required: "El Nombre es Requerido" })}
									type="text"
									name="name"
									id="name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.name && <p className="text-xs text-red-500 ">{errors.name?.message}</p>}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="providerName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Prefijo de Factura
							</label>
							<div className="mt-2">
								<input
									{...register("invoiceCode", { required: "El Prefijo es Requerido" })}
									type="text"
									name="invoiceCode"
									id="invoiceCode"
									autoComplete="given-invoiceCode"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.invoiceCode && (
									<p className="text-xs text-red-500 ">{errors.invoiceCode?.message}</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<CategoriesCheck
				categoriesIds={categoriesIds}
				setSelectedCategoriesIds={setSelectedCategoriesIds}
			/>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					onClick={() => setIsOpen(false)}
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					Cancel
				</button>

				<button
					type="submit"
					disabled={
						createServiceMutation.isLoading ||
						updateServiceMutation.isLoading ||
						categoriesIds.length === 0
					}
					className="rounded-md bg-blue-600 w-32 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{createServiceMutation.isLoading || updateServiceMutation.isLoading ? (
						<EllipsisHorizontalIcon className="animate-pulse mx-auto h-5 w-5 text-white " />
					) : (
						"Guardar"
					)}
				</button>
			</div>
		</form>
	);
}
