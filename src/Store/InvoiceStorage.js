import { create } from "zustand";

/* export const useAuthStore = create((set) => ({
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
})); */

export const useInvoiceStore = create((set) => ({
	invoice: localStorage.getItem("invoice")
		? JSON.parse(localStorage.getItem("invoice"))
		: {
				agencyId: 0,
				recieverId: 0,
				customerId: 0,
				employeeId: 0,
				products: [],
				productsInInvoiceTotal: 0,
				productsInInvoiceSubTotal: 0,
				total: 0,
				discout: 0,
				discountType: "",
		  },

	addProduct: (product) =>
		set((state) => ({
			invoice: {
				...state.invoice,
				products: [...state.invoice.products, product],
			},
		})),

	updateProduct: (updatedProduct) =>
		set((state) => {
			const index = state.invoice.products.findIndex(
				(product) => product.productId === updatedProduct.productId,
			);
			state.invoice.products[index] = updatedProduct;

			return {
				...state,
			};
			/* 	productToUpdate= updatedProduct;
			return {
				invoice: {
					...state.invoice,
					products[index]=productToUpdate,
				},
			}; */
		}),
	deleteProduct: (productId) =>
		set((state) => {
			//delete product from invoice
			const products = state.invoice.products.filter((product) => product.productId !== productId);

			return {
				invoice: {
					...state.invoice,
					products: [...products],
				},
			};
		}),
}));
