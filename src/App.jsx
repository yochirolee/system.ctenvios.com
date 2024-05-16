import { QueryClient, QueryClientProvider } from "react-query";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./Router/RouterApp";
import { ThemeProvider } from "./Themes/ThemeProvider";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // default: true
		},
	},
});
const clerk_pub_key = "pk_test_Y2FzdWFsLWdhdG9yLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
	return (
		<ClerkProvider publishableKey={clerk_pub_key}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
						<RouterApp />
					</ThemeProvider>
				</BrowserRouter>
			</QueryClientProvider>
		</ClerkProvider>
	);
}

export default App;
