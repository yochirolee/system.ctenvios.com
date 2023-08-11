import { Fragment, Suspense, useState } from "react";
import { Tab } from "@headlessui/react";
import { Card } from "@tremor/react";
import ProvidersList from "../ServicesProviders/ProvidersList";
import { AgencyPublicPrices } from "../Agencies/AgencyPublicPrices";

export const SettingsTab = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
			<Tab.List className="border-b text-sm mb-3  space-x-4">
				<Tab as={Fragment}>
					{({ selected }) => (
						/* Use the `selected` state to conditionally style the selected tab. */
						<button
							className={
								selected ? "border-b-2 border-blue-400  p-2   " : "bg-white text-black p-2"
							}
						>
                            Tarifas de Agencias
                        </button>
					)}
				</Tab>
				<Tab as={Fragment}>
					{({ selected }) => (
						/* Use the `selected` state to conditionally style the selected tab. */
						<button
							className={selected ? "border-b-2  border-blue-400  p-2 " : "bg-white text-black p-2"}
						>
							Proveedores y Servicios
						</button>
					)}
				</Tab>
			</Tab.List>
			<Tab.Panels>
				<Tab.Panel>
					<Suspense>
						<AgencyPublicPrices />
					</Suspense>
				</Tab.Panel>
				<Tab.Panel fallback={<Loading />}>
					<ProvidersList />
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

function Loading() {
	return <h2>🌀 Loading...</h2>;
}
