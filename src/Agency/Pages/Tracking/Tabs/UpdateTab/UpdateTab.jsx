import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "@/components/ui/table";
import { File, ScanIcon } from "lucide-react";
import { ComboBoxLocations } from "../../Components/ComboBoxLocations";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
	locationId: z.number({
		message: "Location is required",
	}),
});

export default function UpdateTab() {
	const form = useForm({
		resolver: zodResolver(formSchema),
	});
	return (
		<div className="flex flex-col   dark:bg-gray-900">
			<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full">
				<div className="flex items-center just gap-4">
					<h1 className="text-2xl font-bold  text-gray-900 dark:text-gray-100">Package Scanner</h1>
					<div className="flex items-center  gap-2 border px-2 rounded-full">
						<div className="w-2 h-2 rounded-full  bg-green-500" />
						<span className="text-xs text-green-800 font-semibold ">
							{navigator.onLine ? "Online" : "Offline"}
						</span>
					</div>
				</div>
				<div className="my-4  max-w-md">
					<Form {...form}>
						<ComboBoxLocations form={form} />
					</Form>
				</div>

				<div className="flex gap-2 items-center   justify-between mb-6">
					<div className="relative w-full max-w-md">
						<ScanIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500 dark:text-gray-400" />
						<Input
							className="pl-12 pr-4 py-3 rounded-lg border font-semibold  dark:border-gray-700 focus:outline-none w-full"
							placeholder="Enter or Scan package by QR code"
							type="text"
						/>
					</div>

					<Button variant="secondary" className="ml-2">
						<File className="h-4 w-4 mr-2" />
						Upload By Excel
					</Button>
				</div>
				<div className="overflow-auto mt-12 max-h-[500px] ">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Package ID</TableHead>
								<TableHead>Location</TableHead>
								<TableHead>Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>ABC123</TableCell>
								<TableCell>Warehouse A</TableCell>
								<TableCell>In Transit</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>XYZ456</TableCell>
								<TableCell>Delivery Hub</TableCell>
								<TableCell>Out for Delivery</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>DEF789</TableCell>
								<TableCell>Customer Address</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 rounded-full bg-green-500" />
										<span>Delivered</span>
									</div>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>GHI012</TableCell>
								<TableCell>Warehouse B</TableCell>
								<TableCell>Pending</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>JKL345</TableCell>
								<TableCell>Delivery Hub</TableCell>
								<TableCell>In Transit</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<div>
					<Button className="w-full mt-4">Update</Button>
				</div>
			</div>
		</div>
	);
}
