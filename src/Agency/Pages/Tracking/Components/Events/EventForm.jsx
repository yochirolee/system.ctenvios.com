import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast, useToast } from "@/components/ui/use-toast";

import { UploadCloud } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Toast } from "@/components/ui/toast";
import { ComboBoxLocations } from "../ComboBoxLocations";
import { ComboboxStatus } from "../ComboBoxStatus";
import { Textarea } from "@/components/ui/textarea";
import { trackingHooks } from "../../hooks/useTracking";
import { SheetClose } from "@/components/ui/sheet";
import { EventImageUpload } from "./EventImageUpload";
import { useState } from "react";

const formSchema = z.object({
	comment: z.string({
		message: "Comment is required",
	}),
});

export function EventForm({ hbloc, hbl, setIsOpen }) {
	const form = useForm({
		resolver: zodResolver(formSchema),
	});

	const [imageUrl, setImageUrl] = useState("");

	const createEventNoteMutation = trackingHooks.useCreateEventNote(setIsOpen);

	const onSubmit = async (data) => {
		data.hbloc = hbloc;
		data.hbl = hbl;

		if (imageUrl) data.imageUrl = imageUrl;
		createEventNoteMutation.mutate(data);
	};

	return (
		<Form {...form}>
			<p>{hbloc}</p>

			{/* 	<Card className="overflow-hidden">
				<CardHeader>
					<CardTitle>Product Images</CardTitle>
					<CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-2">
						<img
							alt="Product image"
							className="aspect-square w-full rounded-md object-cover"
							height="300"
							src="/placeholder.svg"
							width="300"
						/>
						<div className="grid grid-cols-3 gap-2">
							<button>
								<img
									alt="Product image"
									className="aspect-square w-full rounded-md object-cover"
									height="84"
									src="/placeholder.svg"
									width="84"
								/>
							</button>
							<button>
								<img
									alt="Product image"
									className="aspect-square w-full rounded-md object-cover"
									height="84"
									src="/placeholder.svg"
									width="84"
								/>
							</button>
							<button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
								<UploadCloud className="h-4 w-4 text-muted-foreground" />
								<span className="sr-only">Upload</span>
							</button>
						</div>
					</div>
				</CardContent>
			</Card> */}

			<EventImageUpload hbloc={hbloc} imageUrl={imageUrl} setImageUrl={setImageUrl} />

			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				{/* <ComboBoxLocations form={form} />
				<ComboboxStatus form={form} />
			 */}
				<FormField
					control={form.control}
					name="comment"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nota</FormLabel>
							<FormControl>
								<Textarea {...field}></Textarea>
							</FormControl>
							<FormDescription>Create a Note.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<SheetClose asChild>
					<Button type="submit">
						{createEventNoteMutation.isLoading ? "Guardando..." : "Guardar"}
					</Button>
				</SheetClose>
			</form>
		</Form>
	);
}
