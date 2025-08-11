"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Image from "next/image";
import {
	gen,
	bFly,
	b1,
	b2,
	b3,
	cFly,
	jFly,
	cl1,
	cl2,
	cl3,
	cl4,
	j1,
	j2,
	j3,
	aFly,
	a1,
	a2,
	wb1,
	wb2,
	wb3,
	wb4,
} from "@/assets";

interface Project {
	id: number;
	title: string;
	location: string;
	description: string;
	type: string;
	status: string;
	media: string[];
	features: string[];
	year: string;
}

interface Service {
	title: string;
	icon: string;
	description: string;
}

const WhoWeAre = () => {
	const [activeProject, setActiveProject] = useState<number>(0);
	const [selectedMedia, setSelectedMedia] = useState<string | null>(
		null
	);
	const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
	const [previewMedia, setPreviewMedia] = useState<string | null>(
		null
	);

	// Project data with your actual media arrays
	const bitekMedia: any[] = [bFly, b1, b2, b3];
	const jubileeMedia: any[] = [jFly, j1, j2, j3];
	const clintonMedia: any[] = [cFly, cl1, cl2, cl3, cl4];
	const awoMedia: any[] = [aFly, a1, a2];
	const wbMedia: any[] = [wb1, wb2, wb3, wb4];
	const mainFlyer: any = gen;

	const projects: Project[] = [
		{
			id: 1,
			title: "Awolowo Technology Mall",
			location: "Ikeja, Lagos State",
			description:
				"A limited collection of distinctive commercial and multi-purpose spaces exceptionally designed for modern businesses.",
			type: "Commercial",
			status: "Ongoing",
			media: awoMedia,
			features: [
				"Commercial Spaces",
				"Multi-purpose",
				"Modern Design",
				"Tech Hub",
			],
			year: "2024",
		},
		{
			id: 3,
			title: "Clinton's Castle",
			location: "Asokoro, Abuja",
			description:
				"Luxury castles by the Villa, just three minutes drive from Aso Rock presidential Villa. Four bedroom castle with a Boy's Quarter.",
			type: "Luxury Residential",
			status: "Completed",
			media: clintonMedia,
			features: [
				"4 Bedrooms",
				"Boy's Quarter",
				"Premium Location",
				"Luxury Finishes",
			],
			year: "2023",
		},
		{
			id: 2,
			title: "Jubilee Flats and Terraces",
			location: "Abraham Adesanya, Ajah, Lagos",
			description:
				"Affordable estate in partnership with Lagos State Government comprising 167 units of 1, 2 and 3 bedroom apartments.",
			type: "Mass Housing",
			status: "Completed",
			media: jubileeMedia,
			features: [
				"167 Units",
				"1-3 Bedrooms",
				"Government Partnership",
				"Affordable Housing",
			],
			year: "2022",
		},
		{
			id: 4,
			title: "Bitek Pacesetter Estate",
			location: "Jericho, Ibadan, Oyo State",
			description:
				"Premium residential development offering modern living spaces with quality infrastructure and amenities.",
			type: "Residential",
			status: "Ongoing",
			media: bitekMedia,
			features: [
				"Modern Homes",
				"Quality Infrastructure",
				"Prime Location",
				"Premium Amenities",
			],
			year: "2024",
		},
		{
			id: 5,
			title: "Wemabod Limited",
			location:
				"5thFloor,WesternHouse 8/10 Broad Street, Marina, Lagos",
			description: `Wemabod Limited, formerly known as Nabani Estates Limited, was established in September 1962 as a wholly owned subsidiary of National Bank of Nigeria Limited. Subsequently, Nabani Estates Limited was sold to the Western Nigeria Marketing Board, leading to the adoption of the name Wemabod. With the incorporation of Odua Investment Company Limited in 1976, Wemabod effectively became a subsidiary of Odu'a and assumed management of Odu'a's Real Estate assets, valued at over 60 billion Naira.`,
			type: "Residential",
			status: "Completed",
			media: wbMedia,
			features: [
				"Modern Homes",
				"Quality Infrastructure",
				"Prime Location",
				"Premium Amenities",
			],
			year: "1962",
		},
	];

	const services: Service[] = [
		{
			title: "Real Estate Management",
			icon: "mdi:home-group",
			description:
				"Comprehensive property management and investment solutions",
		},
		{
			title: "Mass Housing",
			icon: "mdi:city",
			description:
				"Large-scale residential developments for communities",
		},
		{
			title: "Infrastructure & General Construction",
			icon: "mdi:hammer-wrench",
			description:
				"Complete construction and infrastructure development services",
		},
	];

	const handleMediaPreview = (media: string): void => {
		setPreviewMedia(media);
		setIsPreviewOpen(true);
	};

	const closePreview = (): void => {
		setIsPreviewOpen(false);
		setPreviewMedia(null);
	};

	const currentMedia =
		selectedMedia || projects[activeProject].media[0];

	return (
		<section className='py-20 bg-gradient-to-br from-slate-50 to-blue-50'>
			<div className='container mx-auto px-4 sm:px-8'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<div className='mb-6'>
						<span className='text-lemon-green font-semibold text-lg'>
							Who we Are
						</span>
					</div>
					<h2 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>
						Transforming Visions Into
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue to-lemon-green'>
							{" "}
							Reality
						</span>
					</h2>
					<p className='max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed'>
						El-Salem Nigeria is a famous brand of Luxury and is
						distinguished by its unique development style. The company
						was incorporated in Nigeria in 1997 as a Real Estate
						Investment Company. El-Salem Homes is also a registered
						member of REDAN (Real Estate Developers Association of
						Nigeria.), and Abuja Chamber of Commerce and Industries.
						El-Salem is playing a vital role in the reduction of the
						housing deficit in Nigeria, and has already delivered over
						11,000 homes in various Cities like: Abuja, Lagos, Ibadan,
						and Jigawa
					</p>
				</div>

				{/* Services Section */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
					{services.map((service: Service, index: number) => (
						<div
							key={index}
							className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300'
						>
							<div className='flex items-center gap-4 mb-4'>
								<div className='p-3 bg-gradient-to-br from-blue/10 to-lemon-green/10 rounded-xl'>
									<Icon
										icon={service.icon}
										className='text-3xl text-blue'
									/>
								</div>
								<h3 className='text-xl font-bold text-gray-800'>
									{service.title}
								</h3>
							</div>
							<p className='text-gray-600'>{service.description}</p>
						</div>
					))}
				</div>

				{/* Projects Navigation */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{projects.map((project: Project, index: number) => (
						<button
							key={project.id}
							onClick={() => setActiveProject(index)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
								activeProject === index
									? "bg-gradient-to-r from-blue to-lemon-green text-white shadow-lg"
									: "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
							}`}
						>
							{project.title}
						</button>
					))}
				</div>

				{/* Active Project Display */}
				<div className='bg-white rounded-3xl shadow-2xl overflow-hidden'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
						{/* Media Section */}
						<div className='relative'>
							<div className='aspect-video relative overflow-hidden'>
								<div className='relative w-full h-full'>
									<Image
										src={currentMedia}
										alt={projects[activeProject].title}
										fill
										className='object-cover cursor-pointer'
										onClick={() => handleMediaPreview(currentMedia)}
									/>
									<button
										onClick={() => handleMediaPreview(currentMedia)}
										className='absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
									>
										<Icon
											icon='mdi:magnify-plus'
											className='text-xl'
										/>
									</button>
								</div>

								<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />

								{/* Status Badge */}
								<div className='absolute top-4 right-4'>
									<span
										className={`px-3 py-1 rounded-full text-sm font-semibold ${
											projects[activeProject].status === "Completed"
												? "bg-green-500 text-white"
												: "bg-orange-500 text-white"
										}`}
									>
										{projects[activeProject].status}
									</span>
								</div>
							</div>

							{/* Media Thumbnails */}
							<div className='absolute bottom-4 left-4 right-4'>
								<div className='flex gap-2 overflow-x-auto pb-2'>
									{projects[activeProject].media.map(
										(media: string, index: number) => (
											<button
												key={index}
												onClick={() => setSelectedMedia(media)}
												className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer relative ${
													currentMedia === media
														? "border-lemon-green shadow-lg"
														: "border-white/50"
												}`}
											>
												<Image
													src={media}
													alt={`Thumbnail ${index + 1}`}
													fill
													className='object-cover'
												/>
											</button>
										)
									)}
								</div>
							</div>
						</div>

						{/* Content Section */}
						<div className='p-8 lg:p-12'>
							<div className='h-full flex flex-col justify-center'>
								<div className='mb-6'>
									<div className='flex items-center gap-3 mb-3'>
										<span className='text-lemon-green font-semibold'>
											{projects[activeProject].type}
										</span>
										<span className='text-gray-400'>•</span>
										<span className='text-gray-600'>
											{projects[activeProject].year}
										</span>
									</div>
									<h3 className='text-3xl font-bold text-gray-800 mb-2'>
										{projects[activeProject].title}
									</h3>
									<div className='flex items-center gap-2 text-gray-600 mb-4'>
										<Icon
											icon='mdi:map-marker'
											className='text-blue'
										/>
										<span>{projects[activeProject].location}</span>
									</div>
								</div>

								<p className='text-gray-600 text-lg leading-relaxed mb-8'>
									{projects[activeProject].description}
								</p>

								{/* Features */}
								<div className='mb-8'>
									<h4 className='font-semibold text-gray-800 mb-4'>
										Key Features
									</h4>
									<div className='grid grid-cols-2 gap-3'>
										{projects[activeProject].features.map(
											(feature: string, index: number) => (
												<div
													key={index}
													className='flex items-center gap-2'
												>
													<Icon
														icon='mdi:check-circle'
														className='text-lemon-green text-sm'
													/>
													<span className='text-gray-600 text-sm'>
														{feature}
													</span>
												</div>
											)
										)}
									</div>
								</div>

								{/* CTA Button */}
								<button className='bg-gradient-to-r from-blue to-lemon-green text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform'>
									View Project Details
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Company Stats */}
				<div className='mt-20 bg-white rounded-3xl p-8 shadow-xl'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
						{[
							{ number: "11,000+", label: "Homes Delivered" },
							{ number: "27+", label: "Years Experience" },
							{ number: "4", label: "Major Cities" },
							{ number: "100%", label: "Client Satisfaction" },
						].map((stat, index: number) => (
							<div key={index} className='space-y-2'>
								<div className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue to-lemon-green'>
									{stat.number}
								</div>
								<div className='text-gray-600 font-medium'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Media Preview Modal */}
			{isPreviewOpen && previewMedia && (
				<div
					className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
					onClick={closePreview}
				>
					<div
						className='relative max-w-4xl max-h-full'
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={closePreview}
							className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors'
						>
							<Icon icon='mdi:close' className='text-3xl' />
						</button>

						<div className='relative w-full h-full max-w-4xl max-h-[80vh]'>
							<Image
								src={previewMedia}
								alt='Preview'
								fill
								className='object-contain rounded-lg'
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default WhoWeAre;
