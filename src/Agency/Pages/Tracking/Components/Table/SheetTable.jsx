import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function SheetTable({ data }) {
	if (!data) return null;
	return (
		<Table className="">
			<TableCaption>A list of your reading sheets.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>No</TableHead>
					<TableHead>SheetName</TableHead>
					<TableHead>Hbl</TableHead>
					<TableHead>Errors</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map((sheet, index) => (
					<TableRow key={index}>
						<TableCell>{index}</TableCell>
						<TableCell>{sheet?.sheet}</TableCell>
						<TableCell>{sheet?.parcels}</TableCell>
						<TableCell>
							{sheet?.errors?.map((error, index) => (
								<div key={index} className="grid grid-cols-3 gap-4 space-x-6">
									<p>Fila: {error?.row}</p>
									<p>Col: {error?.column}</p>
									<p>Reason: {error?.reason}</p>
								</div>
							))}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Readed Sheets </TableCell>
					<TableCell className="text-right">{data?.length}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
