"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import React from "react";
import Link from "next/link";
import { navigationLinks, socials } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logo } from "@/assets";
import Image from "next/image";

interface CustomButtonProps {
	type: "submit";
	title: string;
	className: string;
	disabled: boolean;
	icon: string;
	children?: React.ReactNode;
}

// Custom Button component to handle the button with icon
const CustomButton: React.FC<CustomButtonProps> = ({
	type,
	title,
	className,
	disabled,
	icon,
	children,
}) => (
	<button
		type={type}
		title={title}
		className={`${className} text-dark-green font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2`}
		disabled={disabled}
	>
		<Icon icon={icon} className={disabled ? "animate-spin" : ""} />
		{children || title}
	</button>
);

const Footer: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [isSubscribing, setIsSubscribing] = useState<boolean>(false);
	const [subscriptionStatus, setSubscriptionStatus] = useState<
		"success" | "error" | null
	>(null);
	const [emailError, setEmailError] = useState<string>("");

	const date = new Date();
	const year = date.getFullYear();

	// Email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const validateEmail = (email: string): string => {
		if (!email) {
			return "Email is required";
		}
		if (!emailRegex.test(email)) {
			return "Please enter a valid email address";
		}
		return "";
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setEmail(value);

		// Clear error when user starts typing
		if (emailError) {
			setEmailError("");
		}

		// Clear success message when user changes email
		if (subscriptionStatus === "success") {
			setSubscriptionStatus(null);
		}
	};

	const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const error = validateEmail(email);
		if (error) {
			setEmailError(error);
			return;
		}

		setIsSubscribing(true);
		setEmailError("");

		try {
			// Simulate API call - replace with actual subscription logic
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Simulate success/error randomly for demo
			const success = Math.random() > 0.2;

			if (success) {
				setSubscriptionStatus("success");
				setEmail("");
			} else {
				setSubscriptionStatus("error");
			}
		} catch (error) {
			console.error("Subscription error:", error);
			setSubscriptionStatus("error");
		} finally {
			setIsSubscribing(false);
		}
	};

	const getSubscriptionMessage = (): JSX.Element | null => {
		switch (subscriptionStatus) {
			case "success":
				return (
					<div className='flex items-center gap-2 text-green-600 text-sm mt-2'>
						<Icon icon='mdi:check-circle' />
						<span>Successfully subscribed to our newsletter!</span>
					</div>
				);
			case "error":
				return (
					<div className='flex items-center gap-2 text-red-600 text-sm mt-2'>
						<Icon icon='mdi:alert-circle' />
						<span>Something went wrong. Please try again.</span>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<footer className='bg-gradient-to-t from-dark-green to-lemon-green text-white'>
			<div className='container mx-auto px-4 py-8 lg:py-12'>
				{/* Main Content */}
				<div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>
					{/* Brand Section */}
					<div className='flex flex-col items-start gap-4 max-w-[360px]'>
						<div className='flex items-center gap-3'>
							<div className='w-[120px] h-[50px] rounded-lg flex items-center justify-center'>
								<Image
									src={logo}
									alt='Awolowo Technology Hub Logo'
									className='object-cover rounded-lg'
								/>
							</div>
						</div>
						<p className='text-sm leading-relaxed text-gray-100'>
							The Awolowo Technology Hub is a transformative
							redevelopment initiative that seeks to repurpose the
							iconic Awolowo House, located in the heart of Ikeja's
							bustling commercial district, into a cutting-edge
							innovation and co-creation space.
						</p>

						{/* Contact Info */}
						<div className='flex flex-col gap-2 mt-4'>
							<div className='flex items-center gap-2 text-sm'>
								<Icon
									icon='mdi:map-marker'
									className='text-lemon-green'
								/>
								<span>Awolowo House, Ikeja, Lagos</span>
							</div>
							<div className='flex items-center gap-2 text-sm'>
								<Icon icon='mdi:phone' className='text-lemon-green' />
								<span>+(234)8063335994 • +(234)9096936084</span>
							</div>
							<div className='flex items-center gap-2 text-sm'>
								<Icon icon='mdi:email' className='text-lemon-green' />
								<span>info@atmall.ng</span>
							</div>
						</div>
					</div>

					{/* Newsletter Section */}
					<div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-6 lg:px-8 lg:py-8 max-w-md mx-auto lg:mx-0 w-full lg:w-auto'>
						<div className='flex items-center gap-3 mb-4'>
							<Icon
								icon='mdi:email-newsletter'
								className='text-lemon-green text-2xl'
							/>
							<h3 className='text-lg font-semibold'>Stay Updated</h3>
						</div>

						<p className='text-sm text-gray-100 mb-4'>
							Get the latest updates on innovation, events, and
							opportunities at AT MALL.
						</p>

						<form onSubmit={handleSubscribe} className='space-y-3'>
							<div>
								<input
									type='email'
									placeholder='Enter your email address'
									value={email}
									onChange={handleEmailChange}
									className={`w-full outline-none border rounded-lg px-4 py-3 text-black placeholder-gray-500 transition-colors ${
										emailError
											? "border-red-500 bg-red-50"
											: "border-gray-300 focus:border-lemon-green focus:ring-2 focus:ring-lemon-green/20"
									}`}
									disabled={isSubscribing}
								/>
								{emailError && (
									<p className='text-red-400 text-xs mt-1 flex items-center gap-1'>
										<Icon icon='mdi:alert-circle' />
										{emailError}
									</p>
								)}
							</div>

							<CustomButton
								type='submit'
								title={
									isSubscribing ? "Subscribing..." : "Subscribe Now"
								}
								className={`w-full bg-lemon-green hover:bg-lemon-green/90 transition-all duration-200 ${
									isSubscribing ? "opacity-75 cursor-not-allowed" : ""
								}`}
								disabled={isSubscribing}
								icon={isSubscribing ? "mdi:loading" : "mdi:send"}
							/>
						</form>

						{getSubscriptionMessage()}
					</div>
				</div>

				{/* Navigation & Social Links */}
				<div className='mt-8 lg:mt-12 pt-8 border-t border-white/20'>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
						{/* Navigation Links */}
						<nav className='flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8'>
							{navigationLinks.map((link, index) => (
								<Link
									key={index}
									href={link.link}
									className='text-white hover:text-lemon-green transition-colors duration-200 text-sm font-medium relative group'
								>
									{link.name}
									<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lemon-green transition-all duration-200 group-hover:w-full'></span>
								</Link>
							))}
						</nav>

						{/* Social Media Links */}
						<div className='flex items-center gap-4'>
							<span className='text-sm text-gray-200 hidden lg:block'>
								Follow us:
							</span>
							<div className='flex items-center gap-3'>
								{socials.map((social) => (
									<Link
										key={social.name}
										href={social.link}
										className='w-10 h-10 bg-white/10 hover:bg-lemon-green rounded-full flex items-center justify-center text-white hover:text-dark-green transition-all duration-200 hover:scale-110'
										target='_blank'
										rel='noopener noreferrer'
										aria-label={`Follow us on ${social.name}`}
									>
										<Icon className='text-lg' icon={social.icon} />
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='mt-8 pt-6 border-t border-white/20'>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-200'>
						<p className='flex items-center gap-2'>
							<Icon icon='mdi:copyright' />
							{year}{" "}
							<p>
								Developed by{" "}
								<Link
									target='_blank'
									href='https://tech360online.com'
								>
							Btech360
								</Link>
							</p>
						</p>

						<div className='flex items-center gap-6'>
							<Link
								href='/terms'
								className='hover:text-lemon-green transition-colors duration-200'
							>
								Terms of Service
							</Link>
							<span className='text-white/40'>•</span>
							<Link
								href='/privacy'
								className='hover:text-lemon-green transition-colors duration-200'
							>
								Privacy Policy
							</Link>
							<span className='text-white/40'>•</span>
							<Link
								href='/cookies'
								className='hover:text-lemon-green transition-colors duration-200'
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
