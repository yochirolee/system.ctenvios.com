import { RadioGroup } from "@headlessui/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ServicesRadioGroup({
	agencyServices,
	selectedService,
	setSelectedService,
}) {
	if (!agencyServices) return null;

	return (
		<>
			{/* 	<div className="p-6">
				<div id="headlessui-radiogroup-14" role="radiogroup" aria-labelledby="headlessui-label-1">
					<label className="font-semibold my-2" id="headlessui-label-1" role="none">
						Select a mailing list
					</label>
					<div className="flex" role="none">
						<div
							className="afq ab ls xl ado aeu alj aqo bbi bmu"
							id="headlessui-radiogroup-option-5"
							role="radio"
							aria-checked="true"
							tabindex="0"
							data-headlessui-state="checked"
							aria-labelledby="headlessui-label-2"
							aria-describedby="headlessui-description-3 headlessui-description-4"
						>
							<span class="ls uh">
								<span class="ls ym">
									<span class="lp avv avz axq" id="headlessui-label-2">
										Newsletter
									</span>
									<span class="kp ls yu avv axm" id="headlessui-description-3">
										Last message sent an hour ago
									</span>
									<span class="lf avv avz axq" id="headlessui-description-4">
										621 users
									</span>
								</span>
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								class="nu rw ayc"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="w-6 h-6" aria-hidden="true"></span>
						</div>
						<div
							class="afq ab ls xl ado aeu alj aqo bbi bmu"
							id="headlessui-radiogroup-option-9"
							role="radio"
							aria-checked="false"
							tabindex="-1"
							data-headlessui-state=""
							aria-labelledby="headlessui-label-6"
							aria-describedby="headlessui-description-7 headlessui-description-8"
						>
							<span class="ls uh">
								<span class="ls ym">
									<span class="lp avv avz axq" id="headlessui-label-6">
										Existing Customers
									</span>
									<span class="kp ls yu avv axm" id="headlessui-description-7">
										Last message sent 2 weeks ago
									</span>
									<span class="lf avv avz axq" id="headlessui-description-8">
										1200 users
									</span>
								</span>
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								class="x nu rw ayc"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="aew agt u aa ae ado" aria-hidden="true"></span>
						</div>
						<div
							class="afq ab ls xl ado aeu alj aqo bbi bmu"
							id="headlessui-radiogroup-option-13"
							role="radio"
							aria-checked="false"
							tabindex="-1"
							data-headlessui-state=""
							aria-labelledby="headlessui-label-10"
							aria-describedby="headlessui-description-11 headlessui-description-12"
						>
							<span class="ls uh">
								<span class="ls ym">
									<span class="lp avv avz axq" id="headlessui-label-10">
										Trial Users
									</span>
									<span class="kp ls yu avv axm" id="headlessui-description-11">
										Last message sent 4 days ago
									</span>
									<span class="lf avv avz axq" id="headlessui-description-12">
										2740 users
									</span>
								</span>
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								class="x nu rw ayc"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="aew agt u aa ae ado" aria-hidden="true"></span>
						</div>
					</div>
				</div>
			</div> */}
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
                  ${
										checked
											? "bg-blue-600 shadow-sm bg-opacity-70 text-white "
											: "bg-white shadow-sm"
									}
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
														<span>{service.description}</span>{" "}
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
		</>
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
