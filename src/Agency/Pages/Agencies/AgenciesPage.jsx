import { useAuth } from "../../../Auth/Hooks/useAuth";
import { AgencyDetails } from "../../Components/Agencies/AgencyDetails";

export const AgenciesPage = () => {
	const { currentUser } = useAuth();

	return (
		<div>
			<div className="flex flex-col">
				<AgencyDetails agencyId={currentUser.agencyId} />
			</div>
		</div>
	);
};
