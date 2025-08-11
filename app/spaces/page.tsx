import Ready from "@/components/home/Ready";
import FAQ from "@/components/spaces/FAQ";
import PaymentPlan from "@/components/spaces/PaymentPlan";
import Sizing from "@/components/spaces/Sizing";
import SpaceHero from "@/components/spaces/SpaceHero";
// import Header from "@/layouts/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Spaces | Awo Tech Mall",

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
			<SpaceHero />
			<Sizing />
			<PaymentPlan />
			<FAQ />
			<Ready />
		</>
	);
};
export default page;
