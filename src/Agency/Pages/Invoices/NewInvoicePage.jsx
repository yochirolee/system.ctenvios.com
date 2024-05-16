import { React, useMemo } from "react";
import { useAppStore } from "../../../Store/AppStore";
import { shallow } from "zustand/shallow";
import { useMutation } from "react-query";
import apiServices from "../../Api/apiServices";
import { useFetchServicesByAgencyId } from "../../Hooks/useServices";
import ServicesRadioGroup from "../../Components/Services/ServicesRadioGroup";
import { FindOrCreateCustomer } from "../../Components/Customers/FindOrCreateCustomer";
import { FindOrCreateReciever } from "../../Components/Recievers/FindOrCreateReciever";
import { InvoicePackagesList } from "../../Components/Package/InvoicePackagesList";
import {
	ArchiveBoxIcon,
	ArrowTrendingDownIcon,
	EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useFetchAgencyById } from "../../Hooks/useAgencies";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroupType } from "./Components/RadioGroup";
import { Label } from "@/components/ui/label";

export const NewInvoicePage = () => {
	const [
		currentUser,
		invoice,
		clearInvoice,
		selectedService,
		setSelectedService,
		selectedCustomer,
		setSelectedCustomer,
		selectedReciever,
		setSelectedReciever,
		addPackage,
		updateAmountToPay,
	] = useAppStore(
		(state) => [
			state.currentUser,
			state.invoice,
			state.clearInvoice,
			state.selectedService,
			state.setSelectedService,
			state.customer,
			state.setSelectedCustomer,
			state.reciever,
			state.setSelectedReciever,
			state.addPackage,

			state.updateAmountToPay,
		],
		shallow,
	);

	const navigate = useNavigate();

	const { data: agency, isLoading } = useFetchAgencyById(currentUser?.agencyId);

	console.log(agency, "agency");

	const { weight } = useMemo(() => {
		let packages = invoice?.packages;
		let amount = 0;
		let weight = 0;
		packages?.forEach((pack) => {
			amount += pack?.subTotal;
			weight += pack?.weight;
		});
		updateAmountToPay(amount);

		return { amount, weight };
	}, [invoice?.packages]);

	const mutationCreateInvoice = useMutation(apiServices.invoices.createInvoice, {
		onSuccess: (data) => {
			const { id } = data;
			clearInvoice();
			setSelectedCustomer(null);
			setSelectedReciever(null);
			navigate(`/invoices/${id}`);
		},
		onError: (error) => {
			console.log(error, "error");
		},
	});

	const handleCreateInvoice = () => {
		try {
			mutationCreateInvoice.mutate(invoice);
		} catch (error) {
			console.log(error, "error");
		}
	};

	if (isLoading) return <div className="text-center text-gray-500">Cargando...</div>;

	return (
		<>
			<div className="flex flex-col lg:px-20 py-4  gap-6 space-y-6">
				<Card className="grid gap-4 md:p-4 lg:p-10">
					<Label className="text-lg font-semibold">Tipo de Envio:</Label>
					<RadioGroupType  />
				</Card>

				<Card className="grid gap-4 p-10">
					<Label className="text-lg font-semibold">Datos del Cliente y Destinatario:</Label>

					<div className="grid grid-flow-col justify-between">
						<FindOrCreateCustomer
							selectedCustomer={selectedCustomer}
							setSelectedCustomer={setSelectedCustomer}
						/>
						<Separator orientation="vertical" />
						<FindOrCreateCustomer
							selectedCustomer={selectedCustomer}
							setSelectedCustomer={setSelectedCustomer}
						/>
					</div>
				</Card>

				{/* <FindOrCreateReciever
					selectedCustomer={selectedCustomer}
					selectedReciever={selectedReciever}
					setSelectedReciever={setSelectedReciever}
				/> */}
			</div>
			{selectedCustomer && selectedReciever && (
				<div className=" ">
					<ServicesRadioGroup
						agencyServices={agency.services}
						selectedService={selectedService}
						setSelectedService={setSelectedService}
					/>
				</div>
			)}
			{selectedService && (
				<div className=" p-2 rounded-lg py-4 bg-gray-50 ">
					<div className="flex bg-white p-2 mb-4 rounded-lg  justify-between mx-6">
						<h3 className="text-base font-semibold leading-7 text-gray-900">
							Listado de Productos
						</h3>
						<div className="bg-white">
							<button
								className="w-lg text-sm flex items-center  p-2 "
								onClick={() => addPackage(invoice)}
							>
								<div className="relative">
									<ArchiveBoxIcon className="h-5 w-5 mx-2 " />
									<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[12px] font-bold leading-none text-red-100 transform translate-x-1 -translate-y-1/2 bg-red-500 rounded-full">
										{invoice?.packages?.length}
									</span>
								</div>
								Adicionar Paquete
							</button>
						</div>
					</div>

					<InvoicePackagesList
						invoice={invoice}
						selectedService={selectedService}
						updateAmountToPay={updateAmountToPay}
					/>
					<div className="mb-20 grid  grid-cols-2 py-4  m-4 ">
						<div></div>

						<div className="bg-white p-4 rounded-lg shadow-sm">
							<div className="px-4 sm:px-0">
								<h3 className="text-base font-semibold leading-7 text-gray-900">
									Resumen de Factura
								</h3>
							</div>
							<div className="mt-6 border-t border-gray-100">
								<dl className="divide-y divide-gray-100">
									<div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">SubTotal:</dt>
										<dd className="mt-1 text-sm leading-6  text-gray-700 sm:col-span-1 sm:mt-0">
											$0.00
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">
											Cargo por Delivery:
										</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
											$0.00
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">Peso Total:</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
											{weight ? parseFloat(weight).toFixed(2) : 0} Lbs
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
										<dt className="text-sm font-medium leading-6 text-gray-900">Descuento:</dt>
										<dd className="mt-1 inline-flex justify-between text-sm leading-6 text-gray-700 sm:col-span-1  sm:mt-0">
											<span>$0.00</span>
											<button className="p-1 inline-flex px-2 items-center gap-2 border rounded-lg">
												<ArrowTrendingDownIcon className="h-5 w-5 mx-2 " />
												Agregar Descuento
											</button>
										</dd>
									</div>

									<div className="px-4 py-6 sm:grid text-xl font-semibold sm:grid-cols-2 sm:gap-4 sm:px-0">
										<dt className="  leading-6 text-gray-900">Total a Pagar:</dt>
										<dd className="mt-1  leading-6 font-semibold text-gray-700 sm:col-span-1 sm:mt-0">
											${invoice?.amountToPay ? parseFloat(invoice?.amountToPay).toFixed(2) : "0.00"}
										</dd>
									</div>

									<div className="px-4 py-6 sm:grid sm:gap-4 sm:px-0">
										<button
											onClick={() => handleCreateInvoice()}
											className="w-full border rounded-lg p-2 bg-blue-500 text-white"
										>
											{mutationCreateInvoice.isLoading ? (
												<div className="inline-flex gap-2 items-center">
													<EllipsisHorizontalIcon className="w-6 h-6  mx-auto animate-pulse" />
													Facturando
												</div>
											) : (
												"Facturar "
											)}
										</button>
										<div>
											{mutationCreateInvoice.error && (
												<p className="text-red-500 text-xs ">
													{mutationCreateInvoice.error?.message}
												</p>
											)}
										</div>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
