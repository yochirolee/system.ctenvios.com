import { React } from "react";
import { useAppStore } from "../../../Store/AppStore";
import { shallow } from "zustand/shallow";
import { useFetchServicesByAgencyId } from "../../Hooks/useServices";
import ServicesRadioGroup from "../../Components/Services/ServicesRadioGroup";
import { useAuth } from "../../../Auth/Hooks/useAuth";
import { FindOrCreateCustomer } from "../../Components/Customers/FindOrCreateCustomer";
import { FindOrCreateReciever } from "../../Components/Recievers/FindOrCreateReciever";
import { InvoicePackagesList } from "../../Components/Package/InvoicePackagesList";
import { ArchiveBoxIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { CardDemo } from "./Notifications";
import { Table } from "@/components/ui/table";
import { CommandInput } from "@/components/ui/command";
import { ComboboxDemo } from "@/components/ui/comboBox";
import { TeamMembers } from "./TeamMembers";

export const DashboardPage = () => {
	return (
		<>
			
			<div className="grid grid-cols-4 gap-4">
				<CardDemo className="col-span-3" />
				<TeamMembers />
			</div>

			<ComboboxDemo />
		</>
	);
	/* const [
		mystate,
		currentUser,
		invoice,
		setInvoice,
		selectedService,
		setSelectedService,
		selectedCustomer,
		setSelectedCustomer,
		selectedReciever,
		setSelectedReciever,
		addPackage,
		amountToPay,
		updateAmountToPay,
	] = useAppStore(
		(state) => [
			state,
			state.currentUser,
			state.invoice,
			state.setInvoice,
			state.selectedService,
			state.setSelectedService,
			state.customer,
			state.setSelectedCustomer,
			state.reciever,
			state.setSelectedReciever,
			state.addPackage,
			state.invoice.amountToPay,
			state.updateAmountToPay,
		],
		shallow,
	);

	const { data: agencyServices, isLoading } = useFetchServicesByAgencyId(currentUser?.agencyId);

	console.log(mystate.invoice, "invoice");

	if (isLoading) return <div className="text-center text-gray-500">Cargando...</div>;

	return (
		<>
			<div className="grid grid-flow-col gap-10  p-4 grid-cols-2 my-4">
				<FindOrCreateCustomer
					selectedCustomer={selectedCustomer}
					setSelectedCustomer={setSelectedCustomer}
				/>

				<FindOrCreateReciever
					selectedCustomer={selectedCustomer}
					selectedReciever={selectedReciever}
					setSelectedReciever={setSelectedReciever}
				/>
			</div>

			{selectedCustomer && selectedReciever && (
				<div className=" ">
					<ServicesRadioGroup
						agencyServices={agencyServices}
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
						setInvoice={setInvoice}
						selectedService={selectedService}
						updateAmountToPay={updateAmountToPay}
					/>
				</div>
			)}
		</>
	); */
};
