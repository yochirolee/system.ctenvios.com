import {
	CheckCheckIcon,
	ContainerIcon,
	FileIcon,
	ShieldAlertIcon,
	ShipIcon,
	TruckIcon,
	WarehouseIcon,
} from "lucide-react";

export const getIcon = (id) => {
	switch (id) {
		case 1:
			return <FileIcon className="size-5  " />;
		case 2:
			return <WarehouseIcon className="size-5  " />;
		case 3:
			return <ContainerIcon className="size-5  " />;
		case 4:
			return <ShipIcon className="size-5  " />;
		case 5:
			return <ShieldAlertIcon className="size-5  " />;
		case 6:
			return <WarehouseIcon className="size-5  " />;
		case 7:
			return <TruckIcon className="size-5  " />;

		case 8:
			return <CheckCheckIcon className="size-5  " />;
		default:
			return <TruckIcon className="size-5  " />;
	}
};
