import { React } from "react";
export const CategoriesNotFound = () => {
	return (
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
					<div className="">Cree una Nueva Categoria</div>
				</div>
			</div>
		</div>
	);
};
