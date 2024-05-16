import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { React, useState } from "react";
import SlideOver from "../../../../Components/ui/SlideOver";
import CategoryPriceForm from "./_CategoryPriceForm";
import apiServices from "../../../../Api/apiServices";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../../Hooks/queryKeys";
import { ListCategoriesPrices } from "./_ListCategoriesPrices";

export const CategoriesPrices = ({ selectedCategory }) => {
	const [isOpen, setIsOpen] = useState(false);

	const queryClient = useQueryClient();

	
	const deleteMutation = useMutation({
		mutationFn: (id) => apiServices.categoriesPrices.deleteCategoryPrice(id),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.fetchServicesByProviderId]);
		},
	});

	return (
		<>
			{selectedCategory ? (
				<div className=" mx-auto max-w-7xl  sm:px-6 lg:px-8 ">
					<div className="flex justify-between">
						<span className="font-semibold ">{selectedCategory?.name}</span>
						<button
							onClick={() => setIsOpen(true)}
							className="flex  gap-2 ring-inset text-sm border px-2 py-1 rounded-lg text-slate-600"
						>
							<CurrencyDollarIcon className="w-5 h-5"></CurrencyDollarIcon>
							Nueva Tarifa
						</button>
					</div>
					<div>
						{selectedCategory?.categoriesPrices?.map((rate) => (
							<ListCategoriesPrices rate={rate} deleteMutation={deleteMutation} />
						))}
					</div>
				</div>
			) : (
				<div class="mx-auto max-w-7xl  sm:px-6 lg:px-8">
					<div class="px-4 py-6 sm:px-0">
						<div class="relative  h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
							<svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
								<defs>
									<pattern
										id="pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a"
										x="0"
										y="0"
										width="10"
										height="10"
										patternUnits="userSpaceOnUse"
									>
										<path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
									</pattern>
								</defs>
								<rect
									stroke="none"
									fill="url(#pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a)"
									width="100%"
									height="100%"
								></rect>
							</svg>
							<div className="">Seleccione una Categoria o Cree una Nueva</div>
						</div>
					</div>
				</div>
			)}

			<SlideOver isOpen={isOpen} setIsOpen={setIsOpen}>
				<CategoryPriceForm setIsOpen={setIsOpen} selectedCategory={selectedCategory} />
			</SlideOver>
		</>
	);
};
