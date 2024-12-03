"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "./logo";
import ThemeToggle from "./themeToggleButton";
import { Link } from "react-scroll";

export default function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const itemVariants = {
		hidden: {
			y: 100,
			opacity: 1,
		},
		visible: (custom: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: (custom + 1) * 0.08,
				duration: 0.6,
				type: "ease-in",
				// ease: [0.6, 0.05, 0.01, 0.9]
			},
		}),
		exit: (custom: number) => ({
			y: 80,
			//opacity: 0,
			transition: {
				delay: (3 - custom) * 0.08,
				duration: 0.5,
				// ease: [0.6, 0.05, 0.01, 0.9]
			},
		}),
	};

	const menuVariants = {
		hidden: {
			y: "-100vh",
			opacity: 0.9,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "ease-out",
				duration: 0.3,
			},
		},
		exit: {
			y: "-100vh",
			opacity: 1,
			transition: {
				type: "ease-out",
				duration: 0.35,
				delay: 0.35,
			},
		},
	};

	return (
		<div className="relative w-full">
			<div className=" rounded-br-[26px] w-36 p-8 dark:bg-black bg-[#f8f8f8]">
				<svg
					className="absolute top-4 left-[144px] dark:text-black text-[#f8f8f8]"
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_310_2)">
						<path
							d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
							fill="currentColor"
						></path>
					</g>
					<defs>
						<clipPath id="clip0_310_2">
							<rect width="30" height="30" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>
				<Logo className="text-black dark:text-[#f8f8f8]" />
				<svg
					className="absolute left-4 top-[114px] dark:text-black text-[#f8f8f8]"
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_310_2)">
						<path
							d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
							fill="currentColor"
						></path>
					</g>
					<defs>
						<clipPath id="clip0_310_2">
							<rect width="30" height="30" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>
			</div>
			<svg
				className="absolute right-4 top-4 rotate-90 dark:text-black text-[#f8f8f8]"
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_310_2)">
					<path
						d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
						fill="currentColor"
					></path>
				</g>
				<defs>
					<clipPath id="clip0_310_2">
						<rect width="30" height="30" fill="white"></rect>
					</clipPath>
				</defs>
			</svg>

			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed top-8 right-8 z-50 px-4 py-2 ring-black dark:ring-white ring-1 rounded-full"
			>
				{isOpen ? "Close" : "Menu"}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={menuVariants}
						className="font-[Mocktaile] fixed inset-0 bg-[#8B5DFF] dark:bg-[#6A42C2] flex items-center justify-center"
					>
						<nav className="text-white text-2xl">
							<div className="absolute top-8 left-4">
								<ThemeToggle />
							</div>
							<ul className="flex flex-col items-center">
								<motion.div
									style={{
										height: "64px",
										overflow: "hidden",
										marginBottom: "1rem",
									}}
								>
									<motion.li
										variants={itemVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										custom={0}
									>
										<Link
											onClick={() => setIsOpen(false)}
											to="project"
											spy={true}
											smooth={true}
											offset={-70}
											duration={500}
											className="cursor-pointer text-6xl block"
										>
											Projects
										</Link>
									</motion.li>
								</motion.div>
								<motion.div
									style={{
										height: "64px",
										overflow: "hidden",
										marginBottom: "1rem",
									}}
								>
									<motion.li
										variants={itemVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										custom={1}
									>
										<Link
											onClick={() => setIsOpen(false)}
											to="experience"
											spy={true}
											smooth={true}
											offset={-120}
											duration={500}
											className="cursor-pointer text-6xl block"
										>
											Experience
										</Link>
									</motion.li>
								</motion.div>
								<motion.div
									style={{
										height: "64px",
										overflow: "hidden",
										marginBottom: "1rem",
									}}
								>
									<motion.li
										variants={itemVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										custom={2}
									>
										<Link
											onClick={() => setIsOpen(false)}
											to="about"
											spy={true}
											smooth={true}
											offset={-120}
											duration={500}
											className="cursor-pointer text-6xl block"
										>
											About
										</Link>
									</motion.li>
								</motion.div>
								<motion.div
									style={{
										height: "64px",
										overflow: "hidden",
										marginBottom: "1rem",
									}}
								>
									<motion.li
										variants={itemVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										custom={3}
									>
										<Link
											onClick={() => setIsOpen(false)}
											to="contact"
											spy={true}
											smooth={true}
											offset={-70}
											duration={500}
											className="cursor-pointer text-6xl block"
										>
											Contact
										</Link>
									</motion.li>
								</motion.div>
							</ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
