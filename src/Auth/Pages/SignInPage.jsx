import { React } from "react";
import { SignInForm } from "../Components/SignInForm";
import { Card } from "@tremor/react";

export const SignInPage = () => {
	return (
		<div className="grid grid-flow-row lg:grid-flow-col  max-w-7xl mx-auto lg:grid-cols-12 bg-white h-screen ">
			<div className="lg:flex hidden  lg:col-span-6 xl:col-span-8 lg:place-content-center items-center ">
				<div className="relative isolate px-6 pt-14 lg:px-8">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
					<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
								Eres agencia y quieres enviar con nosotros?
								<a href="#" className="font-semibold text-blue-600 ml-2">
									<span className="absolute inset-0 " aria-hidden="true" />
									Contactanos <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Caribe Travel Express
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Caribe Travel Express and Services @2023 - All Rights Reserved.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="https://ctenvios.com"
									className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>
									Visita Nuestra Tienda
								</a>
								<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
									Contactanos por Whatsapp <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
				</div>
			</div>
			<div className=" lg:col-span-6 ">
				<SignInForm />
			</div>
		</div>
	);
};
