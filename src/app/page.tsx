import AboutMe from "@/components/aboutMe";
import Backgroundvideo from "@/components/backgroundVideo";
import Connect from "@/components/connect";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Socials from "@/components/Socials";
import Techstack from "@/components/technologiesCarousel";
import CustomCursor from "@/components/customCursor";
import MobileNavbar from "@/components/mobilenavbar";

export default function Home() {
	return (
	  <main className="min-h-screen relative overflow-hidden">
		<div className="w-full h-4 dark:bg-black bg-[#f8f8f8] fixed top-0 left-0 right-0 z-50" />

		<CustomCursor />	
		<div className="max-w-[1800px] mx-auto px-4">
		  {/* Top Section */}
		  <div className="flex flex-col lg:flex-row w-full justify-between lg:h-[95vh]">
			<Backgroundvideo />
			<Techstack />
		  </div>
  
		  {/* Navbar */}
		  <header className="max-md:hidden z-50 fixed top-0 left-0 right-0">
			<Navbar />
		  </header>
		  <header className="md:hidden z-50 fixed top-0 left-0 right-0">
			<MobileNavbar />
		  </header>
  
		  <section id="project">
			<Projects />
		  </section>
  
		  <section id="experience" className="my-32">
			<Experience />
		  </section>
  
		  <section id="about">
			<AboutMe />
		  </section>
		  
		  <section id="socials">
			<Socials />
		  </section>
  
		  <section id="contact" className="my-20">
			<Connect />
		  </section>
		</div>
	  </main>
	);
  }
