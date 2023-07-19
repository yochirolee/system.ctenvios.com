import { React } from "react";
import { Card } from "@tremor/react";
import { useFetchServicesByAgency } from "../../Hooks/useAgencies";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { AgencyPublicPricesList } from "./AgencyPublicPricesList";

export const AgencyPublicServicesList = ({ agency }) => {
	const { data: services } = useFetchServicesByAgency(agency.id);

	return (
		<Card className="bg-gray-50  ">
			{services?.map((service) =>
				service?.isActive ? (
					<Card className="my-4" key={service.id}>
						<div className="flex items-center justify-between border-b py-2">
							<div>
								<h3 className="font-semibold text-gray-600 ">{service.name}</h3>
								<p className="text-sm text-gray-500">{service.description}</p>
							</div>
						</div>

						{service.servicesPrices.length === 0 ? (
							<div className="text-center text-gray-500">No hay tarifas creadas</div>
						) : (
							<AgencyPublicPricesList servicesPrices={service.servicesPrices} />
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
		</Card>
	);
};
