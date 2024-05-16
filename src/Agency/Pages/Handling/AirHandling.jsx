import { React, useState } from "react";
import FlightsSelect from "./Components/FlightsSelect";
import { useFetchFlightById } from "../../Hooks/useFlights";
import { FlightPackageList } from "./Components/FlightPackagesList";
export const AirHandling = () => {
	const [selectedFlight, setSelectedFlight] = useState(null);
	const { data: flight, isLoading, isError } = useFetchFlightById(selectedFlight?.id);
	console.log(flight, "selectedFlight");
	return (
		<>
			<h1> AirHandling</h1>
			<FlightsSelect selected={selectedFlight} setSelected={setSelectedFlight} />

            <div className="p-4 my-4 border ">
                <h3>Actions</h3>

            </div>

			{isLoading ? "Searching" : <FlightPackageList flight={flight} />}
		</>
	);
};
