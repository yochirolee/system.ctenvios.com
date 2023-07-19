import { OrganizationProfile, UserProfile } from "@clerk/clerk-react";
import { React, useEffect, useRef, useState } from "react";
import { useAppStore, useCounter, useStore } from "../../../Store/AppStore";
import { shallow } from "zustand/shallow";
import { set } from "react-hook-form";

export const DashboardPage = () => {
	const [count, increment, decrement] = useCounter(
		(state) => [state.count, state.increment, state.decrement],
		shallow,
	);
	const [currentUser] = useAppStore((state) => [state.currentUser, state.setCurrentUser], shallow);

	const [firstName, updateFirstName] = useStore(
		(state) => [state.firstName, state.updateFirstName],
		shallow,
	);

	return (
		<>
			<div className="flex flex-col gap-4">
				<button onClick={() => decrement()}>Decrement</button>
				<div className="flex items-center justify-between">{count} </div>
				<button onClick={() => increment()}>Increment</button>
			</div>
			<div>{currentUser?.email}</div>
			<div>{firstName}</div>
			<label>
				First name
				<input
					// Update the "firstName" state
					onChange={(e) => updateFirstName(e.currentTarget.value)}
					value={firstName}
				/>
			</label>

			<p>
				Hello, <strong>{currentUser?.id}!</strong>
			</p>
			<button onClick={() => handleCurrentUser()}>Set Current User</button>
		</>
	);
};
