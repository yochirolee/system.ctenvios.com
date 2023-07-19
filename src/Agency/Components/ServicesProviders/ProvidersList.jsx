import { Disclosure } from "@headlessui/react";
import { useFetchServicesProviders } from "../../Hooks/useServicesProviders";
import { ServicesList } from "./ServicesList";
import {
	ArchiveBoxArrowDownIcon,
	ChevronRightIcon,
	PlusCircleIcon,
	PlusIcon,
	PlusSmallIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import SlideOver from "../ui/SlideOver";
import ProviderForm from "./ProviderForm";
import { Button, Card } from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import ServiceForm from "./ServiceForm";

export default function ProvidersList() {
	const { data: servicesProviders, isLoading, isError } = useFetchServicesProviders();

	const [isOpenProviderForm, setIsOpenProviderForm] = useState(false);
	const [isOpenServiceForm, setIsOpenServiceForm] = useState(false);

	const [selectedProvider, setSelectedProvider] = useState(null);
	const handleCreateService = (provider) => {
		setSelectedProvider(provider);
		setIsOpenServiceForm(true);
	};

	if (isLoading) return <div>Cargando...</div>;
	if (isError) return <div>Error</div>;

	return (
		<>
			<div className="flex items-center my-2  justify-between ">
				<h1 className="text-lg font-bold">Proveedores y Servicios</h1>

				<Button icon={PlusCircleIcon} onClick={() => setIsOpenProviderForm(true)}>
					Crear Proveedor
				</Button>
				
			</div>
			<div className="mt-4">
				{servicesProviders.length === 0 ? (
					<div className="inline-flex items-center gap-2">
						<InformationCircleIcon className="h-6 w-6 text-blue-500" />
						<h3>No hay Proveedores registrados, por favor cree uno nuevo</h3>
					</div>
				) : (
					<ul role="list" className="divide-y divide-gray-100">
						{servicesProviders?.map((provider) => (
							<Card className="my-4 " key={provider.id}>
								<Disclosure>
									{({ open }) => (
										<div>
											<div
												className={`flex  justify-between  ${open ? " border-b mb-2 pb-2 " : ""}`}
											>
												<div className="inline-flex items-center gap-2">
													<div className="h-10 w-10 rounded-full border  bg-blue-500"></div>
													<h2 className=" font-semibold leading-6 text-lg text-gray-900/80">
														{provider.providerName}
													</h2>
												</div>

												<div className="flex items-center space-x-6">
													<Button
														onClick={() => handleCreateService(provider)}
														icon={PlusSmallIcon}
														iconPosition="right"
														variant="secondary"
														color="gray-400"
													>
														Crear Servicio
													</Button>
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
																No hay Servicios para <b>{provider?.providerName}</b> por favor cree
																uno nuevo
															</h3>
														</div>
													) : (
														<ServicesList services={provider?.services} />
													)}
												</div>
											</Disclosure.Panel>
										</div>
									)}
								</Disclosure>
							</Card>
						))}
					</ul>
				)}
			</div>

			<SlideOver
				setIsOpen={setIsOpenProviderForm}
				isOpen={isOpenProviderForm}
				title="Crear Proveedor de Servicios"
			>
				<ProviderForm setIsOpen={setIsOpenProviderForm} />
			</SlideOver>
			<SlideOver setIsOpen={setIsOpenServiceForm} isOpen={isOpenServiceForm} title="Crear Servicio">
				<ServiceForm setIsOpen={setIsOpenServiceForm} selectedProvider={selectedProvider} />
			</SlideOver>
		</>
	);
}
