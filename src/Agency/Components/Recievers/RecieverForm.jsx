import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useAuth } from "../../../Auth/Hooks/useAuth";
import apiServices from "../../Api/apiServices";
import { StatesSelect } from "../ui/StatesSelect";
import { CitySelect } from "../ui/CitySelect";

const schema = yup.object().shape({
	firstName: yup.string().min(2, "El nombre es Requerido").max(80).required(),
	lastName: yup.string().min(2, "Los Apellidos son Requeridos").max(80).required(),
	mobile: yup
		.string()
		.min(8, "Debe tener 10 digitos")
		.max(8, "Debe tener 10 digitos")
		.matches("^[0-9]+$", "Debe ser un numero de telefono valido")
		.required(),
	ci: yup
		.string()
		.min(11, "El CI debe tener 11 digitos")
		.max(11, "El CI debe tener 11 digitos")
		.matches("^[0-9]+$", "Debe ser un numero de CI valido")
		.required(),
	email: yup.string().email("Debe ser un correo valido"),
	address: yup.string().min(10).required(),
});

export default function RecieverForm({ setIsOpen, setSelected }) {
	const { currentUser } = useAuth();
	const [selectedState, setSelectedState] = useState({});
	const [selectedCity, setSelectedCity] = useState({});
	const mutationCreate = useMutation("createReciever", (data) =>
		apiServices.recievers.createReciever(data),
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		data.agencyId = currentUser.agencyId;
		data.stateId = selectedState.id;
		data.cityId = selectedCity.id;

		mutationCreate.mutate(data, {
			onSuccess: (result) => {
				// Invalidate and refetch

				setSelected(result);
				setIsOpen(false);
			},
			onError: (error) => {
				throw new Error(error.message);
			},
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className=" ">
				{mutationCreate.isError ? (
					<div>An error occurred: {mutationCreate.error.message}</div>
				) : null}
				<div className="border-b border-gray-900/10 ">
					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="firstName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Nombre - Segundo Nombre
							</label>
							<div className="mt-2">
								<input
									{...register("firstName", { required: "El Nombre es Requerido" })}
									type="text"
									name="firstName"
									id="firstName"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.firstName && (
									<p className="text-red-500 text-xs ">{errors.firstName?.message}</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="lastName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Apellidos
							</label>
							<div className="mt-2">
								<input
									{...register("lastName", { required: "El Apellido es Requerido" })}
									type="text"
									name="lastName"
									id="lastName"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.lastName && (
									<p className="text-red-500 text-xs ">{errors.lastName?.message}</p>
								)}
							</div>
						</div>
						<div className="sm:col-span-3">
							<label htmlFor="ci" className="block text-sm font-medium leading-6 text-gray-900">
								Carne de Identidad
							</label>
							<div className="mt-2">
								<input
									{...register("ci")}
									type="text"
									name="ci"
									id="ci"
									placeholder="00000000000"
									autoComplete="given-ci"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.ci && <p className="text-red-500 text-xs ">{errors.ci?.message}</p>}
							</div>
						</div>
						<div className="sm:col-span-3">
							<label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
								Movil
							</label>
							<div className="mt-2">
								<input
									{...register("mobile")}
									type="text"
									name="mobile"
									id="mobile"
									placeholder="999-999-9999"
									autoComplete="given-mobile"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-3">
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Correo Electronico
							</label>
							<div className="mt-2">
								<input
									{...register("email")}
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.email && <p className="text-red-500 text-xs ">{errors.email?.message}</p>}
							</div>
						</div>
						<div className="sm:col-span-3">
							<label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
								Telefono Fijo
							</label>
							<div className="mt-2">
								<input
									{...register("phone")}
									type="tel"
									name="phone"
									id="phone"
									placeholder="999-999-9999"
									autoComplete="given-phone"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="street-address"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Direccion Actual
							</label>
							<div className="mt-2">
								<input
									{...register("address", { required: "La Direccion es Requerida" })}
									type="text"
									name="address"
									id="address"
									autoComplete="address"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
								<div className="mt-2">
									{errors.address && (
										<p className="text-red-500 text-xs ">{errors.address?.message}</p>
									)}
								</div>
							</div>
						</div>
						<div className="col-span-full grid  grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label
									htmlFor="state"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Provincia
								</label>
								<div className="mt-2 relative">
									<StatesSelect selected={selectedState} setSelected={setSelectedState} />
								</div>
							</div>
							<div className="sm:col-span-3 ">
								<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
									Municipio
								</label>
								<div className="mt-2">
									<CitySelect
										cities={selectedState.cities}
										selected={selectedCity}
										setSelected={setSelectedCity}
									/>
								</div>
							</div>
						</div>

						<div className="sm:col-span-3 h-20 sm:col-start-1"></div>
					</div>
				</div>
			</div>

			<div className=" flex items-center my-4 justify-end gap-x-6">
				<button
					onClick={() => setIsOpen(false)}
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{mutationCreate.isLoading ? "Guardando..." : "Guardar "}
				</button>
			</div>
		</form>
	);
}
