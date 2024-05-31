import { React } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx/xlsx.mjs";

import { Button } from "@/components/ui/button";
import { File } from "lucide-react";

export const ExportToExcelButton = ({ data, fileName }) => {
	const exportToExcel = () => {
		const worksheet = XLSX.utils.json_to_sheet(data);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
		const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
		saveAs(blob, `${fileName}.xlsx`);
	};

    console.log(data)
	return (
		<Button onClick={exportToExcel} size="sm" variant="outline" className="h-8 gap-1">
			<File className="h-3.5 w-3.5" />
			<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
		</Button>
	);
};
