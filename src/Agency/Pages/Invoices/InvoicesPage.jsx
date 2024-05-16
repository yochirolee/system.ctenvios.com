/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vusY036n5Np
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, TrashIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const InvoicesPage = () => {
	return (
		<div className="grid grid-cols-12 justify-between space-x-8">
			<ScrollArea className="col-span-9 p-4   h-screen">
				<div className="p-2 ">
					<section className=" ">
						<div className="container mx-auto px-4 md:px-6">
							<h1 className="text-3xl md:text-4xl font-bold mb-8">Invoice</h1>
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h2 className="text-2xl font-bold mb-4">Customer Information</h2>
									<form className="space-y-4">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<Label htmlFor="firstName">First Name</Label>
												<Input id="firstName" type="text" />
											</div>
											<div>
												<Label htmlFor="lastName">Last Name</Label>
												<Input id="lastName" type="text" />
											</div>
										</div>
										<div>
											<Label htmlFor="email">Email</Label>
											<Input id="email" type="email" />
										</div>
										<div>
											<Label htmlFor="address">Address</Label>
											<Input id="address" type="text" />
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<Label htmlFor="city">City</Label>
												<Input id="city" type="text" />
											</div>
											<div>
												<Label htmlFor="state">State</Label>
												<Input id="state" type="text" />
											</div>
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<Label htmlFor="zip">Zip Code</Label>
												<Input id="zip" type="text" />
											</div>
											<div>
												<Label htmlFor="country">Country</Label>
												<Input id="country" type="text" />
											</div>
										</div>
									</form>
								</div>
								<div>
									<h2 className="text-2xl font-bold mb-4">Reciever Information</h2>
									<form className="space-y-4">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<Label htmlFor="firstName">First Name</Label>
												<Input id="firstName" type="text" />
											</div>
											<div>
												<Label htmlFor="lastName">Last Name</Label>
												<Input id="lastName" type="text" />
											</div>
										</div>
										<div>
											<Label htmlFor="email">Email</Label>
											<Input id="email" type="email" />
										</div>
										<div>
											<Label htmlFor="address">Address</Label>
											<Input id="address" type="text" />
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<Label htmlFor="city">City</Label>
												<Input id="city" type="text" />
											</div>
											<div>
												<Label htmlFor="state">State</Label>
												<Input id="state" type="text" />
											</div>
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<Label htmlFor="zip">Zip Code</Label>
												<Input id="zip" type="text" />
											</div>
											<div>
												<Label htmlFor="country">Country</Label>
												<Input id="country" type="text" />
											</div>
										</div>
									</form>
								</div>
								<div />
							</div>
						</div>
					</section>
					<section>
						<div className="container px-4 md:px-6 grid gap-8 py-12">
							<div className="flex items-center justify-between">
								<h1 className="text-2xl font-bold">Shopping Cart</h1>
								<Button size="sm" variant="outline">
									Clear Cart
								</Button>
							</div>
							<div className="border shadow-sm rounded-lg">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="w-[80px]">Image</TableHead>
											<TableHead>Product</TableHead>
											<TableHead>Quantity</TableHead>
											<TableHead>Price</TableHead>
											<TableHead>Total</TableHead>
											<TableHead />
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell>
												<img
													alt="Product Image"
													className="aspect-square rounded-md object-cover"
													height="64"
													src="/placeholder.svg"
													width="64"
												/>
											</TableCell>
											<TableCell className="font-medium">Acme Wireless Headphones</TableCell>
											<TableCell>
												<Select className="w-24" defaultValue="1">
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="1">1</SelectItem>
														<SelectItem value="2">2</SelectItem>
														<SelectItem value="3">3</SelectItem>
														<SelectItem value="4">4</SelectItem>
														<SelectItem value="5">5</SelectItem>
													</SelectContent>
												</Select>
											</TableCell>
											<TableCell>$99.99</TableCell>
											<TableCell>$99.99</TableCell>
											<TableCell>
												<Button size="icon" variant="outline">
													<TrashIcon className="h-4 w-4" />
													<span className="sr-only">Remove</span>
												</Button>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<img
													alt="Product Image"
													className="aspect-square rounded-md object-cover"
													height="64"
													src="/placeholder.svg"
													width="64"
												/>
											</TableCell>
											<TableCell className="font-medium">Acme Smart Thermostat</TableCell>
											<TableCell>
												<Select className="w-24" defaultValue="1">
													<SelectTrigger>
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="1">1</SelectItem>
														<SelectItem value="2">2</SelectItem>
														<SelectItem value="3">3</SelectItem>
														<SelectItem value="4">4</SelectItem>
														<SelectItem value="5">5</SelectItem>
													</SelectContent>
												</Select>
											</TableCell>
											<TableCell>$149.99</TableCell>
											<TableCell>$149.99</TableCell>
											<TableCell>
												<Button size="icon" variant="outline">
													<TrashIcon className="h-4 w-4" />
													<span className="sr-only">Remove</span>
												</Button>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								<Card>
									<CardHeader>
										<CardTitle>Order Summary</CardTitle>
									</CardHeader>
									<CardContent className="grid gap-4">
										<div className="flex items-center justify-between">
											<div>Subtotal</div>
											<div>$249.98</div>
										</div>
										<div className="flex items-center justify-between">
											<div>Shipping</div>
											<div>$9.99</div>
										</div>
										<Separator />
										<div className="flex items-center justify-between font-medium">
											<div>Total</div>
											<div>$259.97</div>
										</div>
									</CardContent>
									<CardFooter className="flex items-center gap-2">
										<Button size="lg">Proceed to Checkout</Button>
									</CardFooter>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Shipping Information</CardTitle>
									</CardHeader>
									<CardContent className="grid gap-4">
										<div className="grid gap-2">
											<Label htmlFor="name">Name</Label>
											<Input defaultValue="John Doe" id="name" />
										</div>
										<div className="grid gap-2">
											<Label htmlFor="address">Address</Label>
											<Textarea defaultValue="123 Main St, Anytown USA" id="address" />
										</div>
										<div className="grid sm:grid-cols-2 gap-4">
											<div className="grid gap-2">
												<Label htmlFor="city">City</Label>
												<Input defaultValue="Anytown" id="city" />
											</div>
											<div className="grid gap-2">
												<Label htmlFor="state">State</Label>
												<Input defaultValue="CA" id="state" />
											</div>
										</div>
										<div className="grid sm:grid-cols-2 gap-4">
											<div className="grid gap-2">
												<Label htmlFor="zip" />
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</section>
					{/* 			
					<div>
						<h2 className="text-xl font-semibold mb-2">Items</h2>
						<div className="space-y-4">
							<div className="flex justify-between space-x-4">
								<div className="w-2/3">
									<div className="flex items-center space-x-2">
										<Input placeholder="Item name" />
										<Select>
											<SelectTrigger className="bg-gray-100 px-2 py-1 rounded-md text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
												<SelectValue placeholder="Select category" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="electronics">Electronics</SelectItem>
												<SelectItem value="apparel">Apparel</SelectItem>
												<SelectItem value="office-supplies">Office Supplies</SelectItem>
												<SelectItem value="furniture">Furniture</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
								<Input className="w-1/6" placeholder="Weigth" />
								<Input className="w-1/6" placeholder="Qty" />
								<Input className="w-1/6" placeholder="Price" />
								<button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
									<Trash2 className="w-4 h-4" />
								</button>
							</div>
							<div className="flex justify-between space-x-4">
								<div className="w-2/3">
									<div className="flex items-center space-x-2">
										<Input placeholder="Item name" />
										<Select>
											<SelectTrigger className="bg-gray-100 px-2 py-1 rounded-md text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
												<SelectValue placeholder="Select category" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="electronics">Electronics</SelectItem>
												<SelectItem value="apparel">Apparel</SelectItem>
												<SelectItem value="office-supplies">Office Supplies</SelectItem>
												<SelectItem value="furniture">Furniture</SelectItem>
											</SelectContent>
										</Select>
										<button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
											<XIcon className="w-4 h-4" />
										</button>
									</div>
								</div>
								<Input className="w-1/6" placeholder="Qty" />
								<Input className="w-1/6" placeholder="Price" />
							</div>
							<div className="flex justify-between space-x-4">
								<div className="w-2/3">
									<div className="flex items-center space-x-2">
										<Input placeholder="Item name" />
										<Select>
											<SelectTrigger className="bg-gray-100 px-2 py-1 rounded-md text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
												<SelectValue placeholder="Select category" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="electronics">Electronics</SelectItem>
												<SelectItem value="apparel">Apparel</SelectItem>
												<SelectItem value="office-supplies">Office Supplies</SelectItem>
												<SelectItem value="furniture">Furniture</SelectItem>
											</SelectContent>
										</Select>
										<button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
											<XIcon className="w-4 h-4" />
										</button>
									</div>
								</div>
								<Input className="w-1/6" placeholder="Qty" />
								<Input className="w-1/6" placeholder="Price" />
							</div>
							<div className="flex justify-between space-x-4">
								<div className="w-2/3">
									<div className="flex items-center space-x-2">
										<Input placeholder="Item name" />
										<Select>
											<SelectTrigger className="bg-gray-100 px-2 py-1 rounded-md text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
												<SelectValue placeholder="Select category" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="electronics">Electronics</SelectItem>
												<SelectItem value="apparel">Apparel</SelectItem>
												<SelectItem value="office-supplies">Office Supplies</SelectItem>
												<SelectItem value="furniture">Furniture</SelectItem>
											</SelectContent>
										</Select>
										<button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
											<XIcon className="w-4 h-4" />
										</button>
									</div>
								</div>
								<Input className="w-1/6" placeholder="Qty" />
								<Input className="w-1/6" placeholder="Price" />
							</div>
							<Button className="mt-2" variant="outline">
								+ Add item
							</Button>
						</div>
					</div>
					<div>
						<Label className="mb-2" htmlFor="note">
							Note
						</Label>
						<Textarea id="note" placeholder="Add a note" />
					</div>
					<div>
						<Select>
							<SelectTrigger aria-label="More options" id="more-options">
								<SelectValue placeholder="More options" />
							</SelectTrigger>
						</Select>
					</div>
					<div className="flex justify-between items-center">
						<Button variant="ghost">Back</Button>
						<div className="flex space-x-4">
							<Button variant="ghost">Your client</Button>
							<Button variant="ghost">Payment method</Button>
							<Button>Next</Button>
						</div>
					</div> */}
				</div>
			</ScrollArea>
			<div className="col-span-3 pt-8 px-2 space-y-8">
				<div className="flex justify-between space-x-8">
					<div className="space-y-2">
						<div className="text-sm">INVOICE NO</div>
						<div className="font-bold">000002</div>
					</div>
					<div className="space-y-2">
						<div className="text-sm">ISSUED</div>
						<div className="font-bold">5/10/24</div>
					</div>
					<div className="space-y-2">
						<div className="text-sm">DUE DATE</div>
						<div className="font-bold">5/24/24</div>
					</div>
				</div>
				<div className="grid grid-cols-2 justify-between space-x-8">
					<div className="space-y-2">
						<div className="text-sm">FROM</div>
						<div className="font-bold">Caribe Travel Express</div>
						<div className="text-sm">yleecruz@gmail.com</div>
						<div className="text-sm ">
							Avenida 31 entre 30 y 34 No 3008 Playa, La Habana 33016 Cuba
						</div>
					</div>
					<div className="space-y-2">
						<div className="text-sm">TO</div>
						<div className="h-6 w-24 bg-gray-200" />
					</div>
				</div>
				<div className="border-t border-b py-6">
					<div className="flex justify-between mb-4">
						<div className="text-sm">DESCRIPTION</div>
						<div className="text-sm">QTY</div>
						<div className="text-sm">PRICE</div>
						<div className="text-sm">AMOUNT</div>
					</div>
					<div className="flex justify-between">
						<div className="font-bold">[Item description]</div>
						<div className="font-bold">9</div>
						<div className="font-bold">$99.00</div>
						<div className="font-bold">$891.00</div>
					</div>
				</div>
				<div className="space-y-4">
					<div className="text-sm">PAYABLE IN</div>
					<div className="flex items-center space-x-2">
						<div className="h-6 w-24 bg-gray-200" />
						<div className="flex items-center">
							<img
								alt="USD"
								className="h-4 w-6"
								height="16"
								src="/placeholder.svg"
								style={{
									aspectRatio: "24/16",
									objectFit: "cover",
								}}
								width="24"
							/>
							<span className="ml-1">US Dollar</span>
						</div>
					</div>
				</div>
				<div className="space-y-4">
					<div className="text-sm">INSTRUCTIONS</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<div className="text-sm">Network</div>
							<div className="h-6 w-24 bg-gray-200" />
						</div>
						<div className="space-y-2">
							<div className="text-sm">Ethereum</div>
							<div className="h-6 w-24 bg-gray-200" />
						</div>
						<div className="space-y-2">
							<div className="text-sm">Wallet</div>
							<div className="h-6 w-24 bg-gray-200" />
						</div>
						<div className="space-y-2">
							<div className="text-sm">Account</div>
							<div className="h-6 w-24 bg-gray-200" />
						</div>
						<div className="space-y-2">
							<div className="text-sm">Routing</div>
							<div className="h-6 w-24 bg-gray-200" />
						</div>
						<div className="space-y-2">
							<div className="text-sm">Swift</div>
							<div className="h-6 w-24 bg-gray-200" />
						</div>
					</div>
				</div>
				<div className="text-xs text-right text-gray-400">Powered by Acctuol</div>
			</div>
		</div>
	);
};

function XIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
