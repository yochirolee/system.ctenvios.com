import { React, useState } from "react";
import ProvidersList from "../../Components/ServicesProviders/ProvidersList";
import { Button, Card } from "@tremor/react";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import AgenciesSearchSelect from "../../Components/Agencies/AgenciesSearchSelect";
import SlideOver from "../../Components/ui/SlideOver";
import AgencyForm from "../../Components/Agencies/AgencyForm";
import { AgencyServicesList } from "../../Components/ServicesProviders/AgencyServicesList";
import EmployeeList from "../../Components/Employess/EmployeesList";

export const ProvidersAndServicesPage = () => {
	const [selectedAgency, setSelectedAgency] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Card className="my-4 bg-gray-50">
				<ProvidersList />
			</Card>
			<div className="flex flex-col gap-4 mt-10">
				<div>
					<h1 className="text-lg font-bold">Tarifas de Agencias</h1>

					<div className=" flex  items-center  gap-4 ">
						<div className="flex-1 max-w-md">
							<AgenciesSearchSelect
								selectedAgency={selectedAgency}
								setSelectedAgency={setSelectedAgency}
							/>
						</div>

						<div className="inline-flex gap-4">
							<Button onClick={() => setIsOpen(true)} icon={BuildingOfficeIcon}>
								Crear Agencia
							</Button>
						</div>
					</div>
					<div className="flex gap-4">
						<AgencyServicesList selectedAgency={selectedAgency} />
						<EmployeeList selectedAgency={selectedAgency} />
					</div>
				</div>

				<SlideOver isOpen={isOpen} setIsOpen={setIsOpen} title={"Crear Agencia"}>
					<AgencyForm setIsOpen={setIsOpen} setSelectedAgency={setSelectedAgency} />
				</SlideOver>
			</div>
		</>
	);
};
