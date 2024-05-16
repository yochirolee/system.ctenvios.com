import { React } from "react";
import { useFetchCategories } from "../../../../Hooks/useCategories";

export const CategoriesCheck = ({ categoriesIds, setSelectedCategoriesIds }) => {
	const { data: categories, isLoading, isError } = useFetchCategories();

	const handleOnChange = (category, e) => {
		if (e.target.checked) {
			setSelectedCategoriesIds([...categoriesIds, category.id]);
		} else {
			const arr = categoriesIds.filter((id) => id !== category.id);
			setSelectedCategoriesIds(arr);
		}
	};

	if (isLoading) return <div>Cargando...</div>;
	if (isError) return <div>Error</div>;

	return (
		<>
			<div className="mt-6 border-b border-gray-900/10 pb-12">
				<h1 className="bg-gray-800 text-white rounded p-2">
					Categorias a enviar por este Servicio
					<b className="px-4">{categoriesIds.length}</b>
				</h1>
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
					{categories?.map((category) => (
						<div key={category.id} className="sm:col-span-3">
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 text-gray-900"
							></label>
							<div className="mt-2">
								<input
									className="rounded-full"
									type="checkbox"
									name="category"
									onChange={(e) => handleOnChange(category, e)}
								/>
								<span className="mx-2 ">{category.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
