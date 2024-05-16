import { React } from "react";
import NavBar from "../Components/ui/NavBar";
import { SideBar } from "../Components/ui/SideBar";
import { useSession } from "@clerk/clerk-react";
import { Toaster } from "@/components/ui/toaster";

export const RootLayout = ({ children }) => {
	const { session } = useSession();
	return (
		<>
			<NavBar session={session} />
			<div className="grid lg:grid-cols-12">
				<SideBar session={session} />

				<div className="lg:col-span-10 lg:border-l lg:p-6 md:p-4 p-2">{children}</div>
				<Toaster />
			</div>
		</>
	);
};
