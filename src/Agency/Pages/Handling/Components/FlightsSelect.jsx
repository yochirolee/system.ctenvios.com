import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useFetchAllFlights } from "../../../Hooks/useFlights";

export default function FlightsSelect({ selected, setSelected }) {
	const { data: flights, isLoading, isError } = useFetchAllFlights();
	const [query, setQuery] = useState("");

	const filteredFlights =
		query === ""
			? flights
			: flights?.filter((flight) => {
					return flight.airGuide.toLowerCase().includes(query.toLowerCase());
			  });
	return (
		<div className="z-10 w-full  py-4">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative mt-1 ">
					<div className="flex gap-2">
						<div className="relative w-full cursor-default overflow-hidden rounded-lg border bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
							<Combobox.Input
								className="relative w-full border-none py-2 pl-10 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
								displayValue={(selected) => (selected ? `${selected?.airGuide}` : "  ")}
								type="search"
								onChange={(event) => setQuery(event.target.value.trim())}
								placeholder="Seleccione una Agencia"
							/>

							<MagnifyingGlassIcon
								className="absolute inset-y-0 left-2 top-2 z-10 h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>

							<Combobox.Button className="absolute inset-y-0 right-0 z-10 flex items-center pr-2">
								<ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
							</Combobox.Button>
						</div>
					</div>

					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{filteredFlights?.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none px-4 py-2 text-gray-700">
									Guia no Encontrada.
								</div>
							) : (
								filteredFlights?.map((flight) => (
									<Combobox.Option
										key={flight.id}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-blue-500 text-white" : "text-gray-900"
											}`
										}
										value={flight}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
												>
													{flight?.airGuide}
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
