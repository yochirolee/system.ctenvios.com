import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Fragment, React } from "react";
import { useFetchPaymentMethods } from "../../../../Hooks/usePaymentMethods";

export const SelectPaymentMethod = ({ selectedPaymentMethod, setSelectedPaymentMethod }) => {
	const { data: paymentMethods, isLoading, isError } = useFetchPaymentMethods();

	return (
		<div className="  border  rounded-lg z-10 ">
			<Listbox value={selectedPaymentMethod} onChange={setSelectedPaymentMethod}>
				<div className="relative ">
					<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
						<span className="block truncate">
							{selectedPaymentMethod?.name
								? selectedPaymentMethod.name
								: "Seleccione Metodo de Pago "}
						</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{paymentMethods?.map((payment) => (
								<Listbox.Option
									key={payment?.id}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? "bg-blue-500 text-white" : "text-gray-900"
										}`
									}
									value={payment}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
											>
												{payment.name ? payment.name : ""}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};
