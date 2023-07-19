import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";

export function SignUpForm() {
	const { isLoaded, signUp, setActive } = useSignUp();
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [pendingVerification, setPendingVerification] = useState(false);
	const [code, setCode] = useState("");

	// start the sign up process.
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isLoaded) {
			return;
		}

		try {
			await signUp.create({
				emailAddress,
				password,
			});

			// send the email.
			await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

			// change the UI to our pending section.
			setPendingVerification(true);
		} catch (err) {
			console.error(JSON.stringify(err, null, 2));
		}
	};

	// This verifies the user using email code that is delivered.
	const onPressVerify = async (e) => {
		e.preventDefault();
		if (!isLoaded) {
			return;
		}

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code,
			});
			if (completeSignUp.status !== "complete") {
				/*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
				console.log(JSON.stringify(completeSignUp, null, 2));
			}
			if (completeSignUp.status === "complete") {
				/*  await setActive({ session: completeSignUp.createdSessionId })
        router.push("/"); */
				setPendingVerification(false);
			}
		} catch (err) {
			console.error(JSON.stringify(err, null, 2));
		}
	};

	return (
		<div>
			{!pendingVerification && (
				<form>
					<div className="col-span-full border p-4 ">
						<div className="sm:col-span-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Correo Electronico
							</label>
							<div className="mt-2">
								<input
									onChange={(e) => setEmailAddress(e.target.value)}
									id="email"
									name="email"
									type="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="mt-2">
								<input
									onChange={(e) => setPassword(e.target.value)}
									id="password"
									name="password"
									type="password"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<button
							className="rounded-md mt-4 bg-blue-600 w-32 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							onClick={handleSubmit}
						>
							Sign up
						</button>
					</div>
				</form>
			)}
			{pendingVerification && (
				<div>
					<form>
						<input
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							value={code}
							placeholder="Code..."
							onChange={(e) => setCode(e.target.value)}
						/>
						<button onClick={onPressVerify}>Verify Email</button>
					</form>
				</div>
			)}
		</div>
	);
}
