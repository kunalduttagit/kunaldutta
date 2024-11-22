"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Techstack() {
	const technologies = [
		"nextjs",
		"flutter",
		"react",
		"django",
		"tailwind",
		"mongodb",
		"express",
		"tensorflow",
		"node",
	];
	const techNames = [
		"Next Js",
		"Flutter",
		"React Js",
		"Django",
		"Tailwind CSS",
		"MongoDB Atlas",
		"ExpressJs",
		"TensorFlow",
		"Node Js",
	];

	const languages = [
		"c",
		"cpp",
		"js",
		"python",
		"dart",
		"html",
		"css",
		"rust",
	];
	const langNames = [
		"C",
		"C++",
		"JavaScript",
		"Python",
		"Dart",
		"HTML 5",
		"CSS 3",
		"Rust",
	];
	const langDesc = [
		"Mastering the art of Data Structures & Algorithms, because who doesn't love a height balanced AVL tree?",
		"Crushing coding challenges across LeetCode, GeeksForGeeks, Codeforces & HackerRank, one problem at a time",
		"Crafting slick full-stack web experiences that users actually want to use",
		"Building smart solutions with ML, Pandas, TensorFlow & Django - it's my Swiss Army knife",
		"Bringing mobile dreams to life with Flutter at my day job",
		"Structuring rock-solid web foundations (mostly rocking it in TSX these days)",
		"Turning designs into pixel-perfect eye candy that make screens pop with character and beauty",
		"Dipping my toes into Rust - because sometimes you gotta live life on the edge of performance",
	];

	return (
		<div className="items-center w-[25vw] h-full justify-start flex flex-col space-y-8 pt-6">
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className="min-w-64 min-h-64 w-64 h-64 bg-black dark:bg-[#f8f8f8] rounded-full text-black justify-center flex items-center"
			>
				<CarouselContent>
					{technologies.map((logo, index) => (
						<CarouselItem key={index}>
							<div className="justify-center flex flex-col items-center mt-2 ">
								<img
									src={
										"/assets/images/techLogos/" +
										logo +
										".svg"
									}
									alt={techNames[index]}
									className="h-32 w-32 object-contain invert dark:invert-0"
								/>
								<p className="mt-1 text-gray-200 dark:text-gray-700 text-lg font-semibold">
									{techNames[index]}
								</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			{/* <div className="langauge-container h-full w-[90%] rounded-[26px] p-3 overflow-scroll space-y-2">
				{languages.map((logo, i) => (
					<div className="flex justify-center items-center space-x-4" key={i}>
						<div className="flex w-1/6 aspect-square justify-center items-center rounded-full backdrop-blur-2xl bg-[#ffffff75] ring-[0.5px] shadow-lg ring-white">
							<img src={`/assets/images/languageLogos/${logo}.svg`} className="h-8 w-8 aspect-square object-cover"/>
						</div>
						<div className=" w-full">
							<p className="text-xl font-bold"> {langNames[i]} </p>
							<p className="text-sm font-[500] text-gray-100"> {langDesc[i]} </p>
						</div>
					</div>
				))}
			</div> */}
			<div className="langauge-container h-[65%] w-[80%] rounded-[26px] p-2 min-h-[380px]">
				<Carousel
					plugins={[
						Autoplay({
							delay: 4000,
						}),
					]}
					className=""
				>
					<CarouselContent>
						{languages.map((logo, index) => (
							<CarouselItem key={index}>
								<div className="justify-between h-full flex flex-col items-center p-1">
									<div>
										
									<div className="bg-black rounded-[20px] h-44 w-full flex justify-center items-center overflow-hidden">
										<img
											src={`/assets/images/languageLogos/${logo}.png`}
											alt={langNames[index]}
											className="h-[140%] object-contain"
										/>
									</div>
									{/* <p className="text-gray-200 dark:text-gray-700 text-lg font-semibold">
										{langNames[index]}
									</p> */}
									<p className="mt-6 text-white font-[500] text-2xl tracking-[-0.04em] leading-7">{langDesc[index]}</p>

									</div>
									{/* <p>.cpp</p> */}
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					{/* <CarouselPrevious />
				<CarouselNext /> */}
				</Carousel>
			</div>
		</div>
	);
}
