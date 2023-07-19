import { React, useState } from "react";
import AgenciesSearchSelect from "../../Components/Agencies/AgenciesSearchSelect";
import SlideOver from "../../Components/ui/SlideOver";
import AgencyForm from "../../Components/Agencies/AgencyForm";
import { AgencyDetails } from "../../Components/Agencies/AgencyDetails";
import { Button } from "@tremor/react";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { useAppStore } from "../../../Store/AppStore";

export const AgenciesPage = () => {
	const currentUser = useAppStore((state) => state.currentUser);

	return (
		<div>
			<div className="flex flex-col">
				<AgencyDetails agencyId={currentUser.agencyId} />
			</div>
		</div>
	);
};
