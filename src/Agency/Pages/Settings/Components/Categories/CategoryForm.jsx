import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateCategory } from "../../../../Hooks/useCategories";

const schema = yup.object().shape({
	name: yup.string().min(2).max(80).required(),
});

export const CategoryForm = ({ setIsOpen }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const createCategoryMutation = useCreateCategory(setIsOpen);

	const onSubmit = (data) => {
		console.log(data, "data to submit");
		createCategoryMutation.mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className=" ">
				{createCategoryMutation.isError ? (
					<div>An error occurred: {createCategoryMutation.error.message}</div>
				) : null}

				<div className="border-b border-gray-900/10 pb-12">
					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
						<div className="sm:col-span-6">
							<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
								Nombre
							</label>
							<div className="mt-2">
								<input
									{...register("name")}
									type="text"
									name="name"
									id="name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div className="mt-2">
								{errors.name && <p className="text-red-500 text-xs ">{errors.name?.message}</p>}
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
					className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{createCategoryMutation.isLoading ? "Guardando..." : "Guardar"}
				</button>
			</div>
		</form>
	);
};
