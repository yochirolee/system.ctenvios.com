import { React, useEffect } from "react";
import {
	MapPinIcon,
	PhoneIcon,
	UserIcon,
	XMarkIcon,
	IdentificationIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import apiServices from "../../Api/apiServices";

export const SelectedRecieverDetails = ({ selected, setSelected, selectedCustomer }) => {
	if (!selected || !selectedCustomer) {
		return;
	}

	useEffect(() => {
		const connect = () => {
			apiServices.recievers.connectRecieverToCustomer(selectedCustomer.id, selected.id);
		};
		connect();
	}, [selected, selectedCustomer]);

	return (
		<Transition
			as={Fragment}
			show={true}
			enter="transition-opacity duration-150"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div className="flex w-full rounded-lg p-2 ded-lg my-2  flex-col  justify-between">
				<div className="flex  w-full items-center  justify-between">
					<h2>Datos del Destinatario:</h2>
					<XMarkIcon
						className="w-5 h-5 cursor-pointer hover:text-red-400"
						onClick={() => setSelected(null)}
					/>
				</div>

				<div className="relative   w-full grid grid-cols-2 px-4 items-center gap-x-4">
					<div className="inline-flex items-center  gap-4">
						<UserIcon className="h-8 w-8 p-1 mr-2 font-extralight text-blue-300 ring ring-blue-300 rounded-full" />
						<div className="text-sm leading-6">
							<p className="font-bold text-lg text-gray-900">
								<a>
									<span className="absolute inset-0" />
									{selected.firstName} {selected.lastName}
								</a>
							</p>
							<span className="text-slate-500">{selected.email}</span>
						</div>
					</div>
					<div className="flex flex-col border-l border-dashed pl-6 justify-end">
						<div className="flex items-center gap-x-4 text-xs">
							<div className=" my-4    flex items-center sm:gap-1 sm:px-0">
								<dt className="text-sm   font-medium leading-6 text-gray-900">
									<IdentificationIcon className="h-5 w-5 text-gray-400" />
								</dt>
								<dd className="text-sm ml-2 font-semibold leading-6 text-gray-700  sm:mt-0">
									{selected?.ci}
								</dd>
							</div>
						</div>
						<div className="flex items-center gap-x-4 text-xs">
							<div className="     flex items-center sm:gap-1 sm:px-0">
								<dt className="text-sm   font-medium leading-6 text-gray-900">
									<PhoneIcon className="h-5 w-5 text-gray-400" />
								</dt>
								<dd className="text-sm ml-2 leading-6 text-gray-700  sm:mt-0">
									{selected?.mobile}
								</dd>
							</div>
						</div>
						<div className="flex items-center gap-x-4 text-xs">
							<div className=" my-3   flex items-center sm:gap-1 sm:px-0">
								<dt className="text-sm   font-medium leading-6 text-gray-900">
									<MapPinIcon className="h-5 w-5 text-gray-400" />
								</dt>
								<div className="ml-2">
									<dd className="text-sm leading-6 text-gray-700  sm:mt-0">{selected?.address}</dd>
									<dd className="text-sm leading-6  items-center font-semibold text-gray-700  sm:mt-0">
										{selected?.state?.name + ", " + selected?.city?.name}
									</dd>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center  w-full my-2 py-2">
					<button className="justify-center bg-green-600/80 text-white lg:w-1/2 mt-2 border p-1 rounded-lg hover:ring ring-green-500/80">
						Editar
					</button>
				</div>
			</div>
		</Transition>
	);
};
