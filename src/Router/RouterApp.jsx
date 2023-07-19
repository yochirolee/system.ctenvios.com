import { Navigate, Route, Routes } from "react-router-dom";
import { SignInPage } from "../Auth/Pages/SignInPage";
import { useSession } from "@clerk/clerk-react";
import { AgencyRoutes } from "../Agency/Routes/AgencyRoutes";
import { useAppStore } from "../Store/AppStore";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import axios from "axios";

export const RouterApp = () => {
	const { session, isLoaded } = useSession();
	if (!isLoaded) return null;

	return (
		<Routes>
			{session?.user ? (
				<Route path="*" element={<AgencyRoutes />} />
			) : (
				<Route path="/login" element={<SignInPage />} />
			)}

			<Route path="/*" element={<Navigate to="/login" />} />
			{/* <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
			<Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
			<Route
				path="/*"
				element={
					<>
						<SignedIn>
							<AgencyRoutes />
						</SignedIn>
						<SignedOut>
							<RedirectToSignIn />
						</SignedOut>
					</>
				}
			/> */}
		</Routes>
	);
};
