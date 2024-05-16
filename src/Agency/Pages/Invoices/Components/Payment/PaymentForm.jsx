import { useState } from "react";
import {  useForm } from "react-hook-form";
import { CurrencyDollarIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { React } from "react";
import { SelectPaymentMethod } from "./SelectPaymentMethod";
import { usePayInvoice } from "../../../../Hooks/useInvoices";

export const PaymentForm = ({ invoice }) => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

	const payInvoiceMutation = usePayInvoice();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.paymendMethodId = selectedPaymentMethod.id;
		data.id = invoice.id;
		payInvoiceMutation.mutate(data);
		reset();
		setSelectedPaymentMethod(null);
	};
	console.log(errors);

	return (
		<div className="">
			<div className="flex my-4 justify-between">
				<h3 className="font-semibold">Total a Pagar</h3>
				<h3 className="font-semibold">${parseFloat(invoice.amountToPay).toFixed(2)}</h3>
			</div>
			<div className="flex items-center justify-between">
				<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
					Pendiente de Pago
				</span>
				<h3>${parseFloat(invoice?.amountToPay - invoice?.totalPaid).toFixed(2)}</h3>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ul role="list" className="xl:p-4 mt-4 flex flex-col gap-6 border-t">
					<div>
						<label
							htmlFor="payment"
							className="block text-sm mb-2 font-medium leading-6 text-gray-900"
						>
							Metodo de Pago
						</label>
						<SelectPaymentMethod
							selectedPaymentMethod={selectedPaymentMethod}
							setSelectedPaymentMethod={setSelectedPaymentMethod}
						/>
					</div>

					<div>
						<label htmlFor="payment" className="block text-sm font-medium leading-6 text-gray-900">
							Valor a Pagar
						</label>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span className="text-gray-500 sm:text-sm">$</span>
							</div>
							<input
								type="text"
								name="amountToPay"
								id="amountToPay"
								{...register("amountToPay", { required: true })}
								disabled={!selectedPaymentMethod}
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="0.00"
							/>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<label htmlFor="currency" className="sr-only">
									Currency
								</label>
								<select
									id="currency"
									name="currency"
									className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
								>
									<option>USD</option>
								</select>
							</div>
						</div>
						<div className="text-red-500 text-xs mt-1">
							{errors.amountToPay && "Este campo es requerido"}
						</div>
					</div>

					<button className="p-2 border inline-flex justify-center items-center gap-2  bg-green-600 text-white rounded-lg hover:ring-1 ring-green-400">
						{payInvoiceMutation.isLoading ? (
							<div className="inline-flex gap-2 items-center">
								<EllipsisHorizontalIcon className="w-6 h-6  mx-auto animate-pulse" />
								Pagando
							</div>
						) : (
							<div className="inline-flex gap-2 items-center">
								<CurrencyDollarIcon className="h-5 w-5" />
								Pagar{" "}
							</div>
						)}
					</button>
				</ul>
			</form>
		</div>
	);
};
