import { Navigate, Route, Routes } from "react-router-dom";
import { RootLayout } from "../Layouts/RootLayout";
import { InvoicesPage } from "../Pages/Invoices/InvoicesPage";
import { DashboardPage } from "../Pages/Dashboard/DashboardPage";
import { AgenciesPage } from "../Pages/Agencies/AgenciesPage";
import { ProvidersAndServicesPage } from "../Pages/ProvidersAndServices/ProvidersAndServicesPage";
import { useAppStore } from "../../Store/AppStore";
import { shallow } from "zustand/shallow";

export const AgencyRoutes = () => {
	const [currentUser] = useAppStore((state) => [state.currentUser], shallow);

	return (
		<>
			<RootLayout>
				<Routes>
					<Route path="/" element={<DashboardPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/invoices" element={<InvoicesPage />} />
					<Route path="/agencies" element={<AgenciesPage />} />
					{currentUser?.role?.name === "Administrator" ? (
						<Route path="/providers" element={<ProvidersAndServicesPage />} />
					) : null}
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			</RootLayout>
		</>
	);
};
