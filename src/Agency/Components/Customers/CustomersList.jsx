import { Card, List, ListItem, Icon, Text, Bold, Flex, Title, Button, Grid } from "@tremor/react";

const march = [
	{
		name: "Groceries",
		icon: "",
		color: "sky",
		numTransactions: 24,
		amount: "$ 230",
	},
	{
		name: "IT & Office",
		icon: "",
		color: "orange",
		numTransactions: 4,
		amount: "$ 990",
	},
	{
		name: "Travel",
		icon: "",
		color: "pink",
		numTransactions: 11,
		amount: "$ 2,345",
	},
	{
		name: "Insurance",
		icon: "",
		color: "emerald",
		numTransactions: 2,
		amount: "$ 1,450",
	},
];

const april = [
	{
		name: "Food",
		icon: "",
		color: "teal",
		numTransactions: 32,
		amount: "$ 490",
	},
	{
		name: "Travel",
		icon: "",
		color: "pink",
		numTransactions: 3,
		amount: "$ 678",
	},
	{
		name: "IT & Office",
		icon: "",
		color: "orange",
		numTransactions: 2,
		amount: "$ 120",
	},
	{
		name: "Transport",
		icon: "",
		color: "indigo",
		numTransactions: 12,
		amount: "$ 560",
	},
];

const may = [
	{
		name: "Sports",
		icon: "",
		color: "rose",
		numTransactions: 89,
		amount: "$ 2,300.90",
	},
	{
		name: "Groceries",
		icon: "",
		color: "emerald",
		numTransactions: 9,
		amount: "$ 1,087",
	},
	{
		name: "Travel",
		icon: "",
		color: "pink",
		numTransactions: 19,
		amount: "$ 1,030",
	},
	{
		name: "Restaurants",
		icon: "",
		color: "amber",
		numTransactions: 8,
		amount: "$ 129",
	},
];

const months = [
	{
		name: "March 2022",
		data: march,
	},
	{
		name: "April 2022",
		data: april,
	},
	{
		name: "May 2022",
		data: may,
	},
];

export const CustomersList = () => {
	return (
		<Grid numItemsSm={2} numItemsLg={3} className="gap-6">
			{months.map((item) => (
				<Card key={item.name}>
					<Title>Transaction Volume</Title>
					<Text>{item.name}</Text>
					<List className="mt-4">
						{item.data.map((transaction) => (
							<ListItem key={transaction.name}>
								<Flex justifyContent="start" className="truncate space-x-4">
									<Icon
										variant="light"
										icon={transaction.icon}
										size="md"
										color={transaction.color}
									/>
									<div className="truncate">
										<Text className="truncate">
											<Bold>{transaction.name}</Bold>
										</Text>
										<Text className="truncate">
											{`${transaction.numTransactions} transactions`}
										</Text>
									</div>
								</Flex>
								<Text>{transaction.amount}</Text>
							</ListItem>
						))}
					</List>
					<Button size="sm" variant="light" iconPosition="right" className="mt-4">
						View details
					</Button>
				</Card>
			))}
		</Grid>
	);
};
