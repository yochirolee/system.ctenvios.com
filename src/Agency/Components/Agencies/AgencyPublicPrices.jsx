import { React, Suspense, useState } from "react";
import AgenciesSearchSelect from "./AgenciesSearchSelect";
import { Button } from "../ui/button";
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

						<Button className='flex gap-2' onClick={() => setIsOpen(true)}>
							<BuildingOfficeIcon className="h-4 w-4" />
							Crear Agencia
						</Button>
					</div>
					{selectedAgency ? (
						<Suspense fallback={<h2>🌀 Loading...</h2>}>
							<div className="lg:grid  lg:grid-cols-12  text-sm gap-4">
								<div className=" lg:col-span-8">
									<AgencyServicesList selectedAgency={selectedAgency} />
								</div>
								<div className="lg:col-span-4">
									<EmployeeList selectedAgency={selectedAgency} />
								</div>
							</div>
						</Suspense>
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
