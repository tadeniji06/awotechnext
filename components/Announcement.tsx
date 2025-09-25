"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logo, anny } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Announcement = () => {
	const [isVisible, setIsVisible] = useState(true);
	const router = useRouter();

	const handleViewProperty = () => {
		setIsVisible(false);
		router.push("/contact");
	};

	useEffect(() => {
		const checkAndShowAnnouncement = () => {
			const lastShown = localStorage.getItem("announcementLastShown");
			const isFirstTime = localStorage.getItem("hasVisited") === null;
			const now = Date.now();

			// Show immediately for first-time users
			if (isFirstTime) {
				setIsVisible(true);
				localStorage.setItem("hasVisited", "true");
				localStorage.setItem("announcementLastShown", now.toString());
				return;
			}

			// For returning users, check if 5 minutes have passed
			if (lastShown) {
				const timeDiff = now - parseInt(lastShown);
				const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
				if (timeDiff >= fiveMinutes) {
					setIsVisible(true);
					localStorage.setItem(
						"announcementLastShown",
						now.toString()
					);
				}
			} else {
				// If no record exists, show the announcement
				setIsVisible(true);
				localStorage.setItem("announcementLastShown", now.toString());
			}
		};

		// Check immediately on mount
		checkAndShowAnnouncement();

		// Set up interval to check every minute
		const interval = setInterval(checkAndShowAnnouncement, 60000);

		return () => clearInterval(interval);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
	};

	// Properly typed variants
	const overlayVariants: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				ease: "easeIn",
			},
		},
	};

	const modalVariants: Variants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
			y: 50,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300,
				delay: 0.1,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			y: 50,
			transition: {
				duration: 0.2,
			},
		},
	};

	const buttonVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
		hover: {
			scale: 1.02,
		},
		tap: {
			scale: 0.98,
		},
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					variants={overlayVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
					className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'
					onClick={handleClose}
				>
					<motion.div
						variants={modalVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden relative'
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className='bg-gradient-to-r from-lemon-green to-dark-green p-6 text-white relative'>
							<button
								onClick={handleClose}
								className='absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/10'
								aria-label='Close announcement'
							>
								<Icon icon='mdi:close' className='text-xl' />
							</button>

							<div className='flex items-center space-x-3 mb-2'>
								<div className='w-10 h-10 relative bg-white/10 rounded-lg p-1'>
									<Image
										src={logo}
										alt='AwoTech Promo'
										fill
										className='object-cover w-full'
									/>
								</div>
								<h2 className='text-xl font-bold'>
									Exclusive Launch!
								</h2>
							</div>
						</div>

						{/* Amethyst Flyer Image */}
						<div className='relative h-80 bg-gradient-to-br from-purple-50 to-indigo-50'>
							<Image
								src={anny}
								alt='Amethyst Property'
								fill
								className='object-contain p-2'
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Announcement;
