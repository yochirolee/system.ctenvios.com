import { UserPlusIcon } from "@heroicons/react/24/outline";
import { React } from "react";
export const NewRecieverButton = ({ setIsOpen }) => {
	return (
		<button
			className="inline-flex items-center mt-1 mx-2  justify-center rounded-md   px-4  py-2 text-sm font-medium border text-gray-500 hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-gray-100 hover:border"
			onClick={() => setIsOpen(true)}
		>
			<UserPlusIcon className=" h-5 w-5" aria-hidden="true" />
		</button>
	);
};
