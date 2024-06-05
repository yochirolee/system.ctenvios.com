import axios from "axios";

const development_URL = "http://localhost:3000/api/v1";
const production_URL = "https://tracking.ctenvios.com/api/v1";
axios.defaults.baseURL = production_URL;
const apiKey = "c3VwYmFzZWNyZXQ=";
axios.defaults.headers.common = { "api-key": apiKey };

//add api key auth to headers

export const apiTracking = {
	tracking: {
		addContainer: async (data) => {
			const response = await axios.post(`tracking/moveToLocation`, data);
			return response.data;
		},
		byContainerId: async (id) => {
			if (!id) return;
			const response = await axios.get(`tracking/container/${id}`);
			return response.data;
		},
		upsertByExcelFile: async (file, setUploadProgress) => {
			try {
				const formData = new FormData();
				formData.append("file", file);
				const response = await axios.post(`parcels/excel/hbl`, formData, {
					onUploadProgress: (progressEvent) => {
						const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
						setUploadProgress(percentCompleted);
					},
				});
				return response.data;
			} catch (e) {
				throw e;
			}
		},
		getPackage: async (hbl) => {
			const response = await axios.get(`tracking/hbl/${hbl}`);
			return response.data;
		},
		getPackagesWithProblems: async () => {
			const response = await axios.get(`tracking/problems`);
			return response.data;
		},
		getInvoice: async (invoiceId) => {
			const response = await axios.get(`tracking/invoice/${invoiceId}`);
			return response.data;
		},
	},
	locations: {
		get: async () => {
			const response = await axios.get(`locations`);
			return response.data;
		},
	},
	status: {
		get: async () => {
			const response = await axios.get(`status`);
			return response.data;
		},
	},
	events: {
		getByHbl: async (hbl) => {
			const response = await axios.get(`events/hbl/${hbl}`);
			return response.data;
		},

		uploadImage: async (file, setUploadProgress) => {
			try {
				const formData = new FormData();
				formData.append("image", file);
				const response = await axios.post(`notes/image`, formData, {
					onUploadProgress: (progressEvent) => {
						const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
						setUploadProgress(percentCompleted);
					},
				});
				return response.data;
			} catch (e) {
				throw e;
			}
		},
	},
	notes: {
		delete: async (id) => {
			const response = await axios.delete(`notes/${id}`);
			return response.data;
		},
		create: async (data) => {
			const response = await axios.post(`notes`, data);
			return response.data;
		},
	},

	containers: {
		get: async () => {
			const response = await axios.get(`containers`);
			return response.data;
		},
	},
	parcels: {
		get: async () => {
			const response = await axios.get(`parcels`);
			return response.data;
		},
		getByContainerId: async (id) => {
			const response = await axios.get(`parcels/container/${id}`);
			return response.data;
		},
		moveByContainerId: async (data) => {
			console.log(data, "data on");
			const response = await axios.post(`parcels/moveParcelsByContainerId/`, data);
			return response.data;
		},
		getByHbl: async (hbl) => {
			const response = await axios.get(`parcels/hbl/${hbl}`);
			return response.data;
		},
		getByInvoiceId: async (invoiceId) => {
			const response = await axios.get(`parcels/invoice/${invoiceId}`);
			return response.data;
		},
		getIssues: async () => {
			const response = await axios.get(`parcels/issues`);
			return response.data;
		},
	},
};
export default apiTracking;
