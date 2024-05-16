import { React } from "react";
export const NoEventDetails = ({ title, description }) => {
	return (
		<div className="flex flex-1 items-center justify-center min-h-[500px] rounded-lg border border-dashed shadow-sm">
			<div className="flex flex-col items-center gap-1 text-center">
				<h3 className="text-2xl font-bold tracking-tight">{title ? title : "Seleccione un Hbl"}</h3>
				<p className="text-sm text-muted-foreground">
					{description ? description : "Para conocer sus detalles y estado"}
				</p>
			</div>
		</div>
	);
};
