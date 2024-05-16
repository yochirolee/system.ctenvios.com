import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@api": path.resolve(__dirname, "./src/Agency/Api"),
			"@components": path.resolve(__dirname, "./src/Agency/Components"),
			"@hooks": path.resolve(__dirname, "./src/Agency/Hooks"),
		},
	},
});
