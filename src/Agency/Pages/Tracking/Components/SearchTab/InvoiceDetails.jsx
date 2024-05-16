import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck } from "lucide-react";
import { React } from "react";
import { TimeLine } from "./TimeLine";
export const InvoiceDetails = ({ invoice }) => {
	if (!invoice) return null;
	return (
		<Card className="overflow-hidden">
		
			<CardContent className="grid grid-cols-3 gap-10 p-20 text-sm">
				<div className=" ">
					<h1 className=" text-3xl font-bold">{invoice?.agency}</h1>
					<div className="flex items-center">
						<p className="text-[1.5rem] leading-none text-slate-900">
							<span className="font-bold">{invoice?.invoiceId}</span>
						</p>
						<p className="ml-3 space-x-1 text-sm">
							<span className="font-semibold text-slate-900">Factura</span>
						</p>
					</div>
				</div>
				<div className=" gap-3 border p-4 rounded-lg">
					<div className="font-semibold">Envia</div>
					<dl className="grid gap-3">
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Customer</dt>
							<dd>
								<dd>{invoice?.customer?.name + " " + invoice?.customer?.lastName}</dd>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Email</dt>
							<dd>
								<a href="mailto:">{invoice?.customer?.email}</a>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Phone</dt>
							<dd>
								<a href="tel:">{invoice?.customer?.mobile}</a>
							</dd>
						</div>
					</dl>
				</div>

				<div className=" gap-3 border p-4 rounded-lg">
					<div className="font-semibold">Recibe:</div>
					<dl className="grid gap-3">
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Customer</dt>
							<dd>
								<dd>{invoice?.reciever?.name + " " + invoice?.reciever?.lastName}</dd>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Email</dt>
							<dd>
								<a href="mailto:">{invoice?.customer?.email}</a>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Phone</dt>
							<dd>
								<a href="tel:">{invoice?.reciever?.mobile}</a>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">CI</dt>
							<dd>
								<a href="tel:">{invoice?.reciever.ci}</a>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Address</dt>
							<dd>
								<a className="text-[11px]">{invoice?.reciever.address}</a>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Province/City</dt>
							<dd>
								<a className="">
									{invoice?.reciever.province + " " + invoice?.reciever.municipality}
								</a>
							</dd>
						</div>
					</dl>
				</div>
			</CardContent>
			
		</Card>
	);
};
