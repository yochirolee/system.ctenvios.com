import { React } from "react";
export const InvoicePackageList = ({ invoice }) => {
	if (!invoice) return <div>Invoice not found</div>;
	const { packages } = invoice;
	return (
		<table className="grid   ">
			<thead className="">
				<tr className="grid grid-cols-12 text-slate-700 py-2 border-b  text-xs text-left">
					<th scope="col" className="col-span-2 ">
						Hbl
					</th>
					<th scope="col" className="col-span-5 ">
						Descripcion
					</th>
					<th scope="col" className="col-span-1 text-right ">
						Peso
					</th>
					<th scope="col" className="col-span-2 text-right">
						Precio
					</th>
					<th scope="col" className="col-span-2 text-right">
						SubTotal
					</th>
				</tr>
			</thead>
			<tbody>
				{packages.map((pack) => (
					<tr className="grid border-b border-gray-200/70 grid-cols-12 py-4  text-slate-600 text-xs">
						<td className="col-span-2 text-gray-700 text-left  ">{pack?.hbl}</td>

						<td className="col-span-5 inline-flex gap-2 text-left ">
							<div>{pack?.description}</div>
						</td>
						<td className="col-span-1 text-right">{parseFloat(pack?.weight).toFixed(2)}</td>
						<td className="col-span-2 text-right">${parseFloat(pack?.publicPrice).toFixed(2)}</td>
						<td className="col-span-2 text-right">
							$
							{pack.isSellByPounds
								? parseFloat(pack?.publicPrice * pack?.publicPrice).toFixed(2)
								: parseFloat(pack?.publicPrice).toFixed(2)}
						</td>
					</tr>
				))}
			</tbody>
			<tfoot className="grid grid-cols-3 mt-10">
				<div></div>
				<div></div>
				<div className="self-end   ">
					<tr className="grid my-2 grid-cols-2 text-right">
						<th scope="row" colspan="3" className="font-normal">
							Subtotal
						</th>
						<td className="ash atr att ave avm awl axv">
							${parseFloat(invoice?.amountToPay).toFixed(2)}
						</td>
					</tr>

					<tr className="grid my-2 grid-cols-2 text-right">
						<th scope="row" colspan="3" className="font-normal">
							Delivery
						</th>
						<td className="ash atr att avb avm awl axv">$0.00</td>
					</tr>
					<tr className="grid my-2 grid-cols-2 text-right">
						<th scope="row" colspan="3" className="font-normal">
							Extra Charge:
						</th>
						<td className="ash atr att avb avm awl axv">$0.00</td>
					</tr>
					<tr className="grid my-2 grid-cols-2 text-right">
						<th scope="row" colspan="3" className="font-normal">
							Tax
						</th>
						<td className="ash atr att avb avm awl axv">$0.00</td>
					</tr>
					<tr className="grid my-2  grid-cols-2 text-right">
						<th scope="row" colspan="3" className="font-semibold">
							Total
						</th>
						<td className="font-semibold">
							${parseFloat(invoice?.amountToPay).toFixed(2)}
						</td>
					</tr>
				</div>
			</tfoot>
		</table>
	);
};
