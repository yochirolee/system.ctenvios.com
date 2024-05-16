import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../Hooks/queryKeys";

import { Button } from "@tremor/react";
import apiServices from "@/Agency/Api";

export default function ProviderForm({ setIsOpen, isEditing = false }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const queryClient = useQueryClient();
	const createServiceMutation = useMutation({
		mutationFn: (newServiceProvider) =>
			apiServices.servicesProviders.createServiceProvider(newServiceProvider),
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.fetchServicesProviders);
			setIsOpen(false);
		},
	});

	const updateServiceMutation = useMutation({
		mutationFn: (service) => apiServices.servicesProviders.updateServiceProvider(service),
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.fetchServices);
			if (!updateServiceMutation.isError) setIsOpen(false);
		},
	});

	const onSubmit = async (data) => {
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
					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
								Nombre del Proveedor
							</label>
							<div className="mt-2">
								<input
									{...register("providerName", { required: "El Nombre es Requerido" })}
									type="text"
									name="providerName"
									id="providerName"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.providerName && (
									<p className="text-xs text-red-500 ">{errors.providerName?.message}</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="description"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Telefono de Contacto
							</label>
							<div className="mt-2">
								<input
									{...register("providerPhone", { required: "EL Telefono  es Requerido" })}
									type="number"
									name="providerPhone"
									id="providerPhone"
									autoComplete="given-phone"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.providerPhone && (
									<p className="text-xs text-red-500 ">{errors.providerPhone?.message}</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="providerAddress"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Direccion
							</label>
							<div className="mt-2">
								<input
									{...register("providerAddress", { required: "La direccion es Requerida" })}
									type="text"
									name="providerAddress"
									id="providerAddress"
									autoComplete="given-providerAddress"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.providerAddress && (
									<p className="text-xs text-red-500 ">{errors.providerAddress?.message}</p>
								)}
							</div>
						</div>
						<div className="sm:col-span-3">
							<label
								htmlFor="providerEmail"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Correo de Contacto
							</label>
							<div className="mt-2">
								<input
									{...register("providerEmail", { required: "El Email es Requerido" })}
									type="tel"
									name="providerEmail"
									id="providerEmail"
									placeholder="provider@example.com"
									autoComplete="given-providerEmail"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
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

				<Button
					loading={createServiceMutation.isLoading || updateServiceMutation.isLoading}
					disabled={createServiceMutation.isLoading || updateServiceMutation.isLoading}
				>
					Guardar
				</Button>
			</div>
		</form>
	);
}
