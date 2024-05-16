import { React, useState } from "react";
import { Card } from "../../../components/ui/card";
import { CircleStackIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import SlideOver from "../ui/SlideOver";
import ServicePriceForm from "./_ServicePriceForm";
import { AgencyServicesPricesList } from "./AgencyServicesPricesList";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useFetchServices } from "../../Hooks/useServices";
import { Banner } from "../Banner/Banner";

export const AgencyServicesList = ({ selectedAgency }) => {
	const { data: services } = useFetchServices();

	console.log(services, "services");
	const [isOpenServicesPrices, setIsOpenServicesPrices] = useState(false);
	const [selectedService, setSelectedService] = useState(null);

	const handleCreateNewServicePrice = (service) => {
		setSelectedService(service);
		setIsOpenServicesPrices(true);
	};

	console.log(services, "services");
	return (
		<div className=" lg:col-span-7  ">
			{services?.map((service) =>
				service?.isActive ? (
					<Card key={service.id} className="p-4">
						<div className="flex items-center justify-between  border-b pb-2">
							<div>
								<h3 className="font-semibold text-gray-600 ">{service?.name}</h3>
								<p className="text-sm text-gray-500">{service?.description}</p>
							</div>

							<span
								onClick={() => handleCreateNewServicePrice(service)}
								className=" inline-flex items-center  cursor-pointer  gap-2 bg-gray-700  text-white p-2 rounded-md border hover:bg-gray-800"
							>
								<CurrencyDollarIcon className="h-5 w-5" />
								<span className="hidden lg:block text-xs">Crear Tarifa</span>
							</span>
							
						</div>

						{service.servicesPrices?.length === 0 ? (
							<Banner title={"No existen tarifas"} message={"Para esta Agencia"} />
						) : (
							<AgencyServicesPricesList
								servicesPrices={service.providerFares}
								selectedService={selectedService}
								selectedAgency={selectedAgency}
								setIsOpen={setIsOpenServicesPrices}
							/>
						)}
						<div>{/* <ServicesCategories service={service} /> */}</div>
					</Card>
				) : (
					<div className="flex gap-4 items-center">
						<div>
							<h3 className="font-semibold text-gray-600 ">{service.name}</h3>
							<p className="text-sm text-gray-500">{service.description}</p>
						</div>
						<span className="flex ml-4 pl-4  gap-4 border-l">
							<InformationCircleIcon className="h-6 w-6 text-gray-500" />
							Servicio Inactivo
						</span>
					</div>
				),
			)}
			<SlideOver isOpen={isOpenServicesPrices} setIsOpen={setIsOpenServicesPrices}>
				<ServicePriceForm
					selectedAgency={selectedAgency}
					selectedService={selectedService}
					setIsOpen={setIsOpenServicesPrices}
				/>
			</SlideOver>
		</div>
	);
};
