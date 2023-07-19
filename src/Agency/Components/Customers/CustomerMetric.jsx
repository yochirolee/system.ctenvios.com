import { Card, Text, Metric } from "@tremor/react";

export const CustomerMetric = () => (
	<div className="grid grid-flow-col mb-10">
		<Card className="max-w-xs mx-auto">
			<Text>Sales</Text>
			<Metric>$ 34,743</Metric>
		</Card>
		<Card className="max-w-xs mx-auto">
			<Text>Sales</Text>
			<Metric>$ 34,743</Metric>
		</Card>
		<Card className="max-w-xs mx-auto">
			<Text>Sales</Text>
			<Metric>$ 34,743</Metric>
		</Card>
		<Card className="max-w-xs mx-auto">
			<Text>Sales</Text>
			<Metric>$ 34,743</Metric>
		</Card>
	</div>
);
