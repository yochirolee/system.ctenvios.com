import { React } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";
import { EventForm } from "./EventForm";

export const EventSheet = ({ event,hbl }) => {
	
	if (!event) return null;
	return (
		<Sheet>
			<SheetTrigger>
				<Button size="icon" variant="ghost" className="h-6 w-6">
					<MessageSquarePlus className="size-4" />
					<span className="sr-only">Add Comment</span>
				</Button>
			</SheetTrigger>
			<SheetContent className="w-[600px]">
				<SheetHeader>
					<SheetTitle>Notes </SheetTitle>
					<SheetDescription>Create a Note</SheetDescription>
					
					<EventForm hbloc={event.hbloc} hbl={hbl} />
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};
