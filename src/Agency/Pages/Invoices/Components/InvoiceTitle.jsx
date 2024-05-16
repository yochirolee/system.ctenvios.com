import { React } from "react";
import { InvoiceQR } from "./InvoiceQr/InvoiceQR";
import { formatDate } from "../../../../Utils/formatDate";
export const InvoiceTitle = ({ invoice }) => {
	return (
		<div>
			<div className="flex justify-between items-center border-gray-200 py-2">
				<h2 className="font-semibold text-2xl">{invoice?.agency?.name}</h2>
				<div className=" flex flex-col  items-center ">
					<div className="inline-flex gap-4  flex-row items-center">
						<div className="flex items-center flex-col">
							<span className="text-2xl font-semibold text-slate-400 ">
								{invoice?.service?.serviceType}
							</span>
							<span className="text-xs text-slate-400">{invoice?.service?.name}</span>
						</div>
						<div className="flex flex-col  items-center  ">
							<span className="text-2xl font-semibold text-slate-900 ">{invoice?.id}</span>
							<h3 className=" text-xs text-slate-500">Invoice</h3>
						</div>
						<div className="flex flex-col  items-center  ">
							<span className="text-2xl font-semibold text-slate-900 ">
								{invoice?.packages?.length}
							</span>
							<h3 className=" text-xs text-slate-500">Packages</h3>
						</div>
						<div className="h-10 w-10 ">
							<InvoiceQR invoice={invoice} />
						</div>
					</div>
				</div>
			</div>

			<div className="flex   justify-between my-8 ">
				<div className="text-slate-500 gap-1 flex flex-col text-xs">
					<div className="grid grid-cols-8 gap-4  ">
						<span className="col-span-2">Address:</span>
						<span className="col-span-6">{invoice.agency.address}</span>
					</div>
					<div className="grid grid-cols-8 gap-4  ">
						<span className="col-span-2">Phone:</span>
						<span className="col-span-6">{invoice.agency.phone}</span>
					</div>
					<div className="grid grid-cols-8 gap-4">
						<span className="col-span-2">Mail:</span>
						<span className="col-span-6">{invoice.agency.email}</span>
					</div>
				</div>
				<div className="flex  flex-col text-slate-500">
					<div className="flex   gap-4 text-xs ">
						<span className="col-span-2">Due by:</span>
						<span className="col-span-6 text-left">
							{invoice?.employee?.firstName + " " + invoice?.employee?.lastName}
						</span>
					</div>
					<div className="flex   gap-4 text-xs ">
						<span className="col-span-2">Due on:</span>
						<span className="col-span-6 text-left">{formatDate(invoice?.createdAt)}</span>
					</div>
					{!invoice?.isPaid ? (
						<span className="  text-center my-2 items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
							Pendiente de Pago
						</span>
					) : (
						<span className="text-center my-2 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
							Pagada
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
