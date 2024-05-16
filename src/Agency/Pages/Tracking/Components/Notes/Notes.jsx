import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CornerDownLeft, Image, Scroll } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";

export default function Notes({ history }) {
	console.log(history, "events");
	if (!history) return null;
	return (
		<div className="mx-2 bg-white rounded-lg space-y-2  px-2">
			<ScrollArea className="h-96 py-4   px-2 mx-2 ">
				<div className="flex flex-col h-[400px] max-h-[400px]   border-gray-200 dark:border-gray-800">
					<div className="flex-1 flex flex-col p-4 gap-2 overflow-hidden">
						{history?.map((event, index) => (
							<div>
								{event?.notes?.length > 0 && (
									<div className="flex items-center gap-2">
										<div className="flex gap-2 items-center w-full my-2 border-b">
											<p className="text-sm font-semibold">{event?.location?.name}</p>
											<p className="text-xs text-gray-500 dark:text-gray-400">{event?.status}</p>
										</div>
									</div>
								)}
								{event?.notes?.map((note, i) => (
									<div className="flex justify-end items-end gap-2">
										<div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm">
											<div className="grid gap-1">
												<p className="text-xs text-gray-500 dark:text-gray-400">{`Jane Smith <jane@example.com>`}</p>
												<p>{note?.note}</p>
												<p className="text-xs text-gray-500 dark:text-gray-400">
													{note?.createdAt}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</ScrollArea>

			<form className="relative overflow-hidden my-2 rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
				<Label htmlFor="message" className="sr-only">
					Message
				</Label>
				<Textarea
					id="message"
					placeholder="Type your message here..."
					className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
				/>
				<div className="flex items-center p-3 pt-0">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="ghost" size="icon">
									<Image className="size-4" />
									<span className="sr-only">Attach Image</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent side="top">Attach Image</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<Button type="submit" size="sm" className="ml-auto gap-1.5">
						Send Message
						<CornerDownLeft className="size-3.5" />
					</Button>
				</div>
			</form>
		</div>
	);
}
