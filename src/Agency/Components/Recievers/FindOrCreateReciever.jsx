import { React, useState } from "react";
import RecieverComboBox from "./RecieverComboBox";
import { NewRecieverButton } from "./NewRecieverButton";
import { SelectedRecieverDetails } from "./SelectedRecieverDetails";
import Modal from "../ui/Modal";
import RecieverForm from "./RecieverForm";

export const FindOrCreateReciever = ({
	selectedCustomer,
	selectedReciever,
	setSelectedReciever,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div className="flex  px-4 bg-white w-full border rounded-lg items-center">
				{!selectedReciever ? (
					<>
						<RecieverComboBox
							setSelected={setSelectedReciever}
							selectedCustomer={selectedCustomer}
						/>
						<NewRecieverButton setIsOpen={setIsOpen} />
					</>
				) : (
					<SelectedRecieverDetails
						selected={selectedReciever}
						setSelected={setSelectedReciever}
						selectedCustomer={selectedCustomer}
					/>
				)}
			</div>

			<Modal title={"Crear Destinatario"} isOpen={isOpen} setIsOpen={setIsOpen}>
				<RecieverForm
					setIsOpen={setIsOpen}
					selectedCustomer={selectedCustomer}
					setSelected={setSelectedReciever}
				/>
			</Modal>
		</div>
	);
};
