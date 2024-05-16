import {
	BanknotesIcon,
	BuildingLibraryIcon,
	CreditCardIcon,
	DevicePhoneMobileIcon,
	TicketIcon,
} from "@heroicons/react/24/outline";

import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
import { React } from "react";
import { formatDate } from "../../../../../Utils/formatDate";

const icons = [
	<div></div>,
	<BanknotesIcon className="h-5 w-5 text-gray-400" />,
	<CreditCardIcon className="h-5 w-5 text-gray-400" />,
	<CreditCardIcon className="h-5 w-5 text-gray-400" />,
	<TicketIcon className="h-5 w-5 text-gray-400" />,
	<DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />,
	<BuildingLibraryIcon className="h-5 w-5 text-gray-400" />,
];
export const PaymentHistory = ({ invoice }) => {
	if (!invoice) return <div></div>;
	return (
		<div className=" p-2">
			{invoice?.isPaid && (
				<div className="lg:p-4  items-center font-bold text-green-600 text-xl text-center">Pagada</div>
			)}
			<div>
				<span className="text-sm ">Historial de Pagos:</span>

				<ul role="list" className="2xl:px-8 py-4 grid  gap-2 border-t ">
					{invoice.payments.map((payment) => (
						<li className="grid grid-cols-6 p-2 bg-white rounded-lg  border  items-center  ">
							<p className="h-5 w-5 text-gray-400">{icons[payment?.paymentMethodId]}</p>
							<div className="flex flex-col col-span-4 ">
								<div className="text-slate-500 font-medium text-xs ">
									{payment?.paymentMethod?.name}
								</div>
								<div className="text-slate-500 text-xs ">{formatDate(payment?.createdAt)}</div>
							</div>
							<div className="text-slate-500 text-sm ">
								${parseFloat(payment?.amount).toFixed(2)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
