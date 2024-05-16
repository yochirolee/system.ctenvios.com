import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import EmployessRolesSelect from "./EmployeesRolesSelect";
import { useCreateEmployee, useUpdateEmployee } from "../../Hooks/useEmployees";



export default function EmployeeForm({
	setIsOpen,
	selectedAgency,
	selectedEmployee,
	isEditing = false,
}) {
	if (!selectedAgency) return null;

	const [selectedRole, setSelectedRole] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const {
		register,
		handleSubmit,
		reset,

		formState: { errors },
	} = useForm();

	const createEmployeeMutation = useCreateEmployee(setIsOpen);

	const updateEmployeeMutation = useUpdateEmployee(setIsOpen);
	const onSubmit = async (data) => {
		data.roleId = selectedRole?.id;
		data.agencyId = selectedAgency.id;

		if (isEditing) {
			data.id = selectedEmployee.id;
			data.roleId = selectedRole?.id;
			updateEmployeeMutation.mutate(data);
			return;
		}

		try {
			createEmployeeMutation.mutate(data);
		} catch (err) {
			console.error(JSON.stringify(err, null, 2), "uknow error");
			//setErrorMessage(err.errors[0].longMessage);
		}
	};

	useEffect(() => {
		if (isEditing && selectedEmployee) {
			reset(selectedEmployee);
		}
	}, []);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className=" ">
					<div className="border-b border-gray-900/10 pb-12">
						<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label
									htmlFor="firstName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Nombre
								</label>
								<div className="mt-2">
									<input
										{...register("firstName", { required: "El Nombre es Requerido" })}
										type="text"
										name="firstName"
										id="firstName"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.firstName && (
										<p className="text-xs text-red-500 ">{errors.firstName?.message}</p>
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
										{...register("lastName", { required: "Los apellidos son Requeridos" })}
										type="text"
										name="lastName"
										id="lastName"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.lastName && (
										<p className="text-xs text-red-500 ">{errors.lastName?.message}</p>
									)}
								</div>
							</div>

							<div className="sm:col-span-3">
								<label
									htmlFor="firstName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Telefono Movil
								</label>
								<div className="mt-2">
									<input
										{...register("mobile", { required: "El Movil es Requerido" })}
										type="tel"
										name="mobile"
										id="mobile"
										placeholder="999-999-9999"
										autoComplete="given-mobile"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.mobile && (
										<p className="text-xs text-red-500 ">{errors.mobile?.message}</p>
									)}
								</div>
							</div>

							<div className={`sm:col-span-4 ${isEditing ? "hidden" : ""}`}>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Correo Electronico
								</label>
								<div className="mt-2">
									<input
										{...register("email", !isEditing ? { required: "El Email es Requerido" } : {})}
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.email && <p className="text-xs text-red-500 ">{errors.email?.message}</p>}
								</div>
							</div>
							<div className={`sm:col-span-4 ${isEditing ? "hidden" : ""}`}>
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="mt-2">
									<input
										{...register(
											"password",
											!isEditing ? { required: "El Email es Requerido" } : {},
										)}
										id="password"
										name="password"
										type="password"
										autoComplete="password"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<div className="mt-2">
									{errors.password && (
										<p className="text-xs text-red-500 ">{errors.password?.message}</p>
									)}
								</div>
							</div>
							<div className="sm:col-span-2 relative sm:col-start-1">
								<label
									htmlFor="firstName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Rol
								</label>
								<div className="mt-2">
									<EmployessRolesSelect selected={selectedRole} setSelected={setSelectedRole} />
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
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
									<div className="mt-2">
										{errors.address && (
											<p className="text-xs text-red-500 ">{errors.address?.message}</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{errorMessage && <p className="text-xs text-red-500 mt-2">{errorMessage}</p>}
				{createEmployeeMutation.isError && (
					<div className="text-bold text-red-500 mt-2">{createEmployeeMutation.error.message}</div>
				)}

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
							createEmployeeMutation.isLoading || updateEmployeeMutation.isLoading 
						}
						className="rounded-md bg-blue-600 w-32 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						{createEmployeeMutation.isLoading || updateEmployeeMutation.isLoading  ? (
							<EllipsisHorizontalIcon className="animate-pulse mx-auto h-5 w-5 text-white " />
						) : (
							"Guardar"
						)}
					</button>
				</div>
			</form>

			{/* 	{pendingVerification && (
				<div>
					<form>
						<div className="inline-flex items-center bg-green-50 w-full rounded-xl shadow-md my-4">
							<InformationCircleIcon className="mx-4 h-6 w-6 text-green-600" />
							<div className="flex flex-col p-4 ">
								<h3 className="font-bold text-gray-600">Confirmacion de Correo Requerida</h3>
								<p className="text-sm text-gray-500">
									Se ha enviado un correo de confirmacion a {userToCreate?.email}
								</p>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
								Codigo de Confirmacion
							</label>
							<input
								className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								value={code}
								placeholder="Code..."
								onChange={(e) => setCode(e.target.value)}
							/>
							{errorMessage && <p className="text-xs text-red-500 mt-2">{errorMessage}</p>}
						</div>

						<button
							className="rounded-md mt-2 bg-blue-600 w-32 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							onClick={onPressVerify}
						>
							Verificar Correo
						</button>
					</form>
				</div>
			)} */}
		</>
	);
}
