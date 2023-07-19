import { useSession } from "@clerk/clerk-react";
import axios from "axios";
import { create } from "zustand";


export const useAppStore = create((set) => ({
	currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},

	setCurrentUser: (user) =>
		set(
			() => (
				localStorage.setItem("user", JSON.stringify(user)),
				{
					currentUser: user,
				}
			),
		),

	clearCurrentUser: () => set({ currentUser: null }),
}));

export const useCounter = create((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : state.count })),
	reset: () => set({ count: 0 }),
}));

export const useStore = create((set) => ({
	firstName: "",
	lastName: "",
	updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
	updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));
