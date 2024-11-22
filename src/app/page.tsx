import AboutMe from "@/components/aboutMe";
import Backgroundvideo from "@/components/backgroundVideo";
import Connect from "@/components/connect";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Socials from "@/components/Socials";
import Techstack from "@/components/technologiesCarousel";

export default function Home() {
	return (
		<main className="min-h-screen relative px-4 overflow-hidden">
			{/* Top Marging */}
			<div className="w-full h-4 dark:bg-black bg-[#f8f8f8] fixed top-0 left-0 right-0 z-50"></div>
			{/* Top Section */}
			<div className="flex sm:max-lg:flex-cols w-[100vw] justify-between h-[95vh]">
				<Backgroundvideo />
				<Techstack />
			</div>
			{/* Navbar */}
			<header className="z-50 fixed top-0 left-0 right-0">
				<Navbar />
			</header>
			<section id="project">
				<Projects />
			</section>

			<section id="experience" className="my-32">
				<Experience />
			</section>


			<section id="about" className="mx-2">
				<AboutMe />
			</section>
			
			<section id="socials" className="mx-2">
				<Socials />
			</section>

			<section id="contact" className="my-20">
				<Connect />
			</section>
		</main>
	);
}
