import { React } from "react";
export const CategoriesList = ({ categories }) => {
	return (
		<div class="px-4 py-6 sm:px-0">
			<div class="relative  h-96 overflow-y-auto rounded-xl border border-dashed border-gray-400 opacity-75">
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
				<div className="">
					{categories.map((category) => (
						<div className="flex items-center border  p-8 bg-white gap-2">
							<h3 className="">{category.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
