export default function ProviderFares({ service }) {
	console.log(service, "service");
	return (
		<>
			<ul role="list" className="divide-y divide-gray-100">
				{service.providerFares.map((fare) => (
					<li key={fare.id} className="flex justify-between gap-x-6 py-5">
						<div className="flex min-w-0 gap-x-4">
							<div className="min-w-0 flex-auto">
								<p className="text-sm font-semibold leading-6 text-gray-900">{fare.name}</p>
								<p className="inline-flex  rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
									{fare.category.name}
								</p>
							</div>
						</div>
						<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
							<p className="inline-flex gap-2 text-sm leading-6 text-gray-900">
								<p>Peso:</p>
								{fare.weight} Lbs
							</p>
							<p className="inline-flex gap-2 text-sm leading-6 text-gray-900">
								<p>Precio Costo:</p>${fare.costPrice} / {fare?.type}
							</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
