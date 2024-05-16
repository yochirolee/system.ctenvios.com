import { React } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrackingContainerTab } from "./TrackingContainerTab";
import { TrackingSearchTab } from "./TrackingSearchTab";
import { TrackingInquiriesTab } from "./TrackingInquiriesTab";
import UpdateTab from "./Tabs/UpdateTab/UpdateTab";

export const TrackingPage = () => {
	return (
		<Tabs defaultValue="search" className="min-w-full">
			<TabsList>
				<TabsTrigger value="search">Search</TabsTrigger>
				<TabsTrigger value="update">Update</TabsTrigger>
				<TabsTrigger value="containers">Containers</TabsTrigger>
				<TabsTrigger value="inquiries">Inquiries</TabsTrigger>
			</TabsList>
			<TabsContent value="search">
				<TrackingSearchTab />
			</TabsContent>
			<TabsContent value="update">
				<UpdateTab />
			</TabsContent>
			<TabsContent value="containers">
				<TrackingContainerTab />
			</TabsContent>
			<TabsContent value="inquiries">
				<TrackingInquiriesTab />
			</TabsContent>
		</Tabs>
	);
};
