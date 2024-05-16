import React, { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { useFetchInvoiceById } from "../../Hooks/useInvoices";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

const Label = React.forwardRef(({ invoice }, ref) => {
	if (!invoice) return <div></div>;

	return (
		<div ref={ref} className=" print:block hidden print:mx-auto print:w-[384px]  h-[576px]">
			{invoice.packages.map((pack, index) => (
				<>
					<div
						key={pack.id}
						className="print:block    print:break-before-page p-4  w-[384px] print:mx-auto  h-[570px]  "
					>
						<div className="grid grid-cols-2 ">
							<h2 className="font-medium">{invoice?.agency?.name}</h2>{" "}
							<div className="flex flex-col text-right  ">
								<span className="">{invoice?.service?.name}</span>
								<span className="font-medium ">{invoice?.service?.serviceType}</span>
							</div>
						</div>
						<h3 className="inline-flex items-center  my-4 font-semibold text-2xl ">
							<span className="text-sm mr-2 mt-1">HBL:</span> {pack?.hbl}
						</h3>
						<div className="flex flex-col gap-2  text-left">
							<span className=" text-lg font-semibold ">{pack?.description}</span>
							<span className="text-xs font-semibold">
								Peso: {parseFloat(pack?.weight).toFixed(2)} Lbs /{" "}
								{parseFloat(pack?.weight / 2.2).toFixed(2)} Kgs
							</span>
							<span className="text-xs font-semibold">
								Envia: {invoice.customer.firstName + " " + invoice?.customer.lastName}
							</span>
						</div>
						<div className="flex border-t border-dashed  justify-between mt-4 pt-4 ">
							<div className="  flex flex-col gap-2 text-sm">
								<div className="grid grid-cols-8 gap-4  items-center ">
									<span className="col-span-2 text-xs text-right">Recibe:</span>
									<span className="col-span-6 font-semibold">
										{invoice.reciever.firstName + " " + invoice?.reciever.lastName}
									</span>
								</div>
								<div className="grid grid-cols-8 gap-4  items-center ">
									<span className="col-span-2 text-xs text-right">CI:</span>
									<span className="col-span-6  ">{invoice?.reciever?.ci}</span>
								</div>
								<div className="grid grid-cols-8 gap-4  items-center ">
									<span className="col-span-2 text-xs text-right">Telefonos:</span>
									<span className="col-span-6  ">{invoice?.reciever?.mobile}</span>
								</div>
								<div className="grid grid-cols-8 gap-4  items-center">
									<span className="col-span-2 text-xs text-right">Direccion:</span>
									<span className="col-span-6 ">{invoice?.reciever?.address}</span>
								</div>
								<div className="grid grid-cols-8 gap-4 items-center">
									<span className="col-span-2 text-xs text-right">Provincia:</span>
									<span className="col-span-6">
										{invoice?.reciever?.state?.name} / {invoice?.reciever?.city?.name}
									</span>
								</div>
							</div>
						</div>
						<div className=" grid grid-cols-2  pt-6  items-center  gap-4 mt-6 border-t border-dashed ">
							<div className="flex flex-col mx-auto text-center my-auto  ">
								<QRCode value={JSON.stringify(pack?.hbl)} size={100} />
								<span className="text-xs my-2">{invoice?.service?.name}</span>
							</div>
							<div className="flex flex-col items-end gap-2 justify-end  ">
								<div className="flex flex-col  items-center  ">
									<span className="text-2xl font-semibold  border border-1 border-gray-900 p-2 ">
										{pack?.id}
									</span>
								</div>

								<div className="inline-flex gap-4 ">
									<div className="flex flex-col  items-center  ">
										<span className="text-2xl   ">{invoice?.id}</span>
										<h3 className=" text-xs ">Invoice</h3>
									</div>
									<div className="flex flex-col  items-center  ">
										<span className="text-2xl  ">
											{index + 1}-{invoice?.packages?.length}
										</span>
										<h3 className=" text-xs">Pack</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						key={pack.id}
						className="grid grid-rows-10  border print:break-before-page p-4  w-[384px] print:mx-auto max-h-[570px]  h-[570px]  "
					>
						<div className="row-span-2">
							<div className="grid  grid-cols-2 items-center ">
								<h3 className="inline-flex items-center gap-2 font-semibold text-xl ">
									<span className="text-sm mt-1">HBL:</span> {pack?.hbl}
								</h3>

								<div className="flex flex-col text-right  ">
									<span className="font-medium text-4xl">{invoice?.reciever?.state?.id}</span>
									<span className="font-medium ">{invoice?.service?.serviceType}</span>
								</div>
							</div>
						</div>
						<div className="row-span-4 border-b items-center flex border-t border-dashed  justify-center  py-10  ">
							<div className="  flex flex-col text-center  gap-2">
								<span className="text-center font-medium text-5xl">
									{invoice?.reciever?.state?.name}
								</span>
								<span className="text-center font-medium  text-4xl">
									{invoice?.reciever?.city?.name}
								</span>
							</div>
						</div>
						<div className="flex  justify-between items-center  ">
							<QRCode value={JSON.stringify(pack?.hbl)} size={50} />
							<div className="flex flex-col items-end gap-2 justify-end  ">
								<div className="flex flex-col  items-center  ">
									<span className="text-2xl font-semibold border border-1 border-gray-900 p-2 ">
										{pack?.id}
									</span>
								</div>

								<div className="inline-flex gap-4 ">
									<div className="flex flex-col  items-center  ">
										<span className="text-2xl   ">{invoice?.id}</span>
										<h3 className=" text-xs ">Invoice</h3>
									</div>
									<div className="flex flex-col  items-center  ">
										<span className="text-2xl  ">
											{index + 1}-{invoice?.packages?.length}
										</span>
										<h3 className=" text-xs">Pack</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
});

export const PrintLabels = () => {
	const componentRef = useRef();
	const params = useParams();
	const { data: invoice, isLoading, isError } = useFetchInvoiceById(params.id);
	return (
		<div>
			<ReactToPrint
				trigger={() => (
					<button className="inline-flex gap-2 border rounded-lg text-sm p-2 bg-indigo-700 text-white">
						<PrinterIcon className="inline-flex h-5 w-5" />
						Etiquetas
					</button>
				)}
				content={() => componentRef.current}
			/>
			<Label invoice={invoice} ref={componentRef} />
		</div>
	);
};
