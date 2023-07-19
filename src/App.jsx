import { QueryClient, QueryClientProvider } from "react-query";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./Router/RouterApp";

const queryClient = new QueryClient();
const clerk_pub_key = "pk_test_Y2FzdWFsLWdhdG9yLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
	return (
		<ClerkProvider publishableKey={clerk_pub_key}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<RouterApp />
				</BrowserRouter>
			</QueryClientProvider>
		</ClerkProvider>
	);
}

export default App;
