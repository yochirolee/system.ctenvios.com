import { React } from "react";
import { Links } from "./Links";
import Avatar from "./Avatar";
import { useAuth } from "../../../Auth/Hooks/useAuth";
import { Badge } from "@/components/ui/badge";

export const SideBar = () => {
	const { currentUser } = useAuth();

	return (
		<div className="hidden lg:block h-screen col-span-2 ">
			<div className="  bg-gray-50 dark:bg-gray-900 ">
				<div className="flex flex-col   justify-center   py-4  items-center border-b border-dotted mx-auto">
					{<Avatar avatarUrl={currentUser.imageUrl} />}
					<div className="flex flex-col items-center mt-1">
						<h3 className="my-2 leading-4 text-slate-600 dark:text-white font-semibold">
							{currentUser?.email}
						</h3>

						<Badge className="mt-2">{currentUser?.role?.name}</Badge>
					</div>
				</div>
			</div>
			<div className=" px-4 divide-y mt-2 divide-gray-500/10">
				<Links currentUser={currentUser} />
			</div>
		</div>
	);
};
