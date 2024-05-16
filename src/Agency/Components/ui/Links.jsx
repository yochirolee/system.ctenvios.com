import { Disclosure, Transition } from "@headlessui/react";
import {
	BuildingOffice2Icon,
	ChevronRightIcon,
	Cog6ToothIcon,
	CogIcon,
	DocumentCheckIcon,
	EnvelopeIcon,
	GlobeAmericasIcon,
	HomeIcon,
	PaperAirplaneIcon,
	TruckIcon,
	UserGroupIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import { React } from "react";
import { Link } from "react-router-dom";

export const Links = ({ currentUser }) => {
	return (
		<div className="space-y-2 py-4   group-hover:bg-white">
			<li className="group  -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
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
			<Disclosure as="div">
				{({ open }) => (
					<>
						<Disclosure.Button className="w-full inline-flex items-center justify-between hover:bg-gray-50">
							<li className="group  -mx-3 flex  gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  ">
								<BuildingOffice2Icon
									className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
									aria-hidden="true"
								/>
								<p className=" block  text-base font-semibold leading-7 text-gray-900 ">Agencia</p>
							</li>
							<ChevronRightIcon
								className={`${open ? "rotate-90 transform" : ""} right-0 w-5 h-5 text-gray-500`}
							/>
						</Disclosure.Button>
						<Transition
							show={open}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Disclosure.Panel>
								<div
									as="div"
									className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 "
								>
									<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
										<Cog6ToothIcon
											className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
											aria-hidden="true"
										/>

										<Link
											to="/agency"
											className=" block  text-base font-semibold leading-7 text-gray-900 "
										>
											Ajustes
										</Link>
									</li>
									<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
										<UserGroupIcon
											className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
											aria-hidden="true"
										/>

										<Link
											to="/customers"
											className=" block  text-base font-semibold leading-7 text-gray-900 "
										>
											Clientes
										</Link>
									</li>
									<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
										<EnvelopeIcon
											className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
											aria-hidden="true"
										/>

										<Link
											to="/providers"
											className=" block  text-base font-semibold leading-7 text-gray-900 "
										>
											Marketing
										</Link>
									</li>
								</div>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>

			{currentUser?.role?.name === "Administrator" ? (
				<>
					<Disclosure as="div">
						{({ open }) => (
							<>
								<Disclosure.Button className="w-full inline-flex items-center justify-between hover:bg-gray-50">
									<li className="group  -mx-3 flex  gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  ">
										<TruckIcon
											className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
											aria-hidden="true"
										/>
										<p className=" block  text-base font-semibold leading-7 text-gray-900 ">
											Logistica
										</p>
									</li>
									<ChevronRightIcon
										className={`${open ? "rotate-90 transform" : ""} right-0 w-5 h-5 text-gray-500`}
									/>
								</Disclosure.Button>
								<Transition
									show={open}
									enter="transition duration-100 ease-out"
									enterFrom="transform scale-95 opacity-0"
									enterTo="transform scale-100 opacity-100"
									leave="transition duration-75 ease-out"
									leaveFrom="transform scale-100 opacity-100"
									leaveTo="transform scale-95 opacity-0"
								>
									<Disclosure.Panel>
										<div
											as="div"
											className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 "
										>
											<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
												<PaperAirplaneIcon
													className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
													aria-hidden="true"
												/>

												<Link
													to="/air"
													className=" block  text-base font-semibold leading-7 text-gray-900 "
												>
													Aereo
												</Link>
											</li>
											<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
												<GlobeAmericasIcon
													className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
													aria-hidden="true"
												/>

												<Link
													to="/customers"
													className=" block  text-base font-semibold leading-7 text-gray-900 "
												>
													Maritimo
												</Link>
											</li>
										</div>
									</Disclosure.Panel>
								</Transition>
							</>
						)}
					</Disclosure>
					<li className="group -mx-3 flex gap-4 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">
						<CogIcon
							className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
							aria-hidden="true"
						/>

						<Link
							to="/settings"
							className=" block  text-base font-semibold leading-7 text-gray-900 "
						>
							Configuracion
						</Link>
					</li>
				</>
			) : null}
		</div>
	);
};
