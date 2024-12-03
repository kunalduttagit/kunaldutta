import { FlipWords } from "./ui/flipWords";

export default function AboutMe() {
	return (
		<div className="flex justify-center items-end dark:bg-[#f8f8f8] bg-[#222222] md:min-h-[90vh] min-h-[75vh] relative overflow-hidden rounded-[26px] my-32 font-[Poppins]">
			<img
				src={"/assets/images/me.png"}
				className="h-auto max-h-[85vh] w-auto object-contain absolute -right-10 -bottom-10 "
				alt="Potrait of Kunal Dutta"
			/>
			<div className="absolute lg:left-10 left-4 md:top-[10%] top-[4%] dark:text-black text-white">
				<h1 className="text-9xl lg:text-[15rem] font-[200] leading-snug">Hello</h1>
				{/* Visisble for large devices */}
				<h2 className="max-lg:hidden text-5xl leading-[1.15]">
					I&apos;m a <strong>developer</strong> with a knack <br /> for 
					<span className="font-[500] ml-1">
						<FlipWords
							words={[
								"full stack development",
								"mobile app wizardry",
								"machine learning flair",
								"UI/UX design creativity",
								"problem-solving prowess",
							]}
							className="text-teal-500 dark:text-teal-500"
						/>
					</span>
					<br /> based in Indore, India
				</h2>

				{/* Visisble for smaller devices */}
				<h2 className="lg:hidden text-3xl leading-[1.15] tracking-tight">
					I am a <strong>developer</strong>  <br /> with a knack for
					<span className="font-[500]">
						<FlipWords
							words={[
								"full stack development",
								"mobile app development",
								"machine learning",
								"UI/UX design",
								"problem-solving",
							]}
							className="text-teal-500 dark:text-teal-500 -ml-2"
						/>
					</span>
					<br /> based in Indore, India
				</h2>
			</div>
            <div className="text-2xl absolute md:bottom-0 bottom-[30%] left-0 lg:ml-10 ml-4 mb-10 dark:text-black text-white big-dot-cursor">~ Kunal Dutta</div>
		</div>
	);
}
