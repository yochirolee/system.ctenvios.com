import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useSearchCustomer } from "../../../Hooks/useCustomers";
import { Spinner } from "../../ui/Spinner";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function CustomerComboBox({ selected, setSelected }) {
	const [query, setQuery] = useState(null);
	const { customers, isLoading } = useSearchCustomer(query);

	return (
		<div className="w-full z-10 py-4">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<MagnifyingGlassIcon className="w-9 h-9 text-slate-500  absolute z-40 inset-y-0 left-2 top-0.5 flex items-center pr-4 " />

						<Combobox.Input
							className="w-full pl-10 relative border-none py-2 pr-10 text-base   text-gray-700 focus:ring-0"
							displayValue={(selected) =>
								selected ? `${selected?.firstName} ${selected?.lastName} - ${selected?.mobile}` : ""
							}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Buscar Cliente"
						/>
						{isLoading && (
							<div className=" absolute animate-pulse z-40 inset-y-0 right-8 flex items-center mt-2 mx-1 h-5 w-5 ">
								<Spinner />
							</div>
						)}
						<Combobox.Button className="absolute z-40 inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{customers?.length === 0 && !isLoading ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								customers?.map((customer) => (
									<Combobox.Option
										key={customer?.id}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-blue-500 text-white" : "text-gray-900"
											}`
										}
										value={customer}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
												>
													{customer?.firstName +
														" " +
														customer?.lastName +
														" - " +
														customer?.mobile}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? "text-white" : "text-blue-600"
														}`}
													>
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
}
