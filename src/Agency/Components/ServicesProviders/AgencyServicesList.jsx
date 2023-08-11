import { React, useState } from "react";
import { Button, Card } from "@tremor/react";
import { CircleStackIcon } from "@heroicons/react/24/outline";
import SlideOver from "../ui/SlideOver";
import ServicePriceForm from "./ServicePriceForm";
import { AgencyServicesPricesList } from "./AgencyServicesPricesList";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useFetchServicesByAgencyId } from "../../Hooks/useServices";
import { Banner } from "../Banner/Banner";

export const AgencyServicesList = ({ selectedAgency }) => {
	const { data: services } = useFetchServicesByAgencyId(selectedAgency?.id);

	const [isOpenServicesPrices, setIsOpenServicesPrices] = useState(false);
	const [selectedService, setSelectedService] = useState(null);

	const handleCreateNewServicePrice = (service) => {
		setSelectedService(service);
		setIsOpenServicesPrices(true);
	};
	return (
		<div className=" lg:col-span-8  ">
			{services?.map((service) =>
				service?.isActive ? (
					<Card key={service.id}>
						<div className="flex items-center justify-between border-b py-1">
							<div>
								<h3 className="font-semibold text-gray-600 ">{service.name}</h3>
								<p className="text-sm text-gray-500">{service.description}</p>
							</div>

							<Button
								disabled={services?.length == 0}
								onClick={() => handleCreateNewServicePrice(service)}
								icon={CircleStackIcon}
								iconPosition="right"
								variant="secondary"
								size="xs"
								className="h-8"
							>
								Crear Tarifa
							</Button>
						</div>

						{service.servicesPrices.length === 0 ? (
							<Banner title={"No existen tarifas"} message={"Para esta Agencia"}/>
						) : (
							<AgencyServicesPricesList servicesPrices={service.servicesPrices} />
						)}
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
