import EventBody from "@/components/events/EventBody";
import EventsHero from "@/components/events/EventsHero";
// import Header from "@/layouts/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Events | Awo Tech Mall",

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
			<EventsHero />
			<EventBody />
		</>
	);
};
export default page;
