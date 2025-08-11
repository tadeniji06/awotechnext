import Contact from "@/components/contact/Contact";
import Header from "@/layouts/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Awo Tech Mall",
	description:
		"Contact us to learn more about Awo Tech Mall, our mission, and our team dedicated to providing exceptional real estate services in Lagos, Nigeria.",

	keywords: [
		"Awo Tech Mall",
		"About Awo Tech Mall",
		"Real Estate Ikeja",
		"Our Team",
		"Mission",
		"Vision",
		"Get in touch",
		"Real Estate Services",
	],
};
const page = () => {
	return (
		<>
		<Contact />
		</>
	);
};
export default page;
