"use client";
import { navigationLinks } from "@/utils/data";
import { logo } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { formLink } from "@/utils/data";
// import { Icon } from "@iconify/react/dist/iconify.js";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='relative z-50'>
			<div className='container mx-auto md:px-8'>
				<div className='flex items-center justify-between p-4 md:p-8 h-16 md:h-14 md:mt-8 md:rounded-3xl relative bg-gradient-to-r from-blue to-lemon-green'>
					<div className='flex-shrink-0 z-50'>
						<Link href={"/"}>
							<Image
								src={logo}
								alt='Vendura logo'
								className='h-[40px] md:h-[60px] w-auto'
							/>
						</Link>
					</div>

					{/* desktop navLinks */}
					<div className='hidden md:flex md:gap-8 lg:gap-16'>
						{navigationLinks.map((item) => (
							<Link
								key={item.name}
								href={item.link}
								className='text-white font-bold hover:text-gray-300 transition-colors'
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* CTA button */}
					<div className='hidden md:block'>
						<Link href={formLink}>
							<button
								className='bg-white px-4 py-2 rounded-xl border shadow-xl 
              hover:bg-gray-200 transition-colors font-medium text-lemon-green'
							>
								Apply For A Space
							</button>
						</Link>
					</div>

					{/* mobile menu button - improved visibility */}
					<div className='md:hidden z-50'>
						<button
							type='button'
							className='text-white p-2 rounded-md focus:outline-none hover:bg-white/10 transition-colors'
							onClick={toggleMenu}
							aria-expanded={isOpen}
							aria-controls='mobile-menu'
						>
							<span className='sr-only'>Open main menu</span>
							{!isOpen ? (
								<svg
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							) : (
								<svg
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* mobile dropdown - improved positioning and visibility */}
			{isOpen && (
				<div
					className='md:hidden absolute top-full left-0 w-full z-40 
         bg-lemon-green border-t border-white/20 shadow-lg'
					id='mobile-menu'
				>
					<div className='px-4 pt-4 pb-6 space-y-1'>
						{navigationLinks.map((item) => (
							<Link
								key={item.name}
								href={item.link}
								onClick={toggleMenu}
								className='text-white block px-3 py-3 rounded-md text-base font-medium hover:bg-white/10 transition-colors'
							>
								{item.name}
							</Link>
						))}
						<div className='px-3 pt-4'>
							<Link href={formLink} onClick={toggleMenu}>
								<button
									className='bg-white w-full px-4 py-3 rounded-xl border shadow-xl 
                  hover:bg-gray-100 transition-colors  font-medium text-primary-lemon-green'
								>
									Apply For A Space
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Header;
