import { React, Suspense, useState } from "react";
import AgenciesSearchSelect from "./AgenciesSearchSelect";
import { Button } from "@tremor/react";
import { AgencyServicesList } from "../ServicesProviders/AgencyServicesList";
import EmployeeList from "../Employess/EmployeesList";
import SlideOver from "../ui/SlideOver";
import AgencyForm from "./AgencyForm";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";

export const AgencyPublicPrices = () => {
	const [selectedAgency, setSelectedAgency] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
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
					{selectedAgency ? (
						<div className="grid lg:grid-flow-col  text-sm gap-4">
							<Suspense fallback={<h2>🌀 Loading...</h2>}>
								<AgencyServicesList selectedAgency={selectedAgency} />
								<EmployeeList selectedAgency={selectedAgency} />
							</Suspense>
						</div>
					) : (
						""
					)}
				</div>

				<SlideOver isOpen={isOpen} setIsOpen={setIsOpen} title={"Crear Agencia"}>
					<AgencyForm setIsOpen={setIsOpen} setSelectedAgency={setSelectedAgency} />
				</SlideOver>
			</div>
		</>
	);
};
