import { useState } from "react";
import { Button } from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import SlideOver from "../../../../Components/ui/SlideOver";
import ProviderForm from "./Forms/ProviderForm";
import ServiceForm from "../Services/Forms/ServiceForm";
import { useFetchProviders } from "../../../../Hooks/Providers/useProviders";
import { ProvidersList } from "./ProvidersList";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function ProvidersTab() {
	const { data: providers, isLoading, isError } = useFetchProviders();


	const [isOpenProviderForm, setIsOpenProviderForm] = useState(false);
	const [isOpenServiceForm, setIsOpenServiceForm] = useState(false);

	const [selectedProvider, setSelectedProvider] = useState(null);
	
	const handleCreateService = (provider) => {
		console.log(provider);
		setSelectedProvider(provider);
		setIsOpenServiceForm(true);
	};

	if (isLoading) return <div>Cargando...</div>;
	if (isError) return <div>Error</div>;

	console.log(providers, "providers");

	return (
		<>
			<div className="flex items-center my-2 mt-8 justify-between ">
				<h1 className="text-lg font-bold">Proveedores y Servicios</h1>

				<Button icon={PlusCircleIcon} onClick={() => setIsOpenProviderForm(true)}>
					Crear Proveedor
				</Button>
			</div>
			<div className="mt-4">
				{providers.length === 0 ? (
					<div className="inline-flex items-center gap-2">
						<InformationCircleIcon className="h-6 w-6 text-blue-500" />
						<h3>No hay Proveedores registrados, por favor cree uno nuevo</h3>
					</div>
				) : (
					<ProvidersList providers={providers} />
				)}
			</div>

			{
				<>
					<SlideOver
						setIsOpen={setIsOpenProviderForm}
						isOpen={isOpenProviderForm}
						title="Crear Proveedor"
					>
						<ProviderForm setIsOpen={setIsOpenProviderForm} />
					</SlideOver>
				</>
			}
		</>
	);
}
