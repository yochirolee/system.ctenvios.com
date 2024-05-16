import { useState } from "react";
import { React } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CustomerForm from "../../Components/Customers/Forms/CustomerForm";
import apiServices from "../../Api/apiServices";
import CustomersTable from "../../Components/Customers/Tables/CustomersTable";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { NewCustomerButton } from "../../Components/Customers/Buttons/NewCustomerButton";
import Modal from "../../Components/ui/Modal";

const deleteCustomer = async (id) => {
	const response = await fetch(`http://localhost:3001/api/v1/customers/delete/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	return data;
};

export const CustomerPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const {
		data: customers,
		isLoading,
		isError,
		error,
	} = useQuery("getCustomers", apiServices.customers.getCustomers);
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

	console.log(customers, "data");

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{isError && <p>{error.message}</p>}
			<div className="container inline-flex items-center justify-end  ">
				<div className=" relative group">
					<MagnifyingGlassIcon className="w-5 h-5 absolute text-gray-500 top-2 left-3" />
					<input
						type="search"
						name="searchCustomer"
						id="searchCustomer"
						placeholder="Buscar Cliente"
						autoComplete="given-name"
						className="block pl-10 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
					/>
				</div>
				<NewCustomerButton setIsOpen={setIsOpen} />
			</div>

			<CustomersTable customers={customers} />
			<Modal title={"Crear Cliente"} isOpen={isOpen} setIsOpen={setIsOpen}>
				<CustomerForm setIsOpen={setIsOpen} />
			</Modal>
		</>
	);
};
