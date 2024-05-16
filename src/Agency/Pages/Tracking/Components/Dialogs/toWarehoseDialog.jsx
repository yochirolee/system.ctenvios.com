import { BarcodeIcon, Copy, CopyCheck, Package2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExcelUpload } from "../ContainerTab/ExcelUpload";

export function ToWharehouseDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline ">
					<Package2Icon className="h-4 w-4 mx-2" /> Adicionar Paquetes
				</Button>
			</DialogTrigger>
			<DialogContent className="w-1/2">
				<DialogHeader>
					<DialogTitle>Adicionar al Almacen</DialogTitle>
					<DialogDescription>Dar entrada de paquetes al Almacen Mypimes.</DialogDescription>
				</DialogHeader>
				<div className="p-4">
					<ExcelUpload />
				</div>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Input id="search" className="relative pl-10"></Input>
						<BarcodeIcon className="absolute text-gray-500 mt-2 ml-2" />
					</div>
				</div>

				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
