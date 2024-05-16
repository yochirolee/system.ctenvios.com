import { React, useMemo } from "react";
import { NewPackage } from "./newPackage";

export const InvoicePackagesList = ({ invoice, selectedService, updateAmountToPay }) => {
	const { packages } = invoice;
	

	return (
		<>
			<div className=" grid grid-flow-col text-sm grid-cols-12 bg-slate-50 border-b border-dashed font-semibold items-center gap-4 justify-between  py-2 px-4 mx-4">
				<div className=" span-1  ">No</div>
				<div className=" col-span-3">Tipo</div>
				<div className="col-span-3 ">Descripcion</div>
				<div className="col-span-2 ">Precio</div>
				<div className="col-span-2 ">Peso</div>
				<div className="col-span-2 ">Subtotal</div>
				<div className="col-span-1"></div>
				<div className="col-span-1"></div>
				<div className="col-span-1"></div>
			</div>
			{packages?.map((pack, index) => (
				<NewPackage index={index} key={pack?.hbl} pack={pack} selectedService={selectedService} />
			))}
		</>
	);
};
