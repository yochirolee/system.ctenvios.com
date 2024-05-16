import { React, useRef } from "react";
import { LabelQr } from "../InvoiceQr/InvoiceQR";

export const InvoiceLabels = ({ invoice }) => {
	return (
		<div className="print:max-w-xl max-w-sm mx-auto mb-20">
			<div className="border w-[384px] h-[576px] print:w-[384px] print:h-[576px] p-4">
				<div className="flex flex-row items-center justify-between gap-2   ">
					<div className="flex items-left flex-col">
						<div className="inline-flex gap-2">
							<h2>{invoice?.agency?.name}</h2>
							<span className="text-md font-semibold text-slate-600 ">
								{invoice?.service?.serviceType}
							</span>
						</div>

						<p className="font-bold text-2xl my-2">CTE7845125554</p>
					</div>

					<div className="flex flex-col items-center gap-2">
						<div className="h-16 w-16 ">
							<LabelQr invoice={invoice} />
						</div>
						<span className="text-xs text-slate-400">{invoice?.service?.name}</span>
					</div>
				</div>

				<div className="flex flex-col gap-2 mt-6 text-left">
					<span className=" text-xl font-semibold ">Caja de Miscelaneas 22lbs</span>
					<span className="text-xs font-semibold">Peso: 22.00 Lbs / 9.98 Kgs</span>
					<span className="text-xs font-semibold">Envia: Yochiro Lee Cruz</span>
				</div>
				<div className="flex border-t border-dashed  justify-between mt-4 pt-4 ">
					<div className="text-slate-500  flex flex-col gap-2 text-sm">
						<div className="grid grid-cols-8 gap-4  items-center ">
							<span className="col-span-2 text-xs text-right">Recibe:</span>
							<span className="col-span-6 font-semibold text-gray-700">Leidiana Torres Roca</span>
						</div>
						<div className="grid grid-cols-8 gap-4  items-center ">
							<span className="col-span-2 text-xs text-right">CI:</span>
							<span className="col-span-6  text-gray-700">8401112446</span>
						</div>
						<div className="grid grid-cols-8 gap-4  items-center ">
							<span className="col-span-2 text-xs text-right">Telefonos:</span>
							<span className="col-span-6  text-gray-700 ">53798283</span>
						</div>
						<div className="grid grid-cols-8 gap-4  items-center">
							<span className="col-span-2 text-xs text-right">Direccion:</span>
							<span className="col-span-6 text-gray-700">
								Calle 62 entre 23 y 25 no 2307 apto 3, Buena Vista
							</span>
						</div>
						<div className="grid grid-cols-8 gap-4 items-center">
							<span className="col-span-2 text-xs text-right">Provincia:</span>
							<span className="col-span-6  text-gray-700">Santiago de Cuba / Santiago de Cuba</span>
						</div>
					</div>
				</div>
				<div className=" flex justify-between items-center  gap-4 mt-6 pt-2 border-t border-dashed ">
					<span className="text-sm font-bold">Guia Aerea: 777-888-555</span>
					<div className="flex gap-4 justify-end  ">
						<div className="flex flex-col  items-center  ">
							<span className="text-2xl font-semibold text-slate-900 ">{invoice?.id}</span>
							<h3 className=" text-xs text-slate-500">Invoice</h3>
						</div>
						<div className="flex flex-col  items-center  ">
							<span className="text-2xl font-semibold text-slate-900 ">
								{invoice?.packages?.length}-3
							</span>
							<h3 className=" text-xs text-slate-500">Pack</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
