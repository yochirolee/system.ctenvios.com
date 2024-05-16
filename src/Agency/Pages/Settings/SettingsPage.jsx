import { Fragment, Suspense, useState } from "react";
import { Tab } from "@headlessui/react";
import { AgencyPublicPrices } from "../../Components/Agencies/AgencyPublicPrices";
import ProvidersTab from "./Components/Providers/ProvidersTab";
import { CategoriesTab } from "./Components/Categories/CategoriesTab";

export const SettingsPage = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
			<Tab.List className="border-b text-sm mb-3  space-x-4">
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={
								selected
									? "border-b-2 border-blue-400  p-2 font-semibold   "
									: "bg-white text-slate-700 p-2"
							}
						>
							Agencias
						</button>
					)}
				</Tab>
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={
								selected
									? "border-b-2 border-blue-400  p-2 font-semibold   "
									: "bg-white text-slate-700 p-2"
							}
						>
							Proveedores y Servicios
						</button>
					)}
				</Tab>
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={
								selected
									? "border-b-2 border-blue-400  p-2 font-semibold   "
									: "bg-white text-slate-700 p-2"
							}
						>
							Categorias
						</button>
					)}
				</Tab>
			</Tab.List>
			<Tab.Panels>
				<Tab.Panel fallback={<Loading />}>
					{
						<Suspense>
							<AgencyPublicPrices />
						</Suspense>
					}
				</Tab.Panel>
				<Tab.Panel fallback={<Loading />}>
					<Suspense>
						<ProvidersTab />
					</Suspense>
				</Tab.Panel>
				<Tab.Panel fallback={<Loading />}>
					<Suspense>
						<CategoriesTab />
					</Suspense>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

function Loading() {
	return <h2>🌀 Loading...</h2>;
}
