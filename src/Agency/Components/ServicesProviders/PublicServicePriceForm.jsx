import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../Hooks/queryKeys";
import apiServices from "../../Api/apiServices";
import { useEffect } from "react";

export default function PublicServicePriceForm({ setIsOpen, servicePrice }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const queryClient = useQueryClient();

	const updateServicePriceMutation = useMutation({
		mutationFn: (servicePrice) => apiServices.servicesPrices.updateServicePrice(servicePrice),
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.fetchServicesByAgency);
			if (!updateServicePriceMutation.isError) setIsOpen(false);
		},
	});

	useEffect(() => {
		reset({ publicPrice: servicePrice.publicPrice ? servicePrice.publicPrice : 0 });
	}, []);

	const onSubmit = (data) => {
		servicePrice.publicPrice = parseFloat(data.publicPrice ? data.publicPrice : 0);
		updateServicePriceMutation.mutate(servicePrice);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{updateServicePriceMutation.isError ? (
				<div className="text-bold text-red-500">{updateServicePriceMutation.error.message}</div>
			) : (
				""
			)}
			<div>
				<div className="border-b pb-12">
					<div className="inline-flex items-center border-b">
						<h1 className=" rounded p-2">Crear Tarifa Publica para:</h1>

						<p className="block text-lg  font-medium leading-6 text-blue-600/80">
							<b className="px-2">{servicePrice.name}</b>
						</p>
					</div>

					{servicePrice && (
						<div className="mt-6 flex flex-col gap-x-6 gap-y-4 sm:grid-cols-6">
							<div className="flex items-center gap-4">
								<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
									Precio de Costo:
								</label>
								<div className="inline-flex gap-2">
									<b>{servicePrice.agencyPrice} </b>
									<p>usd</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
									Tipo de Venta:
								</label>
								<div className="inline-flex gap-2">
									<b>{servicePrice.isSellByPounds ? "Lbs" : "Unitario"} </b>
								</div>
							</div>
							<div className="sm:col-span-3">
								<label
									htmlFor="providerName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Precio de Venta Publico
								</label>
								<div className="mt-2">
									<input
										{...register("publicPrice", { required: "El Precio de Venta es Requerido" })}
										type="number"
										name="publicPrice"
										id="publicPrice"
										step="any"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.publicPrice && (
										<p className="text-xs text-red-500 ">{errors.publicPrice?.message}</p>
									)}
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
					disabled={updateServicePriceMutation.isLoading}
					className="rounded-md bg-blue-600 w-32 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{updateServicePriceMutation.isLoading ? (
						<EllipsisHorizontalIcon className="animate-pulse mx-auto h-5 w-5 text-white " />
					) : (
						"Guardar"
					)}
				</button>
			</div>
		</form>
	);
}
