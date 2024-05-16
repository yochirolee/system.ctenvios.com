import { React } from "react";
import QRCode from "react-qr-code";
export const InvoiceQR = ({ invoice }) => {
	return (
		<>
			<QRCode
				size={256}
				style={{ height: "auto", maxWidth: "100%", width: "100%" }}
				value={JSON.stringify(invoice?.id)}
				viewBox={`0 0 50 50`}
			/>
		</>
	);
};

export const LabelQr = ({ invoice }) => {
	return (
		<>
			<QRCode
				size={256}
				style={{ height: "auto", maxWidth: "100%", width: "100%" }}
				value={JSON.stringify(invoice?.id)}
				viewBox={`0 0 50 50`}
			/>
		</>
	);
};
