import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { React, useState } from "react";
import { CategoriesSelect } from "./_CategoriesSelect";
import { CategoriesPrices } from "./_CategoriesPrices";

import { useFetchCategories } from "../../../../Hooks/useCategories";
import { CategoriesList } from "./CategoriesList";
import { CategoriesNotFound } from "./CategoriesNotFound";
import Modal from "../../../../Components/ui/Modal";
import { CategoryForm } from "./CategoryForm";

export const CategoriesTab = () => {
	const { data: categories } = useFetchCategories();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mx-auto max-w-7xl mt-6  sm:px-6 lg:px-8">
			<button
				onClick={() => setIsOpen(true)}
				className="inline-flex gap-2  text-blue-500 ring-blue-100 ring-1 ring-inset text-sm border px-2 py-2 rounded-lg "
			>
				<SquaresPlusIcon className="w-5 h-5" />
				Crear Categoria
			</button>

			{categories ? <CategoriesList categories={categories} /> : <CategoriesNotFound />}

			{
				<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Crear Categoria">
					<CategoryForm setIsOpen={setIsOpen} />
				</Modal>
			}
		</div>
	);
};
