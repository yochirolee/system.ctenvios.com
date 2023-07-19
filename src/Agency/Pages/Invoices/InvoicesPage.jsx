import { React, useState } from "react";
import CustomersTable from "../../Components/Customers/Tables/CustomersTable";
import { CustomerMetric } from "../../Components/Customers/CustomerMetric";
import { CustomersList } from "../../Components/Customers/CustomersList";

export const InvoicesPage = () => {
	const [selectedCustomer, setSelectedCustomer] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="grid">
			<CustomerMetric />
			<CustomersTable />
		</div>
	);
};
