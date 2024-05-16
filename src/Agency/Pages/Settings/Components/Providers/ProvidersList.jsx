import { React } from "react";
import { ProviderCard } from "./ProviderCard";
export const ProvidersList = ({ providers }) => {
	return (
		<ul role="list">
			{providers?.map((provider) => (
				<ProviderCard provider={provider} key={provider.id} />
			))}
		</ul>
	);
};
