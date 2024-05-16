import { RadioGroup } from "@headlessui/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ServicesRadioGroup({
	agencyServices,
	selectedService,
	setSelectedService,
}) {
	return (
		<div className="flex flex-col  rounded-2xl  p-6 mb-10 bg-gray-50">
			<h3 className="my-2">Seleccione el Servicio</h3>
			<RadioGroup value={selectedService} onChange={setSelectedService}>
				<div className="flex p-8 space-x-10 min-w-[250px] ">
					{agencyServices?.map((service) => (
						<RadioGroup.Option
							key={service.id}
							value={service}
							className={({ active, checked }) =>
								`${active ? "flex   ring-2 ring-white ring-opacity-60 " : ""}
                  ${checked ? "bg-blue-500 shadow-sm  text-white " : "bg-white shadow-sm"}
                    relative flex cursor-pointer rounded-lg px-5 py-4  focus:outline-none`
							}
						>
							{({ active, checked }) => (
								<>
									<div className="flex   w-full items-center justify-between">
										<div className="flex   items-center">
											<PaperAirplaneIcon className="h-6 w-6 mr-4" aria-hidden="true" />
											<div className="text-sm">
												<RadioGroup.Label
													as="p"
													className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}
												>
													{service.name}
												</RadioGroup.Label>
												<RadioGroup.Description
													as="span"
													className={`inline ${checked ? "text-sky-100" : "text-gray-500"}`}
												>
													<span>{service.type}</span>{" "}
												</RadioGroup.Description>
											</div>
										</div>
										{checked && (
											<div className="shrink-0 text-white">
												<CheckIcon className="h-6 w-6 ml-6" />
											</div>
										)}
									</div>
								</>
							)}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	);
}

function CheckIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
			<path
				d="M7 13l3 3 7-7"
				stroke="#fff"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
