import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

import { useCreateProviderFare } from "../../../../Hooks/useProviderFares";

export default function BaseFareForm({ selectedService, setIsOpen }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const createFareMutation = useCreateProviderFare(setIsOpen);

	const onSubmit = (data) => {
		console.log(data);
		data.serviceId = selectedService.id;
		data.categoryId = parseInt(data.categoryId);
		data.weight = parseFloat(data.weight);
		data.costPrice = parseFloat(data.costPrice);
		createFareMutation.mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{createFareMutation.isError ? (
				<div className="text-bold text-red-500">{createFareMutation.error.message}</div>
			) : (
				""
			)}
			<div>
				<div className="border-b pb-12">
					<div className="inline-flex items-center border-b">
						<h1 className=" rounded p-2">Crear Tarifa para:</h1>

						<p className="block text-lg  font-medium leading-6 text-blue-600/80">
							<b className="px-2">{}</b>
							{}
						</p>
					</div>

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
								Categoria
							</label>
							<div className="mt-2">
								<select
									{...register("categoryId", { required: "La Categoria es Requerida" })}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option value={null}>Seleccione una Categoria</option>
									{selectedService?.categories.map((category) => (
										<option key={category.id} value={parseInt(category.id)}>
											{category.name}
										</option>
									))}
								</select>
							</div>
							<div className="mt-2">
								{errors.categoryId && (
									<p className="text-xs text-red-500 ">{errors.categoryId?.message}</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
								Tipo Venta
							</label>
							<div className="mt-2">
								<select
									{...register("type", { required: "Tipo de Venta es Requerida" })}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option value={null}>Seleccione una Tipo de Venta</option>

									<option value="Libras">Libras</option>
									<option value="Unidad">Unidad</option>
									<option value="Kilos">Kilos</option>
								</select>
							</div>
							<div className="mt-2">
								{errors.categoryId && (
									<p className="text-xs text-red-500 ">{errors.categoryId?.message}</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
								Nombre de Tarifa
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
								htmlFor="costPrice"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Costo
							</label>
							<div className="mt-2">
								<input
									{...register("costPrice", { required: "El Precio de Compra es Requerido" })}
									type="number"
									name="costPrice"
									id="costPrice"
									step="any"
									autoComplete="given-buyPrice"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.costPrice && (
									<p className="text-xs text-red-500 ">{errors.costPrice?.message}</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="providerName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Peso
							</label>
							<div className="mt-2">
								<input
									{...register("weight", { required: "El Peso es Requerido" })}
									type="number"
									name="weight"
									id="weight"
									step="any"
									autoComplete="given-weight"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.costPrice && (
									<p className="text-xs text-red-500 ">{errors.costPrice?.message}</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

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
					disabled={createFareMutation.isLoading}
					className="rounded-md bg-blue-600 w-32 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{createFareMutation.isLoading ? (
						<EllipsisHorizontalIcon className="animate-pulse mx-auto h-5 w-5 text-white " />
					) : (
						"Guardar"
					)}
				</button>
			</div>
		</form>
	);
}
