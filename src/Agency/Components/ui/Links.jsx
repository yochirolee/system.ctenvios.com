import {
	BuildingOffice2Icon,
	CogIcon,
	DocumentCheckIcon,
	HomeIcon,
} from "@heroicons/react/24/outline";
import { React } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../../Store/AppStore";

export const Links = () => {
	const [currentUser] = useAppStore((state) => [state.currentUser]);
	return (
		<div className="space-y-2 py-6  group-hover:bg-white">
			<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
				<HomeIcon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
				<Link to="/dashboard" className=" block  text-base font-semibold leading-7 text-gray-900 ">
					Dashboard
				</Link>
			</li>

			<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
				<DocumentCheckIcon
					className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
					aria-hidden="true"
				/>
				<Link to="/invoices" className=" block  text-base font-semibold leading-7 text-gray-900 ">
					Invoices
				</Link>
			</li>

			<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
				<BuildingOffice2Icon
					className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
					aria-hidden="true"
				/>

				<Link to="/agencies" className=" block  text-base font-semibold leading-7 text-gray-900 ">
					Agencias
				</Link>
			</li>
			{currentUser?.role?.name === "Administrator" ? (
				<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
					<CogIcon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />

					<Link
						to="/providers"
						className=" block  text-base font-semibold leading-7 text-gray-900 "
					>
						Proveedores y Servicios
					</Link>
				</li>
			) : null}

			{/* 	<Disclosure as="div" className="-mx-3">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
										Agencias
										<ChevronDownIcon
											className={classNames(!open ? "rotate-180" : "", "h-5 w-5 flex-none")}
											aria-hidden="true"
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="mt-2 space-y-2">
										{[...products, ...callsToAction].map((item) => (
											<div
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</div>
										))}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
 */}
		</div>
	);
};
