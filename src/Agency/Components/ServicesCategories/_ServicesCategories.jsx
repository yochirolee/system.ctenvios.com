import { React } from "react";
import { useFetchServicesCategoriesByServiceId } from "../../Hooks/useCategories";
export const ServicesCategories = ({ service }) => {
	const {
		data: servicesCategories,
		isLoading,
		isError,
	} = useFetchServicesCategoriesByServiceId(service.id);

	console.log(servicesCategories, "servicesCategories");
	return (
		<>
			<h1> ServicesCategories</h1>
			<div>
				{servicesCategories?.map((category) => (
					<div key={category.id}>
						<h1>{category.name}</h1>
						<div>
							{category.categoriesPrices.map((subCategory) => (
								<div key={subCategory.id}>
									<h1>{subCategory.name}</h1>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};
