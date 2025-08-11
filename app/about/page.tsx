import AboutBody from "@/components/about/AboutBody";
import AboutHero from "@/components/about/AboutHero";
import Apart from "@/components/about/Apart";
import Story from "@/components/about/Story";
import WhoWeAre from "@/components/about/WhoWeAre";
import Ready from "@/components/home/Ready";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us | Awo Tech Mall",
	description:
		"Learn more about Awo Tech Mall, our mission, and our team dedicated to providing exceptional real estate services in Lagos, Nigeria.",

	keywords: [
		"Awo Tech Mall",
		"About Awo Tech Mall",
		"Real Estate Ikeja",
		"Our Team",
		"Mission",
		"Vision",
		"Real Estate Services",
	],
};
const page = () => {
	return (
		<>
			<AboutHero />
			<WhoWeAre />
			<AboutBody />
			<Story />
			<Apart />
			<Ready />
		</>
	);
};
export default page;
