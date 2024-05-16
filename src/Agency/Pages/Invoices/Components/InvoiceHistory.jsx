import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { React } from "react";
export const InvoiceHistory = () => {
	return (
		<div className="my-6 p-4">
			<h3 className="text-sm mb-4 font-semibold">Historial</h3>
			<div className="">
				<ul role="list" className=" grid grid-flow-row gap-6 ">
					<li className="grid grid-cols-10 items-center gap-2">
						<div className="col-span-1 ">
							<CheckCircleIcon className="h-4 w-4 text-gray-400" />
						</div>
						<div className="inline-flex text-xs text-slate-500 font-medium items-center gap-4 col-span-6">
							Yulima Subirat
							<span className="text-xs font-normal">Creo la Factura</span>
						</div>
						<div className="col-span-3 text-xs">January 31, 2023</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
