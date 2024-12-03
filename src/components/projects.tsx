"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
} from "@/components/ui/dialog";
import SplitText from "./animation/splitText";
import "keen-slider/keen-slider.min.css";
import { projectDetails } from "@/data/projectDetails";
import React, { Key } from "react";
import Link from "next/link";

interface ProjectLink {
	links: string[];
	title: string;
	subtitle: string;
	description: string;
	images: string[];
}

export default function Projects() {
	const scrollImages = (
		direction: "left" | "right",
		container: HTMLElement
	): void => {
		const firstImage: HTMLImageElement | null =
			container.querySelector("img");
		if (!firstImage) return;

		const scrollAmount: number = firstImage.clientWidth + 32; // Adding 32px for gap
		container.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<div className="w-full mt-24 flex flex-col justify-center items-center text-black dark:text-white">
			<h1 className="text-3xl font-semibold mb-4">{"< Projects />"}</h1>
			<div className="lg:w-[75%] xl:w-[90%] arrow-cursor">
				{projectDetails.map((project: ProjectLink, index: number) => (
					<Dialog key={index}>
						<DialogTrigger asChild>
							<div className="relative cursor-pointer">
								<div className="pt-6 pb-4">
									<div className="md:hover:translate-x-6 transition-all ease-in-out duration-200">
										<div className="lg:text-lg">
											{project.subtitle}
										</div>
										<h2>
											<SplitText
												text={project.title}
												className="text-5xl lg:text-8xl"
												delay={50}
											/>
										</h2>
									</div>
								</div>
								{index !== 4 && (
									<div className="absolute bottom-0 w-full border-b-2 border-current"></div>
								)}
							</div>
						</DialogTrigger>
						<DialogContent
							className="min-h-[100vh] min-w-[100vw] backdrop-blur-[9px] border-none lg:px-24 px-4 py-12 bg-white/20 dark:bg-black/20"
							// onEscapeKeyDown={(e) => {
							// 	e.preventDefault();
							// 	setOpen(false);
							// }}
							// onKeyDown={(e) => {
							// 	if (e.key == "Enter") {
							// 	}
							// }}
						>
							<DialogHeader>
								<DialogTitle className="lg:text-8xl text-6xl mb-2 font-[400] tracking-tight dark:text-white/70 text-black/70">
									{project.title}
								</DialogTitle>
								<DialogDescription>
									{/* <div className="w-full mb-4 hidden lg:flex justify-center gap-4 font-[100] dark:text-gray-200 text-black/70">
										<div>
											<strong className="mr-1">
												&#9166;
											</strong>
											to visit
										</div>
										<div>
											<strong className="mr-1">
												esc
											</strong>
											to dismiss
										</div>
									</div> */}
									<div className="">
										<div className="relative">
											<div
												className="flex overflow-x-scroll gap-x-8 snap-x scroll-smooth"
												id={`image-container-${index}`}
											>
												{project.images.map(
													(
														image: string,
														imgIndex: Key | number
													) => (
														<div
															className=""
															style={{
																minWidth:
																	"fit-content",
															}}
															key={imgIndex}
														>
															<div className="flex flex-col items-start snap-center">
																<img
																	src={image}
																	alt={`${project.title} image `}
																	className="sm:max-md:max-w-[90%] max-h[50vh] md:h-[60vh] object-contain"
																/>
															</div>
														</div>
													)
												)}
											</div>

											{project.images.length > 1 && (
												<>
													<button
														onClick={() => {
															const container =
																document.getElementById(
																	`image-container-${index}`
																);
															if (container)
																scrollImages(
																	"left",
																	container
																);
														}}
														className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all big-dot-cursor"
														aria-label="Previous image"
													>
														<svg
															width="20px"
															height="20px"
															viewBox="0 0 24 24"
															fill="#fff"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
																fill="#fff"
															/>
														</svg>
													</button>
													<button
														onClick={() => {
															const container =
																document.getElementById(
																	`image-container-${index}`
																);
															if (container)
																scrollImages(
																	"right",
																	container
																);
														}}
														className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all big-dot-cursor"
														aria-label="Next image"
													>
														<svg
															width="20px"
															height="20px"
															viewBox="0 0 24 24"
															fill="fff"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
																fill="#fff"
															/>
														</svg>
													</button>
												</>
											)}
										</div>
										<div
											className="mt-8 text-lg text-justify mb-8"
											dangerouslySetInnerHTML={{
												__html: project.description,
											}}
										/>
										<div className="h-12"></div>
										<div className="sticky bottom-0 right-8 left-8 h-16 flex items-center justify-center lg:gap-4 gap-2">
											{project.links[0] && (
												<Link
													href={project.links[0]}
													className="flex-1 w-full h-full flex-wrap"
													target="_blank"
												>
													<button className="bg-slate-800 no-underline group cursor-pointer h-full w-full relative shadow-2xl shadow-zinc-900 rounded-full p-px font-semibold leading-6  text-white inline-block">
														<span className="absolute inset-0 overflow-hidden rounded-full">
															<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
														</span>
														<div className="relative flex h-full justify-center space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
															<span>
																{project
																	.links[1]
																	? "Visit Site"
																	: "Visit Github"}
															</span>
															<svg
																fill="none"
																height="16"
																viewBox="0 0 24 24"
																width="16"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M10.75 8.75L14.25 12L10.75 15.25"
																	stroke="currentColor"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="1.5"
																/>
															</svg>
														</div>
														<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
													</button>
												</Link>
											)}

											{project.links[1] && (
												<Link
													href={project.links[1]}
													className="flex-1 w-full h-full flex-wrap"
													target="_blank"
												>
													<button
														type="button"
														className="h-full w-full justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 dark:hover:bg-[#1E201E] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
													>
														<svg
															className="w-4 h-4 me-2"
															aria-hidden="true"
															xmlns="http://www.w3.org/2000/svg"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
																clipRule="evenodd"
															/>
														</svg>
														Visit Github
													</button>
												</Link>
											)}
										</div>
									</div>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				))}
			</div>
		</div>
	);
}
