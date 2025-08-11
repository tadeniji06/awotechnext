import Header from "@/layouts/Header";
import Image from "next/image";
import { evh } from "@/assets";

const EventsHero = () => {
	return (
		<div className='relative'>
			<div className='relative w-full h-[650px] md:h-[800px] overflow-hidden'>
				{/* Background Image using Next.js Image */}
				<Image
					src={evh}
					alt='Events Hero Background'
					fill
					className='object-cover transition-opacity duration-1000 ease-in-out'
					priority
					quality={90}
				/>

				{/* Optional overlay for better text readability */}
				<div className='absolute inset-0 bg-black/20 z-10' />

				{/* Header */}
				<div className='absolute top-0 left-0 w-full z-50'>
					<Header />
				</div>
			</div>
		</div>
	);
};

export default EventsHero;
