import { Fragment, useMemo, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useSearchReciever } from "../../Hooks/useReciever";
import { Spinner } from "../ui/Spinner";

export default function RecieverComboBox({ selected, setSelected, selectedCustomer }) {
	const [query, setQuery] = useState(null);

	const { recievers, isLoading } = useSearchReciever(
		query,
		selectedCustomer ? selectedCustomer : { id: null },
	);

	


	return (
		<div className="w-full z-10 py-4">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<Combobox.Input
							className="w-full pl-4 relative border-none py-2 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
							displayValue={(selected) =>
								selected ? `${selected?.firstName} ${selected?.lastName} - ${selected?.mobile}` : ""
							}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Buscar Destinatario"
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
							{recievers?.length === 0 && query !== "" && !isLoading ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								recievers?.map((reciever) => (
									<Combobox.Option
										key={reciever?.id}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-blue-500 text-white" : "text-gray-900"
											}`
										}
										value={reciever}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
												>
													{reciever?.firstName +
														" " +
														reciever?.lastName +
														" - " +
														reciever?.mobile}
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
