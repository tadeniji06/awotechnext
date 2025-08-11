import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
	title: "Awo Tech Mall | Real Estate and Properties",
	description: "Awo Tech Mall, Ikeja, Lagos.",
	icons: {
		icon: "./logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
