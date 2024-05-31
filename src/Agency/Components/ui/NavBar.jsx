import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { ArrowDownTrayIcon, Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { Links } from "./Links";
import { useAuth } from "../../../Auth/Hooks/useAuth";
import { ModeToggle } from "./theme-toggle";
import { Input } from "@/components/ui/input";

export default function NavBar({ session }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { logout } = useAuth();

	return (
		<header className="bg-white print:hidden dark:bg-gray-900 dark:text-white">
			<nav
				className="mx-auto flex  items-center justify-between p-2 border-b lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">CTEnvios</span>
						<img className="h-10 w-auto object-scale-down   " src="/ctelogo.png" alt="Logo" />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{true ? (
						<div className="inline-flex gap-4 items-center">
							<a className="relative cursor-pointer">
								<BellIcon className="w-6 h-6 text-gray-500 dark:text-white" />
								<span className="absolute -top-1 left-2.5  w-4 h-4 rounded-full text-center  font-semibold text-xs bg-red-500 text-white">
									0
								</span>
							</a>
							<ModeToggle />
							<a
								onClick={() => {
									logout();
								}}
								href="#"
								className="text-sm font-semibold leading-6 text-gray-500 dark:text-white"
							>
								<ArrowDownTrayIcon className="w-6 h-6 -rotate-90" />
							</a>
						</div>
					) : (
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
							Log in <span aria-hidden="true">&rarr;</span>
						</a>
					)}
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">CTEnvios</span>
							<img className="h-8 w-auto" src="/ctelogo.png" alt="Logo" />
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									{({ open }) => <Links />}
								</Disclosure>
							</div>
							<div className="py-6">
								{session ? (
									<a
										onClick={() => {
											logout();
										}}
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Logout
									</a>
								) : (
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Log in
									</a>
								)}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
