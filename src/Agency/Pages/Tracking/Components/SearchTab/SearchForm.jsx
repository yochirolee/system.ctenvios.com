import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScanIcon, TimerIcon } from "lucide-react";
import { React } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	search: z.string().min(4, {
		message: "Tracking must be at least 4 characters.",
	}),
});

export const SearchForm = ({ changeSearchTerm, isLoading }) => {
	const form = useForm({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data) => {
		changeSearchTerm(data.search);
	};

	return (
		<header className="  z-30 border bg-red-500 h-14 items-center gap-4 border-b bg-background  sm:static sm:h-auto sm:border-0 sm:bg-transparent mb-4">
			<div className="flex flex-col w-full gap-4 ">
				<div className="grid gap-4">
					<Card>
						<CardHeader className="flex  flex-row items-center">
							<div>
								<CardTitle>Buscar</CardTitle>
							</div>
							<div className="ml-auto flex items-center gap-2">
								<TimerIcon className="h-4 w-4" />
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Tracking System Last Update
								</div>
								<div className="text-sm">June 23, 2022</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="grid gap-4 lg: w-1/2 ">
								<Form {...form}>
									<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
										<FormField
											control={form.control}
											name="search"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<div className="flex items-center justify-center mb-2">
															<div className="relative w-full">
																<ScanIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500 dark:text-gray-400" />
																<Input
																	className="pl-12 pr-4 py-3 rounded-lg border font-semibold  dark:border-gray-700 focus:outline-none w-full"
																	placeholder="Enter or Scan package by QR code"
																	type="text"
																	{...field}
																/>
															</div>
														</div>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<Button type="submit" className="w-full">
											{isLoading ? "Buscando..." : "Buscar"}
										</Button>
									</form>
								</Form>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</header>
	);
};
