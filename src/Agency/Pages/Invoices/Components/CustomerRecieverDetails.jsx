import { DevicePhoneMobileIcon, MapIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { React } from "react";
export const CustomerRecieverDetails = ({ customer, reciever }) => {
	if (!customer || !reciever) return <div>Loading...</div>;
	return (
		<dl className="grid  my-10  grid-cols-2 ">
			<div className=" text-sm">
				<dt className="font-semibold mb-4">Envia</dt>
				<dd className="grid  grid-rows-3 gap-2">
					<span className="inline-flex items-center gap-2">
						<UserCircleIcon className="h-5 w-5 text-gray-400" />
						{customer?.firstName + " " + customer?.lastName}
					</span>
					<p className="inline-flex items-center gap-2">
						<MapIcon className="h-5 w-5 text-gray-400" />
						{customer?.address}
					</p>
					<p className="inline-flex items-center gap-2">
						<DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
						{customer?.mobile}
					</p>
				</dd>
			</div>
			<div className=" text-sm">
				<dt className="font-semibold mb-4">Recibe</dt>
				<dd className="grid grid-rows-3 gap-2">
					<span className="inline-flex items-center gap-2">
						<UserCircleIcon className="h-5 w-5 text-gray-400" />
						{reciever?.firstName + " " + reciever?.lastName}
					</span>
					<p className="inline-flex items-center gap-2">
						<MapIcon className="h-5 w-5 text-gray-400" />
						<div>
							{reciever?.address}{" "}
							<span className="font-medium">
								{reciever?.state?.name + " " + reciever?.city?.name}
							</span>
						</div>
					</p>
					<p className="inline-flex items-center gap-2">
						<DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
						{reciever?.mobile}
					</p>
				</dd>
			</div>
		</dl>
	);
};
