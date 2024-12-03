"use client";
import { Link } from "react-scroll";
import Logo from "./logo";
import ThemeToggle from "./themeToggleButton";
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: { x: "-25px", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

export default function Navbar() {
	return (
		<nav className="flex sticky top-0 left-0 items-center justify-items-center w-full max-w-[1800px] mx-auto">
			<div className="logo-container relative rounded-br-[26px] p-4 md:p-8 dark:bg-black bg-[#f8f8f8]">
				<Logo className="text-black dark:text-[#f8f8f8]" />
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
			<motion.div className="flex items-center justify-center py-2 text-black font-medium ring-white rounded-full ring-[0.5px] bg-[#ffffff75] backdrop-blur-md space-x-5 ml-3 pl-4 pr-2 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.35)]" variants={navbarVariants} animate="visible" initial="hidden">
				<Link
					to="project"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="big-dot-cursor"
				>
					Projects
				</Link>
				<Link
					to="experience"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="big-dot-cursor"
				>
					Experience
				</Link>
				<Link
					to="about"
					spy={true}
					smooth={true}
					offset={-120}
					duration={500}
					className="big-dot-cursor"
				>
					About
				</Link>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="big-dot-cursor"
				>
					Contact
				</Link>

				<ThemeToggle />
			</motion.div>
		</nav>
	);
}
