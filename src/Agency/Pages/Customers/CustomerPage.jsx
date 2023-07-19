import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { React } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CustomerForm from "../../Components/Customers/Forms/CustomerForm";
import CustomerModal from "../../Components/Customers/Modals/CustomerModal";
import CustomerComboBox from "../../Components/Customers/ComboBox/CustomerComboBox";

const getCustomers = async () => {
	const response = await fetch("http://localhost:3001/api/v1/customers");
	const data = await response.json();
	return data;
};

const deleteCustomer = async (id) => {
	const response = await fetch(`http://localhost:3001/api/v1/customers/delete/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	return data;
};

export const CustomerPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { data, isLoading, isError, error } = useQuery("getCustomers", getCustomers);
	const queryClient = useQueryClient();
	const mutationDelete = useMutation("deleteCustomer", (id) => deleteCustomer(id));

	const onDelete = (id) => {
		mutationDelete.mutate(id, {
			onSuccess: () => {
				// Invalidate and refetch
				queryClient.invalidateQueries("getCustomers");
			},
		});
	};

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{isError && <p>{error.message}</p>}

			<button onClick={() => setIsOpen(true)}>Create Customer</button>

		
			<div className="container p-10 max-w-lg mt-10">
				<CustomerModal title={"Crear Cliente"} isOpen={isOpen} setIsOpen={setIsOpen}>
					<CustomerForm setIsOpen={setIsOpen} />
				</CustomerModal>
			</div>
		</>
	);
};
