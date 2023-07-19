import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useQuery } from "react-query";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const getCustomers = async () => {
	const response = await fetch("http://localhost:3001/api/v1/customers");
	const data = await response.json();
	return data;
};

export default function CustomerComboBox({ selected, setSelected }) {
	const { data: customers, isLoading, isError, error } = useQuery("getCustomers", getCustomers);

	const [query, setQuery] = useState("");

	const filteredcustomer =
		query === ""
			? customers
			: customers.filter(
					(customer) =>
						customer.mobile
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.toLowerCase().replace(/\s+/g, "")) ||
						customer.firstName.toLowerCase().includes(query.toLowerCase()),
			  );

	return (
		<div className="w-72 z-10 py-4">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<Combobox.Input
							className="w-full relative border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
							displayValue={(selected) =>
								selected ? `${selected.firstName} ${selected.lastName} - ${selected.mobile}` : ""
							}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Seleccione un Cliente"
						/>

						{isLoading ? (
							<div className="absolute z-10 inset-y-0 right-5 flex items-center pr-2">
								<MagnifyingGlassIcon className="h-5 w-5 aminate-pulse"></MagnifyingGlassIcon>
							</div>
						) : null}
						{selected ? (
							<div className="absolute inset-y-0 right-5 flex items-center pr-2">
								<XMarkIcon
									onClick={() => setSelected("")}
									className="h-5 w-5  text-red-500"
								></XMarkIcon>
							</div>
						) : (
							""
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
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{filteredcustomer?.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								filteredcustomer?.map((customer) => (
									<Combobox.Option
										key={customer.id}
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
