import { React } from "react";
export const UserProfile = () => {
	return (
		<>
			<h1> UserProfile</h1>
			<UserProfile
				appearance={{
					elements: {
						rootBox: "flex flex-col  items-center justify-center mx-auto  lg:w-3/4 h-full",
						card: "flex flex-col  items-center justify-center w-full h-full    bg-white rounded-lg shadow-none",
						navbar: "hidden",
						navbarMobileMenuButton: "hidden",
					},
				}}
			/>
		</>
	);
};
