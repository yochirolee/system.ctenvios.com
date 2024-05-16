import axios from "axios";

const development_URL = "http://localhost:3001/api/v1";
const production_URL = "https://api-ctenvios.vercel.app/api/v1";
axios.defaults.baseURL = development_URL;

const apiServices = {
	agencies: {
		getAgencies: async () => {
			const response = await axios.get("/agencies");
			if (response.status === 404) throw new Error("No se encontraron agencias");
			return response.data;
		},

		getAgencyById: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/agencies/${id}`);
			return data;
		},

		createAgency: async (newAgency) => {
			if (!newAgency) throw new Error("newAgency is required");
			const { data } = await axios.post("/agencies", newAgency);
			return data;
		},

		updateAgency: async (agency) => {
			if (!agency) throw new Error("agency is required");
			const { data } = await axios.put(`/agencies/${agency.id}`, agency);
			return data;
		},

		deleteAgency: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/agencies/${id}`);
			return data;
		},

		getServicesProvidersByAgencyId: async (id) => {
			const { data } = await axios.get(`/servicesProviders/getByAgencyId/${id}`);
			return data;
		},
		getEmployeesByAgencyId: async (id) => {
			const { data } = await axios.get(`/employees/getByAgencyId/${id}`);
			return data;
		},
	},
	services: {
		get: async () => {
			const { data } = await axios.get("/services");
			return data;
		},

		getByProviderId: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/services/getByProviderId/${id}`);
			return data;
		},

		getByAgencyId: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/services/getByAgencyId/${id}`);
			return data;
		},

		create: async (newService) => {
			if (!newService) throw new Error("newService is required");
			const { data } = await axios.post("/services", newService);
			return data;
		},

		update: async (service) => {
			if (!service) throw new Error("service is required");
			service.isActive = !!service.isActive;
			const { data } = await axios.put(`/services/${service.id}`, service);
			return data;
		},
		delete: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/services/${id}`);
			return data;
		},
	},
	categories: {
		get: async () => {
			const { data } = await axios.get("/categories");
			return data;
		},
		getCategoriesByServiceId: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/categories/getByServiceId/${id}`);
			return data;
		},
		create: async (newCategory) => {
			console.log(newCategory, "newCategory");
			if (!newCategory) throw new Error("Category data is required");
			const { data } = await axios.post("/categories", newCategory);
			return data;
		},
	},
	providerFares: {
		get: async () => {
			const { data } = await axios.get("/providerFares");
			return data;
		},
		getFareById: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/providerFares/${id}`);
			return data;
		},
		create: async (newFare) => {
			console.log(newFare, "newFare");
			if (!newFare) throw new Error("Category data is required");
			const { data } = await axios.post("/providerFares", newFare);
			return data;
		},
	},

	providers: {
		get: async () => {
			const { data } = await axios.get("/providers");
			return data;
		},
		create: async (newServiceProvider) => {
			if (!newServiceProvider) throw new Error("newServiceProvider is required");
			const { data } = await axios.post("/providers", newServiceProvider);
			return data;
		},
		update: async (serviceProvider) => {
			if (!serviceProvider) throw new Error("serviceProvider is required");
			const { data } = await axios.put(`/providers/${serviceProvider.id}`, serviceProvider);
			return data;
		},
		delete: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/providers/${id}`);
			return data;
		},
	},

	categoriesPrices: {
		getCategoriesPrices: async () => {
			const { data } = await axios.get("/categoriesPrices");
			return data;
		},
		createCategoryPrice: async (newServiceCategoryPrice) => {
			if (!newServiceCategoryPrice) throw new Error("newServiceCategoryPrice is required");
			const { data } = await axios.post("/categoriesPrices", newServiceCategoryPrice);
			return data;
		},

		deleteCategoryPrice: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/categoriesPrices/${id}`);
			return data;
		},
	},

	servicesPrices: {
		getServicesPrices: async () => {
			const { data } = await axios.get("/servicesPrices");
			return data;
		},
		createServicePrice: async (newServicePrice) => {
			if (!newServicePrice) throw new Error("newServicePrice is required");
			const { data } = await axios.post("/servicesPrices", newServicePrice);
			return data;
		},
		updateServicePrice: async (servicePrice) => {
			if (!servicePrice) throw new Error("servicePrice is required");
			const { data } = await axios.put(`/servicesPrices/${servicePrice.id}`, servicePrice);
			return data;
		},
		deleteServicePrice: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/servicesPrices/${id}`);
			return data;
		},
		getServicesPricesByAgencyId: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/servicesPrices/getByAgencyId/${id}`);
			return data;
		},
	},
	employees: {
		getEmployeeById: async (id) => {
			const { data } = await axios.get(`/employees/${id}`);
			return data;
		},
		getEmployeeByEmail: async (email) => {
			try {
				const { data } = await axios.get(`/employees/getEmployeeByEmail/${email}`);
				return data;
			} catch (error) {
				console.log(error);
			}
		},
		createEmployee: async (newEmployee) => {
			if (!newEmployee) throw new Error("newEmployee is required");
			const { data } = await axios.post("/employees", newEmployee);
			return data;
		},
		updateEmployee: async (employee) => {
			if (!employee) throw new Error("employee is required");
			const { data } = await axios.put(`/employees/${employee.id}`, employee);
			return data;
		},
		deleteEmployee: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/employees/${id}`);
			return data;
		},
	},
	packagesCategories: {
		getPackagesCategories: async () => {
			const { data } = await axios.get("/packagesCategories");
			return data;
		},
	},
	roles: {
		getRoles: async () => {
			const { data } = await axios.get("/roles");
			return data;
		},
	},
	customers: {
		getCustomers: async () => {
			const { data } = await axios.get("/customers");
			return data;
		},
		createCustomer: async (newCustomer) => {
			if (!newCustomer) throw new Error("newCustomer is required");
			const { data } = await axios.post("/customers", newCustomer);
			return data;
		},
		findCustomer: async (searchTerm) => {
			const { data } = await axios.get("/customers/search/" + searchTerm);
			return data;
		},
		createCustomerReciever: async (customerAndReciever) => {
			if (!customerAndReciever?.reciever || !customerAndReciever?.customer)
				throw new Error("customer and reciever are required");

			const { data } = await axios.post("/customers/createCustomerReciever", customerAndReciever);
			return data;
		},
	},

	recievers: {
		getRecievers: async () => {
			console.log("Running get all Recievers");
			const { data } = await axios.get("/recievers");
			return data;
		},
		createReciever: async (newReciever) => {
			if (!newReciever) throw new Error("newReciever is required");
			const { data } = await axios.post("/recievers", newReciever);
			return data;
		},
		findReciever: async (searchTerm) => {
			const { data } = await axios.get("/recievers/search/" + searchTerm);
			return data;
		},
		connectRecieverToCustomer: async (customerId, recieverId) => {
			const dataToConnect = {
				customerId,
				recieverId,
			};
			if (!customerId || !recieverId) throw new Error("customerId and recieverId are required");
			const { data } = await axios.post("/recievers/connectRecieverToCustomer", dataToConnect);
			return data;
		},
	},

	states: {
		getStates: async () => {
			const { data } = await axios.get("/states");
			return data;
		},
	},

	invoices: {
		getInvoices: async () => {
			const { data } = await axios.get("/invoices");
			return data;
		},
		createInvoice: async (newInvoice) => {
			if (!newInvoice) throw new Error("newInvoice is required");
			const { data } = await axios.post("/invoices", newInvoice);
			return data;
		},

		getInvoiceById: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/invoices/${id}`);
			return data;
		},
		getInvoicesByAgencyId: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/invoices/getByAgencyId/${id}`);
			return data;
		},
		payInvoice: async (paymentData) => {
			console.log("paymentData", paymentData);
			if (!paymentData.id) throw new Error("invoice Id is required");
			const { data } = await axios.post("/invoices/pay", paymentData);
			return data;
		},
	},

	paymentMethods: {
		getPaymentMethods: async () => {
			const { data } = await axios.get("/paymentMethods");
			return data;
		},
		createPaymentMethod: async (newPaymentMethod) => {
			if (!newPaymentMethod) throw new Error("newPaymentMethod is required");
			const { data } = await axios.post("/paymentMethods", newPaymentMethod);
			return data;
		},
	},

	flights: {
		getFlights: async () => {
			const { data } = await axios.get("/flights");
			return data;
		},
		getFlightById: async (id) => {
			console.log(id, "fly id");
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/flights/${id}`);
			console.log(data, "result flight by id");
			return data;
		},
		createFlight: async (flight) => {
			if (!id) throw new Error("Flight is required");
			const { data } = await axios.post("/flights", flight);
			return data;
		},
	},
};

export default apiServices;
