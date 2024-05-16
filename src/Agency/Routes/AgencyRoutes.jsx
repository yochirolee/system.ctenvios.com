import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../Auth/Hooks/useAuth";
import { RootLayout } from "../Layouts/RootLayout";
import { InvoicesPage } from "../Pages/Invoices/InvoicesPage";
import { AgenciesPage } from "../Pages/Agencies/AgenciesPage";
import { DashboardPage } from "../Pages/Dashboard/DashboardPage";
import { CustomerPage } from "../Pages/Customers/CustomerPage";
import { NewInvoicePage } from "../Pages/Invoices/NewInvoicePage";
import { InvoiceDetails } from "../Pages/Invoices/InvoiceDetails";
import { AirHandling } from "../Pages/Handling/AirHandling";
import { SettingsPage } from "../Pages/Settings/SettingsPage";
import { TrackingPage } from "../Pages/Tracking/TrackingPage";

export const AgencyRoutes = () => {
	const { currentUser } = useAuth();

	return (
		<>
			<RootLayout>
				<Routes>
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/invoices" element={<InvoicesPage />} />
					<Route path="/invoices/new" element={<NewInvoicePage />} />
					<Route path="/invoices/:id" element={<InvoiceDetails />} />
					<Route path="/agency" element={<AgenciesPage />} />
					<Route path="/customers" element={<CustomerPage />} />
					<Route path="/" element={<TrackingPage />} />

					{currentUser?.role?.name === "Administrator" ? (
						<>
							<Route path="/settings" element={<SettingsPage />} />
							<Route path="/air" element={<AirHandling />} />
						</>
					) : null}
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			</RootLayout>
		</>
	);
};
