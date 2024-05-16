import { React, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ServiceToggle } from "../Toogle/ServiceToggle";
import { useMutation } from "react-query";
import SlideOver from "../../../../Components/ui/SlideOver";
import BaseFareForm from "../Fare/BaseFareForm";
import BaseFare from "../Fare/ProviderFares";

export const ProviderServices = ({ services }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedService, setSelectedService] = useState(null);

	const handleCreateFare = (service) => {
		setSelectedService(service);
		setIsOpen(true);
	};
	const deleteMutation = useMutation();

	return (
		<div>
			<ul role="list" className="">
				{services?.map((service) => (
					<div key={service.id}>
						<li className="flex  items-center  justify-between">
							<div className=" flex items-center gap-2">
								<div className="inline-flex items-center gap-3">
									<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
										{service.name + " " + service.type}
									</span>
								</div>
							</div>

							<div className="flex">
								<div className="flex border-l space-x-4 border-dotted pl-4">
									<ServiceToggle service={service} />
									<button
										onClick={() => deleteMutation.mutate(service.id)}
										className="text-gray-500 hover:text-red-500    rounded-lg  "
									>
										<PencilSquareIcon className="h-5 w-5" />
									</button>
								</div>
							</div>
						</li>
						<div className="grid lg:grid-cols-12 ">
							<div className="lg:col-span-8 flex flex-col justify-between p-4 m-1 bg-white border rounded-lg">
								<div className="flex justify-between items-center border-b pb-2 ">
									<h3>Tarifas del Servicio</h3>
									<button
										onClick={() => handleCreateFare(service)}
										className="text-xs h-10 text-slate-600 border p-2 rounded-lg"
									>
										Crear Tarifa Base
									</button>
								</div>
								<BaseFare service={service} />
							</div>

							<div className="lg:col-span-4 flex flex-col  p-4 m-1 bg-white border rounded-lg">
								<div className="flex items-center justify-between border-b pb-4 mb-4">
									{service.categories.length === 0 ? (
										<div className="inline-flex items-center gap-2">
											<h3>No hay Categorias para este Servicio</h3>
										</div>
									) : (
										<div className="flex items-center gap-2">
											<h3 className="">Categorias del Servicio</h3>
										</div>
									)}
								</div>
								<div className="flex gap-2">
									{service.categories.map((category) => (
										<span
											key={category.id}
											className="inline-flex  rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
										>
											{category.name}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</ul>
			{
				<SlideOver setIsOpen={setIsOpen} isOpen={isOpen} title="Crear Tarifa">
					<BaseFareForm setIsOpen={setIsOpen} selectedService={selectedService} />
				</SlideOver>
			}
		</div>
	);
};
