import { useSignIn, useSession } from "@clerk/clerk-react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import apiServices from "../../Agency/Api/apiServices";
import { useAuth } from "../Hooks/useAuth";

export const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(null);

	const { login, isLoaded, isLoading } = useAuth();

	if (!isLoaded) {
		return null;
	}

	const submit = async (e) => {
		try {
			e.preventDefault();
			await login(email, password);
		} catch (err) {
			setIsError(err);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img className="mx-auto h-20 w-auto" src="/ctelogo.png" alt="CTEnvios" />
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={submit}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex  w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								<div className="flex gap-2 items-center">
									{isLoading ? (
										<EllipsisHorizontalIcon className="  animate-pulse mx-auto h-5 w-5 text-white " />
									) : null}
									Sign in
								</div>
							</button>
						</div>
					</form>

					<p className="mt-10 border p-4 rounded-lg bg-slate-100 text-center text-sm text-slate-500">
						Eres Agencia y quieres enviar con CTEnvios?
						<a href="#" className="font-semibold leading-6 px-4 text-slate-700 hover:text-slate-600">
							Llamanos 305-851-3004
						</a>
					</p>
				</div>
			</div>
		</>
	);
};
