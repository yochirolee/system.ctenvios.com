import { useState } from "react";
import { SearchForm } from "./Components/SearchTab/SearchForm";
import { useFetchByInvoiceOrHBL } from "./hooks/useFetchByInvoiceOrHBL";
import { SearchResult } from "./Components/SearchTab/SearchResult";
import { EventDetails } from "./Components/Events/EventDetails";
import { NoEventDetails } from "./Components/Events/noEventDetails";

export const TrackingSearchTab = () => {
	const [search, setSearch] = useState("");
	const { data: invoice, isError, isLoading } = useFetchByInvoiceOrHBL(search);
	const [selectedHbl, setSelectedHbl] = useState(
		invoice?.parcels[0]?.hbl ? invoice?.parcels[0]?.hbl : "",
	);

	const changeSearchTerm = (search) => {
		if (search.length > 3) {
			setSearch(search);
			setSelectedHbl("");
		}
	};
	return (
		<div className="flex min-h-screen w-full flex-col">
			<div className="flex flex-col sm:gap-4 sm:py-4 ">
				<SearchForm isLoading={isLoading} changeSearchTerm={changeSearchTerm} />
				{isLoading || isError || !invoice || Object.keys(invoice).length < 1 ? (
					<></>
				) : (
					<main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 ">
						<SearchResult invoice={invoice} setSelectedHbl={setSelectedHbl} />
						{selectedHbl ? <EventDetails hbl={selectedHbl} /> : <NoEventDetails />}
					</main>
				)}
			</div>
		</div>
	);
};
