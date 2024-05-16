import { React, useRef } from "react";
import { useFetchInvoiceById } from "../../Hooks/useInvoices";
import { useParams } from "react-router-dom";
import { InvoicePackageList } from "./Components/InvoicePackageList";
import { CustomerRecieverDetails } from "./Components/CustomerRecieverDetails";
import { InvoiceTitle } from "./Components/InvoiceTitle";
import { PaymentForm } from "./Components/Payment/PaymentForm";
import { PaymentHistory } from "./Components/Payment/PaymentHistory";
import { PrinterIcon, TrashIcon } from "@heroicons/react/24/outline";
import { WalletIcon } from "@heroicons/react/24/solid";
import ReactToPrint from "react-to-print";
import { PrintLabels } from "./PrintLabels";

export const InvoiceDetails = () => {
	const params = useParams();
	const invoiceRef = useRef();
	const { data: invoice, isLoading, isError } = useFetchInvoiceById(params.id);
	if (isLoading) return <div>Loading...</div>;
	if (!invoice) return <div>Invoice not found</div>;
	if (isError) return <div>Something gone Wrong</div>;

	const { customer, reciever } = invoice ? invoice : {};

	return (
		<>
			<div className="print:grid-cols-1 grid grid-flow-cols lg:grid-cols-3 md:gap-6 lg:gap-10 xl:gap-20 ">
				<div className=" col-span-2 lg:py-6  rounded-lg border-slate-200/50">
					<div className="print:max-w-2xl print:mx-auto print:px-2 print:py-6" ref={invoiceRef}>
						<InvoiceTitle invoice={invoice} />
						<CustomerRecieverDetails customer={customer} reciever={reciever} />

						<InvoicePackageList invoice={invoice} />
					</div>
					<div className="flex justify-between py-4  border-gray-300 border-dashed my-4 border-t items-center">
						<div className="  justify-center flex gap-2">
							<ReactToPrint
								trigger={() => (
									<button className="inline-flex gap-2 border rounded-lg text-sm p-2 bg-blue-500 text-white">
										<PrinterIcon className="inline-flex h-5 w-5" />
										Factura
									</button>
								)}
								content={() => invoiceRef.current}
							></ReactToPrint>

							<PrintLabels invoice={invoice} />
							<button className="inline-flex gap-2 border rounded-lg text-sm p-2 bg-yellow-600 text-white">
								<PrinterIcon className="inline-flex h-5 w-5" />
								BLS
							</button>
						</div>
						<div className="flex gap-2">
							<button className="inline-flex gap-2 border rounded-lg text-sm p-2 bg-green-600 text-white">
								<WalletIcon className="inline-flex h-5 w-5" />
								Editar
							</button>
							<button className="inline-flex gap-2 border rounded-lg text-sm p-2 bg-red-600 text-white">
								<TrashIcon className="inline-flex h-5 w-5" />
								Eliminar
							</button>
						</div>
					</div>
				</div>
				<div className=" print:hidden col-span-1 md:flex lg:flex-col ">
					<div className="p-2 rounded-lg bg-gray-50 ">
						{!invoice.isPaid ? (
							<>
								<PaymentForm invoice={invoice} />
								{invoice.payments.length > 0 && <PaymentHistory invoice={invoice} />}
							</>
						) : (
							<PaymentHistory invoice={invoice} />
						)}
					</div>
				</div>
			</div>
		</>
	);
};
