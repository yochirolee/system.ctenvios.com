import { UserPlusIcon } from "@heroicons/react/24/outline";
import { React } from "react";
export const NewCustomerButton = ({ setIsOpen }) => {
	return (
	
	
			<button
				onClick={() => setIsOpen(true)}
				className="inline-flex gap-2 justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-600 active:text-white/80 mt-1"
				aria-label="Edit"
			>
				<UserPlusIcon className="w-6 h-6 " />
			</button>
	
	);
};
