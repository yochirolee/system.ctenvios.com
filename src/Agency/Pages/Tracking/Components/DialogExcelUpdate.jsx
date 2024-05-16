import { React } from "react";
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
import { FileSpreadsheet, FileUpIcon } from "lucide-react";
import { ExcelUpload } from "./ContainerTab/ExcelUpload";
export const DialogExcelUpdate = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">
					<FileSpreadsheet className="mr-2 h-4 w-4" /> Update from Excel
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-1/3 min-w-max ">
				<DialogHeader>
					<DialogTitle>Actualizar Tracking </DialogTitle>
					<DialogDescription>Se Actualizara el Tracking desde un archivo Excel</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<ExcelUpload />
				</div>
				<DialogFooter>
					<DialogClose as={Button} variant={"outline"}>
						Close
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
