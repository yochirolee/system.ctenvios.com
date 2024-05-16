import { format, parseISO } from "date-fns";
import { CheckCheck, FileSpreadsheet } from "lucide-react";
import { React } from "react";
import { getIcon } from "../../../../Utils/getIcon";

const steps = [
	{
		id: 0,
		name: "En Agencia",
		icon: <FileSpreadsheet className="mr-2 h-4 w-4" />,
	},
	{
		id: 1,
		name: "En Almacen",
	},
	{
		id: 2,
		name: "En Contenedor",
	},
	{
		id: 3,
		name: "En Mariel",
	},
	{
		id: 4,
		name: "En Aduana",
	},
	{
		id: 5,
		name: "Almacen Mypime",
	},
	{
		id: 6,
		name: "En Ruta",
	},
];
export const Stepper = ({ events }) => {
	if (!events) return null;
	console.log(events);
	return (
		<ol class="flex items-center w-full text-xs px-20 text-gray-900 font-medium sm:text-base">
			{events.map(
				(event, index) =>
					event?.createdAt &&
					(index < events.length - 1 ? (
						<li
							key={index}
							class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-[1px]  after:bg-blue-600/50
						
						 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
						>
							<div class="block relative h-20 whitespace-nowrap z-10">
								<p className="absolute -top-6  -left-3  shrik-0 text-[10px] mx-2">
									{event?.location.name}
								</p>
								<p className="shrik-0 text-[10px] mx-2">
									{event?.createdAt ? format(parseISO(event?.createdAt), "dd/MM/yyyy") : ""}
								</p>
								<span
									class="w-4 h-4 
								  border-gray-200  rounded-full flex justify-center items-center mx-auto  text-sm lg:w-10 lg:h-10"
								>
									{getIcon(event.locationId)}
								</span>
								<div className="w-full shrink-0 ">
									<p className="text-xs shrink-0 w-full  ">{event?.container}</p>
									<p className="text-xs">{event?.pallet}</p>
									<p className="text-xs">{event?.dispatch}</p>
								</div>
							</div>
						</li>
					) : (
						<li class="flex  relative text-gray-900 text-center    ">
							<div class="block relative h-20 whitespace-nowrap text-center  z-10">
								<p className="absolute -top-6  -left-3  shrik-0 text-[12px] mx-2">
									{event?.location.name}
								</p>
								<span
									class="w-6 h-6 bg-blue-600
								 border-2 border-gray-200 text-white rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10"
								>
									<CheckCheck className="size-4  " />
								</span>
								<div className="absolute  ">
									<p className="shrik-0 text-[12px] mx-2">{event.location.name}</p>
									<p className="shrik-0 text-[12px] mx-2">
										{event?.createdAt ? format(parseISO(event?.createdAt), "dd/MM/yyyy") : ""}
									</p>
									<p className="text-xs shrink-0  text-wrap  ">{event?.container}</p>
									<p className="text-xs">{event?.pallet}</p>
									<p className="text-xs">{event?.dispatch}</p>
								</div>
							</div>
						</li>
					)),
			)}

			{/* 	<li class="flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
				<div class="block whitespace-nowrap z-10">
					<span class="w-6 h-6 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">
						1
					</span>
					Step 1
				</div>
			</li>
			<li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
				<div class="block whitespace-nowrap z-10">
					<span class="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
						2
					</span>{" "}
					Step 2
				</div>
			</li>
			<li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4">
				<div class="block whitespace-nowrap z-10">
					<span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
						3
					</span>{" "}
					Step 3
				</div>
			</li>
			<li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
				<div class="block whitespace-nowrap z-10">
					<span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
						4
					</span>{" "}
					Step 4
				</div>
			</li>
			<li class="flex w-full relative text-gray-900  ">
				<div class="block whitespace-nowrap z-10">
					<span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
						5
					</span>{" "}
					Step 5
				</div>
			</li> */}
		</ol>
	);
};
