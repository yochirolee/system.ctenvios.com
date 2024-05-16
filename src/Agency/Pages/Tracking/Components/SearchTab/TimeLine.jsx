import { React } from "react";

import { Badge } from "@/components/ui/badge";
import { getIcon } from "../../../../../Utils/getIcon";
import { formatDate } from "@/Utils/formatDate";

export const TimeLine = ({ history }) => {
	if (!history) return null;
	return (
		<div className="h-40">
			<ol className="inline-flex  items-center   p-4 w-full mb-4 sm:mb-5">
				{history.map(
					(step, index) =>
						step.createdAt &&
						(index < history.length - 1 ? (
							<li
								key={index}
								className="relative flex  w-full items-center text-gray-600 dark:text-gray-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:gray-blue-800"
							>
								<div className="flex items-center   justify-center w-5 h-5  text-blue-600 ml-6 rounded-full lg:h-5 lg:w-5 dark:bg-gray-700 shrink-0">
									{getIcon(step.locationId)}
								</div>
								<div className="absolute mt-16  flex flex-col items-center">
									<div className="flex flex-col relative items-center text-xs  mt-6">
										<p>{step?.location.name}</p>
										<Badge className="t-2" variant={"ghost"}>
											{step.status}
										</Badge>
										<p className="text-xs">{step?.container}</p>
										<p className="text-xs">{step?.pallet}</p>
										<p className="text-xs">{step?.dispatch}</p>
										<span className="text-slate-600">
											{step.createdAt ? formatDate(step?.createdAt) : ""}
										</span>
									</div>
								</div>
							</li>
						) : (
							<li className="relative flex  items-center w-full">
								<div className="flex items-center ring animate-pulse justify-center w-5 h-5 bg-blue-100 rounded-full lg:h-5 lg:w-5 dark:bg-gray-700 shrink-0">
									{getIcon(step.locationId)}
								</div>

								<div className="absolute mt-16  flex flex-col items-center">
									<div className="flex flex-col items-center text-xs  mt-6">
										<p>{step?.location.name}</p>
										<p className="text-xs">{step?.container}</p>
										<p className="text-xs">{step?.pallet}</p>
										<p className="text-xs">{step?.dispatch}</p>
										<span className="text-slate-600">
											{step.createdAt ? formatDate(step?.createdAt, "MM/dd/y ") : ""}
										</span>
									</div>
								</div>
							</li>
						)),
				)}
			</ol>
		</div>
	);
};
