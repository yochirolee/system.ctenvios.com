import { Disclosure } from "@headlessui/react";
import {
	ChevronRightIcon,
	InformationCircleIcon,
	
} from "@heroicons/react/24/outline";
import { Card } from "@tremor/react";
import { React, useState } from "react";
import { ProviderServices } from "./ProviderServices";
import SlideOver from "../../../../Components/ui/SlideOver";
import ServiceForm from "../Services/Forms/ServiceForm";
export const ProviderCard = ({ provider }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Card className="my-4 ">
				<Disclosure>
					{({ open }) => (
						<div>
							<div className={`flex  justify-between  ${open ? " border-b mb-2 pb-2 " : ""}`}>
								<div className="inline-flex  items-center gap-2">
									<h2 className=" font-semibold leading-6 text-lg text-gray-900/80">
										{provider.name}
									</h2>
									<div className="inline-flex  items-center gap-2">
										<span className="inline-flex  items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
											Servicios Activos: {provider.services.length}
										</span>
									</div>
								</div>

								<div className="flex items-center space-x-6">
									<button
										className="text-xs text-slate-600 border p-2 rounded-lg"
										onClick={() => setIsOpen(true)}
									>
										Crear Servicio
									</button>
									<Disclosure.Button>
										<ChevronRightIcon
											className={
												open
													? "rotate-90 transform h-5 w-5  text-blue-500"
													: "h-5 w-5 hover:text-blue-500"
											}
										/>
									</Disclosure.Button>
								</div>
							</div>

							<Disclosure.Panel>
								<div className="bg-gray-50 p-4 my-2 ">
									{provider.services.length === 0 ? (
										<div className="inline-flex items-center  gap-2">
											<InformationCircleIcon className="h-6 w-6 text-blue-500" />
											<h3>
												No hay Servicios para <b>{provider?.name}</b> por favor cree uno nuevo
											</h3>
										</div>
									) : (
										<ProviderServices services={provider?.services} />
									)}
								</div>
							</Disclosure.Panel>
						</div>
					)}
				</Disclosure>
			</Card>
			<SlideOver
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				title="Crear Servicio"
			>
				<ServiceForm setIsOpen={setIsOpen} provider={provider} />
			</SlideOver>
		</>
	);
};
