import { React } from "react";
import NavBar from "../Components/ui/NavBar";
import { SideBar } from "../Components/ui/SideBar";
import { useSession } from "@clerk/clerk-react";

export const RootLayout = ({ children }) => {
	const { session } = useSession();
	return (
		<>
			<NavBar session={session} />
			<div className="flex">
				<SideBar session={session} />
				<div className="p-8 w-full">{children}</div>
			</div>
		</>
	);
};
