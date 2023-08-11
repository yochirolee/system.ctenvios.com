import { XMarkIcon } from "@heroicons/react/20/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const Banner = ({ title, message }) => {
	return (
		<div className="my-4 bg-yellow-100/30 p-4 border-l-2 border-orange-600/60 ">
			<div className="gx tx">
				<div className="afj ahe alw aqt">
					<div className="inline-flex items-center gap-2">
						<div className="">
							<ExclamationTriangleIcon className="h-6 w-6 text-orange-600/60" />
						</div>
						<div className="text-orange-800/70">
							<p className="awa ban">
								{title}
								<a href="#" className="mx-2">
									{message}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
