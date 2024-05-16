import { useForm } from "react-hook-form";
import { Button } from "@tremor/react";
import { useCreateProvider } from "../../../../../Hooks/Providers/useProviders";

export default function ProviderForm({ setIsOpen, isEditing = false }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const createProviderMutation = useCreateProvider(setIsOpen);

	const onSubmit = async (data) => {
		console.log(data);

		createProviderMutation.mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{createProviderMutation.isError ? (
				<div className="text-bold text-red-500">{createProviderMutation.error.message}</div>
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
								Telefono de Contacto
							</label>
							<div className="mt-2">
								<input
									{...register("phone", { required: "EL Telefono  es Requerido" })}
									type="number"
									name="phone"
									id="phone"
									autoComplete="given-phone"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.providerPhone && (
									<p className="text-xs text-red-500 ">{errors.phone?.message}</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="address"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Direccion
							</label>
							<div className="mt-2">
								<input
									{...register("address", { required: "La direccion es Requerida" })}
									type="text"
									name="address"
									id="address"
									autoComplete="given-address"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.address && (
									<p className="text-xs text-red-500 ">{errors.address?.message}</p>
								)}
							</div>
						</div>
						<div className="sm:col-span-3">
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Correo de Contacto
							</label>
							<div className="mt-2">
								<input
									{...register("email", { required: "El Email es Requerido" })}
									type="tel"
									name="email"
									id="email"
									placeholder="provider@example.com"
									autoComplete="given-email"
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
					loading={createProviderMutation.isLoading}
					disabled={createProviderMutation.isLoading}
				>
					Guardar
				</Button>
			</div>
		</form>
	);
}
