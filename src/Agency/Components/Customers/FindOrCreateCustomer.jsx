import { React, useState } from "react";
import CustomerComboBox from "./ComboBox/CustomerComboBox";
import { NewCustomerButton } from "./Buttons/NewCustomerButton";
import CustomerForm from "./Forms/CustomerForm";
import Modal from "../ui/Modal";
import { SelectedCustomerDetails } from "./Details/SelectedCustomerDetails";
import { ComboboxDemo } from "@/components/ui/comboBox";
import { Button } from "../ui/button";
import { User2, UserPlus2 } from "lucide-react";

export const FindOrCreateCustomer = ({ selectedCustomer, setSelectedCustomer }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div className="flex gap-2 items-center px-4   ">
				{!selectedCustomer ? (
					<>
						<ComboboxDemo
							className="w-72"
							selectedCustomer={selectedCustomer}
							setSelectedCustomer={setSelectedCustomer}
						/>
						<Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
							<UserPlus2 className="h-4 w-4" />
						</Button>
					</>
				) : (
					<SelectedCustomerDetails selected={selectedCustomer} setSelected={setSelectedCustomer} />
				)}
			</div>

			<Modal title={"Crear Cliente"} isOpen={isOpen} setIsOpen={setIsOpen}>
				<CustomerForm setIsOpen={setIsOpen} setSelected={setSelectedCustomer} />
			</Modal>
		</div>
	);
};
