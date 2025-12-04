import Announcement from "@/components/Announcement";
import Discover from "@/components/home/Discover";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Ready from "@/components/home/Ready";
import WhyUs from "@/components/home/WhyUs";

const page = () => {
	return (
		<div className='min-h-screen'>
			{/* <Announcement /> */}
			<Hero />
			<WhyUs />
			<Ready />
			<Features />
			<Discover />
		</div>
	);
};
export default page;
