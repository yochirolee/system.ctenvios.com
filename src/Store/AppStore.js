import { create } from "zustand";

export const useAppStore = create((set) => ({
	invoice: {
		invoiceNumber: Math.random().toString(36).substr(2, 9),
		customerId: "",
		recieverId: "",
		employeeId: "",
		agencyId: "",
		serviceId: "",
		weight: 0,
		status: "",
		amountToPay: 0,
		discount: 0,
		deliveryAmount: 0,
		packages: [],
	},
	selectedCustomer: null,
	selectedReciever: null,
	selectedService: null,

	currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},

	setInvoice: (invoice) => set({ invoice }),

	clearInvoice: () =>
		set((state) => ({
			invoice: {
				...state.invoice,
				invoiceNumber: Math.random().toString(36).substr(2, 9),
				customerId: null,
				recieverId: null,
				employeeId: null,
				agencyId: null,
				serviceId: null,
				weight: 0,
				status: "",
				amountToPay: 0,
				discount: 0,
				deliveryAmount: 0,
				packages: [],
			},
			selectedCustomer: null,
			selectedReciever: null,
			selectedService: null,
			selectedEmployee: null,
		})),

	setCurrentUser: (user) => set({ currentUser: user }),

	setSelectedCustomer: (customer) =>
		set((state) => ({
			invoice: {
				...state.invoice,
				customerId: customer?.id ? customer.id : null,
				employeeId: state.currentUser.id,
				agencyId: state.currentUser.agencyId,
			},
			customer: customer,
		})),

	setSelectedReciever: (reciever) =>
		set((state) => ({
			invoice: {
				...state.invoice,
				recieverId: reciever?.id ? reciever.id : null,
			},
			reciever: reciever,
		})),

	setAmountToPay: (amount) =>
		set((state) => ({
			invoice: {
				...state.invoice,
				amountToPay: amount,
			},
		})),

	addPackage: () => {
		const pack = {
			hbl: Math.random().toString(36).substr(2, 9),
			description: "",
			weight: 0,
			publicPrice: 0,
			location: "Facturado",
			servicePriceId: 0,
		};
		return set((state) => ({
			invoice: {
				...state.invoice,
				packages: [...state.invoice.packages, pack],
			},
		}));
	},

	updatePackage: (pack, hbl) => {
		console.log(pack, "packUpdate");
		pack.subTotal = pack?.isSellByPounds
			? parseFloat(pack.publicPrice) * parseFloat(pack?.weight)
			: pack?.publicPrice;
		return set((state) => ({
			invoice: {
				...state.invoice,
				packages: state.invoice.packages.map((p) => (p.hbl === hbl ? pack : p)),
			},
		}));
	},
	deletePackage: (hbl) =>
		set((state) => ({
			invoice: {
				...state.invoice,
				packages: state.invoice.packages.filter((p) => p.hbl !== hbl),
			},
		})),
	clearPackages: () =>
		set((state) => ({
			invoice: {
				...state.invoice,
				packages: [],
			},
		})),

	setSelectedService: (service) => {
		set((state) => ({
			invoice: {
				...state.invoice,
				serviceId: service.id,
				packages: [],
			},
			selectedService: service,
		}));
	},
	updateAmountToPay: (amount) =>
		set((state) => ({
			invoice: {
				...state.invoice,
				amountToPay: amount,
			},
		})),
}));
