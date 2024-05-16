import { React, useMemo } from "react";
import { Label } from "@/components/ui/label";
import {
	CheckCheckIcon,
	ForkliftIcon,
	ShieldIcon,
	TruckIcon,
	AnchorIcon,
	
} from "lucide-react";
import { Card } from "@/components/ui/card";

const groupContainerByLocation = (container) => {
	console.log(container)
	const result = Object.groupBy(container, ({ currentLocationId }) => currentLocationId);
	return Object.keys(result).reduce((acc, key) => {
		acc[key] = result[key].length;
		return acc;
	}, {});
};

export const TrackingStats = ({ container }) => {
	
	if (!container) return null;
	const grouped = useMemo(() => groupContainerByLocation(container), [container]);

	return (
		<div className="grid my-6 gap-4 bg-muted/40 dark:bg-gray-900 rounded-lg p-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-5">
			<Card className="rounded-xl border bg-card text-card-foreground shadow">
				<div className="m-6">
					<div className="flex items-center text-slate-800 dark:text-gray-300 my-4 justify-between">
						<Label> Puerto Mariel</Label>
						<AnchorIcon className="text-lg  text-violet-500" />
					</div>
					<div className="">
						<h1 className="text-2xl font-bold">{grouped[4] ? grouped[4] : 0}</h1>
					</div>
				</div>
			</Card>
			<Card className="rounded-xl border bg-card text-card-foreground shadow">
				<div className="m-6">
					<div className="flex items-center text-slate-800 dark:text-gray-300 my-4 justify-between">
						<Label> Aduana Cuba</Label>
						<ShieldIcon className="text-lg  text-yellow-500" />
					</div>
					<h1 className="text-2xl font-bold">{grouped[5] ? grouped[5] : 0}</h1>
				</div>
			</Card>
			<Card className="rounded-xl border bg-card text-card-foreground shadow">
				<div className="m-6">
					<div className="flex items-center text-slate-800 dark:text-gray-300 my-4 justify-between">
						<Label> Almacen Mypimes</Label>
						<ForkliftIcon className="text-xl  text-slate-800" />
					</div>
					<h1 className="text-2xl font-bold">{grouped[6] ? grouped[6] : 0}</h1>
				</div>
				
			</Card>
			<Card className="rounded-xl border bg-card text-card-foreground shadow">
				<div className="m-6">
					<div className="flex items-center text-slate-800 dark:text-gray-300 my-4 justify-between">
						<Label> En Traslado</Label>
						<TruckIcon className="text-xl   text-blue-800" />
					</div>
					<h1 className="text-2xl font-bold">{grouped[7] ? grouped[7] : 0}</h1>
				</div>
			</Card>
			<Card className="rounded-xl border bg-card text-card-foreground shadow">
				<div className="m-6">
					<div className="flex items-center text-slate-800 dark:text-gray-300 my-4 justify-between">
						<Label> Entregado</Label>
						<CheckCheckIcon className="text-xl  text-green-500" />
					</div>
					<h1 className="text-2xl font-bold">{grouped[8] ? grouped[8] : 0}</h1>
				</div>
			</Card>
		</div>
	);
};
