import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../Hooks/queryKeys";
import apiServices from "../../Api/apiServices";

export default function ServicePriceForm({
	setIsOpen,
	selectedAgency,
	selectedService,
	servicePrice,
	isEditing = false,
}) {
	if (!selectedAgency) return null;
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const queryClient = useQueryClient();
	const createServicePriceMutation = useMutation({
		mutationFn: (servicePrice) => apiServices.servicesPrices.createServicePrice(servicePrice),
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.fetchServicesByAgency);
			setIsOpen(false);
		},
	});

	const updateServicePriceMutation = useMutation({
		mutationFn: (servicePrice) => apiServices.servicesPrices.updateServicePrice(servicePrice),
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.fetchServicesByAgency);
			if (!updateServicePriceMutation.isError) setIsOpen(false);
		},
	});


	const onSubmit = (data) => {
		data.serviceId = selectedService.id;
		data.agencyId = selectedAgency.id;
		data.costPrice = parseFloat(data.costPrice);
		data.agencyPrice = parseFloat(data.agencyPrice);
		data.productCategoryId = parseInt(data.productCategoryId);
		isEditing ? updateServicePriceMutation.mutate(data) : createServicePriceMutation.mutate(data);
	};

	useEffect(() => {
		if (isEditing) {
			reset({
				id: servicePrice.id,
				name: servicePrice.name,
				description: servicePrice.description,
				costPrice: servicePrice.costPrice,
				agencyPrice: servicePrice.agencyPrice,
				isSellByPounds: servicePrice.isSellByPounds,
			});
		}
	}, [isEditing, reset, selectedService]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{createServicePriceMutation.isError ? (
				<div className="text-bold text-red-500">{createServicePriceMutation.error.message}</div>
			) : (
				""
			)}
			<div>
				<div className="border-b pb-12">
					<div className="inline-flex items-center border-b">
						<h1 className=" rounded p-2">Crear Tarifa para:</h1>

						<p className="block text-lg  font-medium leading-6 text-blue-600/80">
							<b className="px-2">{selectedAgency.name}</b>
							{selectedService.name}
						</p>
					</div>

					{selectedService && (
						<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
									Categoria
								</label>
								<div className="mt-2">
									<select
										{...register("productCategoryId", { required: "El Nombre es Requerido" })}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									>
										<option value={null}>Seleccione una Categoria</option>
										{selectedService.servicesCategories.map((category) => (
											<option key={category.id} value={category.id}>
												{category.name}
											</option>
										))}
									</select>
								</div>
								<div className="mt-2">
									{errors.productCategoryId && (
										<p className="text-xs text-red-500 ">{errors.productCategoryId?.message}</p>
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
									htmlFor="description"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Descripcion de la Tarifa
								</label>
								<div className="mt-2">
									<input
										{...register("description", { required: "La description es Requeridos" })}
										type="text"
										name="description"
										id="description"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.description && (
										<p className="text-xs text-red-500 ">{errors.description?.message}</p>
									)}
								</div>
							</div>

							<div className="sm:col-span-3">
								<label
									htmlFor="providerName"
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
									Precio de Agencia
								</label>
								<div className="mt-2">
									<input
										{...register("agencyPrice", { required: "El Precio de Venta es Requerido" })}
										type="number"
										name="agencyPrice"
										id="agencyPrice"
										step="any"
										autoComplete="given-agencyPrice"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.agencyPrice && (
										<p className="text-xs text-red-500 ">{errors.agencyPrice?.message}</p>
									)}
								</div>
							</div>
							<div className="sm:col-span-3">
								<label
									htmlFor="providerName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Precio Unitario o Por Libras
								</label>
								<div className="flex items-center mt-2">
									<input
										{...register("isSellByPounds")}
										id="checked-checkbox"
										type="checkbox"
										value=""
										className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 "
									/>
									<label for="checked-checkbox" className="ml-4 text-sm font-medium">
										Seleccione si quiere aplicar la tarifa por libras
									</label>
								</div>
							</div>
						</div>
					)}
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
					disabled={createServicePriceMutation.isLoading || updateServicePriceMutation.isLoading}
					className="rounded-md bg-blue-600 w-32 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{createServicePriceMutation.isLoading || updateServicePriceMutation.isLoading ? (
						<EllipsisHorizontalIcon className="animate-pulse mx-auto h-5 w-5 text-white " />
					) : (
						"Guardar"
					)}
				</button>
			</div>
		</form>
	);
}
