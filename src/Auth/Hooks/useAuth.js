import { useSession, useSignIn } from "@clerk/clerk-react";
import { useAppStore } from "../../Store/AppStore";
import apiServices from "../../Agency/Api/apiServices";
import { useState } from "react";
import { shallow } from "zustand/shallow";

export const useAuth = () => {
	const { signIn, setActive, isLoaded } = useSignIn();
	const [isLoading, setIsLoading] = useState(false);
	const { session } = useSession();

	const [currentUser, setCurrentUser] = useAppStore(
		(state) => [state.currentUser, state.setCurrentUser],
		shallow,
	);
	const login = async (email, password) => {
		try {
			setIsLoading(true);
			const data = await apiServices.employees.getEmployeeByEmail(email);
			const result = await signIn.create({
				identifier: email,
				password,
			});
			if (result.status === "complete" && !!data.id) {
				await setActive({ session: result.createdSessionId });
				const loggedEmployee = data;

				loggedEmployee.imageUrl = result.userData.imageUrl;
				loggedEmployee.sessionId = result?.createdSessionId;
				setCurrentUser(loggedEmployee);
			}
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	const logout = async () => {
		session.end();
		setCurrentUser({});
	};

	const register = async (email, password, name) => {};

	return {
		login,
		logout,
		register,
		isLoaded,
		isLoading,
		currentUser,
		setCurrentUser,
	};
};
