import { React } from "react";
import { Links } from "./Links";
import Avatar from "./Avatar";
import { UserIcon } from "@heroicons/react/24/outline";
import { useAppStore } from "../../../Store/AppStore";
import { shallow } from "zustand/shallow";

export const SideBar = () => {
	const [currentUser] = useAppStore((state) => [state.currentUser], shallow);


	return (
		<div className="hidden min-h-screen lg:block bg-gray-white border-r min-w-[280] md:max-w-[300px]  z-10 w-full overflow-y-auto   sm:max-w-xs sm:min-w-sm sm:ring-gray-900/10">
			<div className="  bg-gray-50">
				<div className="flex flex-col   justify-center   py-6  items-center border-b border-dotted mx-auto">
					{<Avatar avatarUrl={currentUser.imageUrl} />}
					<div className="flex flex-col items-center mt-1">
						<h3 className="my-2 leading-4 text-slate-600 font-semibold">{currentUser?.email}</h3>
						<span className=" inline-flex  text-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
							<UserIcon className="w-4 h-4 " />
							<p className="ml-2">{currentUser?.role?.name}</p>
						</span>
					</div>
				</div>
			</div>
			<div className="-my-6 px-6 divide-y mt-2 divide-gray-500/10">
				<Links />
			</div>
		</div>
	);
};
