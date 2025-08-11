"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/layouts/Header";
import Image, { StaticImageData } from "next/image";
import { hero, story, logo } from "@/assets";

interface Slide {
	img: StaticImageData | string;
	title: string;
	body: string;
	accent: string;
	bgGradient: string;
}

const Hero: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [showVideo, setShowVideo] = useState<boolean>(false);
	const [isVideoPlaying, setIsVideoPlaying] =
		useState<boolean>(false);

	const slides: Slide[] = [
		{
			img: hero,
			title: "Where Legacy Meets Innovation",
			body: `Welcome to Awolowo Tech Hub, a bold transformation of the iconic Awolowo House into a future-ready ecosystem of luxury, business, and technology in the heart of Ikeja.`,
			accent: "Now Selling",
			bgGradient: "from-lemon-green to-blue",
		},
		{
			img: story,
			title: "Designing for Future-Thinking Minds",
			body: `This is not just a property; it's a purpose-built space where startups, tech firms, and creatives thrive. Join the evolution.`,
			accent: "Limited Spaces",
			bgGradient: "from-lemon-green to-blue",
		},
	];

	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 8000);
		return () => clearInterval(interval);
	}, [isAutoPlaying, slides.length]);

	const changeSlide = (newIndex: number): void => {
		setCurrentSlide(newIndex);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 8000);
	};

	const handleVideoToggle = (): void => {
		setShowVideo(!showVideo);
		if (!showVideo) {
			setIsAutoPlaying(false);
		} else {
			setIsAutoPlaying(true);
			setIsVideoPlaying(false);
		}
	};

	const handleVideoPlay = (): void => {
		setIsVideoPlaying(true);
	};

	const handleVideoPause = (): void => {
		setIsVideoPlaying(false);
	};

	const handlePlayVideo = (): void => {
		if (videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.error("Error playing video:", error);
			});
		}
	};

	const handleModalClick = (e: MouseEvent<HTMLDivElement>): void => {
		e.stopPropagation();
	};

	// Helper function to get image src
	const getImageSrc = (img: StaticImageData | string): string => {
		if (typeof img === "string") {
			return img;
		}
		return img.src;
	};

	return (
		<>
			<section className='relative h-screen w-full overflow-hidden'>
				<div className='absolute top-0 left-0 w-full z-50'>
					<Header />
				</div>

				{/* Logo positioned responsively */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='absolute top-20 left-4 sm:left-6 md:left-8 lg:left-32 xl:left-48 z-40'
				>
					<Image
						src={logo}
						alt='Awolowo Tech Hub'
						className='h-20 sm:h-24 md:h-28 lg:h-[180px] w-auto drop-shadow-2xl'
						width={200}
						height={180}
						priority
					/>
				</motion.div>

				<AnimatePresence mode='wait'>
					<motion.div
						key={currentSlide}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6 }}
						className='absolute inset-0 z-0'
					>
						<Image
							src={slides[currentSlide].img}
							alt={slides[currentSlide].title}
							className='w-full h-full object-cover'
							fill
							priority={currentSlide === 0}
						/>
						<div className='absolute inset-0 bg-black/60'></div>
						<div
							className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} opacity-30`}
						></div>
					</motion.div>
				</AnimatePresence>

				<div className='relative z-10 h-full flex items-center'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full'>
						<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full'>
							<motion.div
								key={`content-${currentSlide}`}
								initial={{
									x: -30,
									opacity: 0,
								}}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
								className='text-white space-y-4 sm:space-y-6 md:space-y-8 pt-32 sm:pt-36 md:pt-40 lg:pt-16'
							>
								<motion.div
									initial={{
										scale: 0.9,
										opacity: 0,
									}}
									animate={{
										scale: 1,
										opacity: 1,
									}}
									transition={{
										duration: 0.3,
										delay: 0.1,
									}}
									className='inline-block'
								>
									<span className='inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-black/40 backdrop-blur-sm border border-white/30 text-white'>
										{slides[currentSlide].accent}
									</span>
								</motion.div>
								<motion.h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
									{slides[currentSlide].title}
								</motion.h1>
								<motion.p className='text-sm sm:text-base lg:text-lg text-gray-100 max-w-2xl leading-relaxed'>
									{slides[currentSlide].body}
								</motion.p>
								<motion.div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4'>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<button
											type='button'
											className='px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold shadow-lg bg-blue hover:bg-blue/90 rounded-lg text-white hover:shadow-xl w-full sm:w-auto transition-all duration-300'
										>
											Book A Space
										</button>
									</motion.div>
									<motion.button
										type='button'
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={handleVideoToggle}
										className='inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300 w-full sm:w-auto'
									>
										<svg
											className='w-4 h-4 sm:w-5 sm:h-5 mr-2'
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path d='M8 5v10l8-5-8-5z' />
										</svg>
										Watch Tour
									</motion.button>
								</motion.div>
							</motion.div>

							<motion.div
								initial={{ x: 30, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
								className='hidden lg:flex justify-center items-center'
							>
								<div className='relative w-72 h-72 lg:w-96 lg:h-96'>
									<motion.div
										animate={{
											y: [-8, 8, -8],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
										}}
										className='absolute -top-10 -left-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl'
									>
										<div className='text-2xl font-bold text-white'>
											100%
										</div>
										<div className='text-sm text-gray-200'>
											Flexibility
										</div>
									</motion.div>

									<motion.div
										animate={{ y: [8, -8, 8] }}
										transition={{
											duration: 3,
											repeat: Infinity,
										}}
										className='absolute -bottom-10 -right-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl'
									>
										<div className='text-2xl font-bold text-white'>
											100%
										</div>
										<div className='text-sm text-gray-200'>
											Sustainability
										</div>
									</motion.div>

									<div className='absolute inset-0 flex items-center justify-center'>
										<div className='w-32 h-32 lg:w-40 lg:h-40 border-2 border-white/20 rounded-full animate-pulse'></div>
										<div className='absolute w-16 h-16 lg:w-20 lg:h-20 border border-white/30 rounded-full animate-ping'></div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Slide Indicators */}
				<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2'>
					{slides.map((_, index) => (
						<button
							key={index}
							type='button'
							onClick={() => changeSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								currentSlide === index
									? "bg-primary-lemon-green scale-125"
									: "bg-white/50 hover:bg-white/75"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>

				{isAutoPlaying && (
					<div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20'>
						<motion.div
							key={currentSlide}
							initial={{ width: "0%" }}
							animate={{ width: "100%" }}
							transition={{
								duration: 6,
								ease: "linear",
							}}
							className='h-full bg-gradient-to-r from-lemon-green to-blue'
						/>
					</div>
				)}
			</section>

			{/* Video Modal */}
			<AnimatePresence>
				{showVideo && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4'
						onClick={handleVideoToggle}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className='relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl'
							onClick={handleModalClick}
						>
							{/* Video Header */}
							<div className='absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6'>
								<div className='flex items-center justify-between'>
									<div className='flex items-center space-x-3'>
										<Image
											src={logo}
											alt='Logo'
											className='h-8 w-auto'
											width={32}
											height={32}
										/>
										<h3 className='text-white font-semibold text-lg'>
											Awolowo Tech Hub Tour
										</h3>
									</div>
									<button
										type='button'
										onClick={handleVideoToggle}
										className='text-white hover:text-gray-300 transition-colors p-2'
										aria-label='Close video'
									>
										<svg
											className='w-6 h-6'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</button>
								</div>
							</div>

							{/* Video Player */}
							<video
								ref={videoRef}
								src='/ATM.mp4'
								controls
								autoPlay
								onPlay={handleVideoPlay}
								onPause={handleVideoPause}
								className='w-full h-auto max-h-[80vh] object-contain'
								poster={getImageSrc(hero)}
							>
								Your browser does not support the video tag.
							</video>

							{/* Video Controls Overlay */}
							{!isVideoPlaying && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className='absolute inset-0 flex items-center justify-center bg-black/20'
								>
									<motion.button
										type='button'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										onClick={handlePlayVideo}
										className='bg-white/20 backdrop-blur-sm rounded-full p-6 text-white hover:bg-white/30 transition-all duration-300'
										aria-label='Play video'
									>
										<svg
											className='w-12 h-12'
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path d='M8 5v10l8-5-8-5z' />
										</svg>
									</motion.button>
								</motion.div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Hero;
