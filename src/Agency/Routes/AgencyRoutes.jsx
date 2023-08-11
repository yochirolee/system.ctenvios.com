import { Navigate, Route, Routes } from "react-router-dom";
import { RootLayout } from "../Layouts/RootLayout";
import { InvoicesPage } from "../Pages/Invoices/InvoicesPage";
import { DashboardPage } from "../Pages/Dashboard/DashboardPage";
import { AgenciesPage } from "../Pages/Agencies/AgenciesPage";
import { Settings } from "../Pages/Settings/Settings";
import { useAuth } from "../../Auth/Hooks/useAuth";

export const AgencyRoutes = () => {
	const { currentUser } = useAuth();

	return (
		<>
			<RootLayout>
				<Routes>
					<Route path="/" element={<DashboardPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/invoices" element={<InvoicesPage />} />
					<Route path="/agencies" element={<AgenciesPage />} />
					{currentUser?.role?.name === "Administrator" ? (
						<Route path="/providers" element={<Settings />} />
					) : null}
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			</RootLayout>
		</>
	);
};
