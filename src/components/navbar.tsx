"use client";
import { Link } from "react-scroll";
import Logo from "./logo";
import ThemeToggle from "./themeToggleButton";

export default function Navbar() {
	return (
		<nav className="flex sticky top-0 left-0 items-center w-screen justify-items-center">
			<div className="rounded-br-[26px] p-8 dark:bg-black bg-[#f8f8f8] logo-container">
				<svg
					className="svg-corner corner-logo-box-one dark:text-black text-[#f8f8f8]"
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
					className="svg-corner corner-logo-box-two dark:text-black text-[#f8f8f8]"
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
			<div className="flex items-center justify-center py-[4px] text-black px-[6px] pl-6 font-medium ring-white rounded-full ring-[0.5px] bg-[#ffffff75] backdrop-blur-lg space-x-7 ml-[11px] mt-[1px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.35)]">
				<Link
					to="project"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="cursor-pointer"
				>
					Projects
				</Link>
				<Link
					to="experience"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="cursor-pointer"
				>
					Experience
				</Link>
				<Link
					to="about"
					spy={true}
					smooth={true}
					offset={-120}
					duration={500}
					className="cursor-pointer"
				>
					About
				</Link>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="cursor-pointer"
				>
					Contact
				</Link>
				<ThemeToggle />
			</div>
		</nav>
	);
}
