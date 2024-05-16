import { React, useState } from "react";
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
import { FileBadge2, FileCog, FileUpIcon } from "lucide-react";
import { ComboboxStatus } from "./ComboBoxStatus";
import { FormUpdateContainer } from "./FormUpdateContainer";
export const DialogUpdate = ({ selectedContainerId }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Dialog >
			<DialogTrigger asChild>
				<Button variant="ghost" disabled={selectedContainerId ? false : true}>
					<FileCog className="mr-2 h-4 w-4" /> Update
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-1/3 min-w-max ">
				<DialogHeader>
					<DialogTitle>Actualizar Tracking </DialogTitle>
					<DialogDescription>Se Actualizara el Tracking</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<FormUpdateContainer selectedContainerId={selectedContainerId} setIsOpen={setIsOpen} />
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
