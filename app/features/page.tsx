import Features from "@/components/features/Features";
// import Header from "@/layouts/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Features | Awo Tech Mall",
	description:'Explore the numerous features we have to offer at Awo Tech Mall, from global brands to tech startups and lifestyle experiences.',

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
			<Features />
		</>
	);
};
export default page;
