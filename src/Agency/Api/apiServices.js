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
		getServices: async () => {
			const { data } = await axios.get("/services");
			return data;
		},

		getServicesByAgencyId: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.get(`/services/getByAgencyId/${id}`);
			return data;
		},

		createService: async (newService) => {
			if (!newService) throw new Error("newService is required");
			const { data } = await axios.post("/services", newService);
			return data;
		},

		updateService: async (service) => {
			if (!service) throw new Error("service is required");
			service.isActive = !!service.isActive;
			const { data } = await axios.put(`/services/${service.id}`, service);
			return data;
		},
		deleteService: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/services/${id}`);
			return data;
		},
	},

	servicesProviders: {
		getServicesProviders: async () => {
			const { data } = await axios.get("/servicesProviders");
			return data;
		},
		createServiceProvider: async (newServiceProvider) => {
			if (!newServiceProvider) throw new Error("newServiceProvider is required");
			const { data } = await axios.post("/servicesProviders", newServiceProvider);
			return data;
		},
		updateServiceProvider: async (serviceProvider) => {
			if (!serviceProvider) throw new Error("serviceProvider is required");
			const { data } = await axios.put(`/servicesProviders/${serviceProvider.id}`, serviceProvider);
			return data;
		},
		deleteServiceProvider: async (id) => {
			if (!id) throw new Error("id is required");
			const { data } = await axios.delete(`/servicesProviders/${id}`);
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
	},
	productsCategories: {
		getProductsCategories: async () => {
			const { data } = await axios.get("/productsCategories");
			return data;
		},
	},
};

export default apiServices;
