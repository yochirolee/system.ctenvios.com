import { useState } from "react";
import EmployeeList from "../Employess/EmployeesList";
import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import AgencyStats from "./AgencyStats";
import SlideOver from "../ui/SlideOver";
import AgencyForm from "./AgencyForm";
import { useFetchAgencyById } from "../../Hooks/useAgencies";
import { AgencyPublicServicesList } from "../ServicesProviders/AgencyPublicServicesList";

export const AgencyDetails = ({ agencyId }) => {
	if (!agencyId) return null;
	const [showSlideOver, setShowSlideOver] = useState(false);

	const { data: agency, isLoading } = useFetchAgencyById(agencyId);
	if (isLoading) return <div className="text-center text-gray-500">Cargando...</div>;

	return (
		<div className="flex flex-col">
			<div className="grid xl:grid-cols-3 my-10  gap-4 ">
				<div className="flex flex-col  place-content-center lg:border-r border-dashed  md:px-8">
					<h2 className="text-3xl font-bold truncate">{agency?.name}</h2>
					<p className="lg:m-8  text-gray-500 truncate">{agency.description} </p>
				</div>
				<dl className="flex flex-col my-auto  px-8 lg:border-r border-dashed ">
					<div className="py-4 flex items-center space-x-4">
						<dt className=" text-gray-500">
							<span className="sr-only">owner</span>
							<UserCircleIcon className="w-6 h-6" />
						</dt>
						<dd>{agency?.owner}</dd>
					</div>
					<div className="py-4 flex items-center space-x-4">
						<dt className=" text-gray-500 ">
							<span className="sr-only">address</span>
							<BuildingOffice2Icon className="h-6 w-6" />
						</dt>
						<dd className="truncate">{agency?.address}</dd>
					</div>
					<div className="py-4 flex items-center space-x-4">
						<dt className=" text-gray-500 ">
							<span className="sr-only">Email</span>
							<EnvelopeIcon className="w-6 h-6" />
						</dt>
						<dd className="truncate">{agency?.email}</dd>
					</div>
					<div className="py-4 flex items-center space-x-4">
						<dt className=" text-gray-500">
							<span className="sr-only">Phone</span>
							<PhoneIcon className="w-6 h-6" />
						</dt>
						<dd>{agency?.phone}</dd>
					</div>
					<div className="mt-2">
						<button
							onClick={() => setShowSlideOver(true)}
							className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
						>
							Editar Agencia
						</button>
					</div>
				</dl>
				<div className="px-8">
					<AgencyStats />
				</div>
			</div>
			<div className="lg:grid  lg:grid-cols-10  text-sm gap-4">
				<div className=" lg:col-span-6">
					<AgencyPublicServicesList agency={agency} />
				</div>
				<div className="lg:col-span-4">
					<EmployeeList selectedAgency={agency} />
				</div>
			</div>
			<SlideOver isOpen={showSlideOver} setIsOpen={setShowSlideOver} title="Agencia">
				<AgencyForm selectedAgency={agency} setIsOpen={setShowSlideOver} isEditing={true} />
			</SlideOver>
		</div>
	);
};
