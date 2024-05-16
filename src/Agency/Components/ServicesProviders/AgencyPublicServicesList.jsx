import { React } from "react";
import { Card } from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { AgencyPublicPricesList } from "./AgencyPublicPricesList";
import { useFetchServicesByAgencyId } from "../../Hooks/useServices";

export const AgencyPublicServicesList = ({ agency }) => {
	const { data: services } = useFetchServicesByAgencyId(agency.id);

	return (
		<Card className="   ">
			<h3 className="font-semibold my-2">Tarifas Publicas de la Agencia</h3>
			{services?.map((service) =>
				service?.isActive ? (
					<div className="mb-6 " key={service.id}>
						<div className=" inline-flex items-center  rounded-md mb-2 bg-green-50 px-2 space-x-4 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500/10">
							<h3 className="text-sm leading-7 ">{service.name}</h3>
							<p className=" max-w-2xl text-xs leading-6 text-gray-500">{service.serviceType}</p>
						</div>

						{service.servicesPrices.length === 0 ? (
							<div className="text-center  text-gray-500">No hay tarifas creadas</div>
						) : (
							<AgencyPublicPricesList servicesPrices={service.servicesPrices} />
						)}
					</div>
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
