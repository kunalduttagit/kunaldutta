import { FlipWords } from "./ui/flipWords";

export default function AboutMe() {
	return (
		<div className="flex justify-center items-end dark:bg-[#f8f8f8] bg-[#222222] min-h-[90vh] relative overflow-hidden rounded-[26px] my-32 font-[Poppins]">
			<img
				src={"/assets/images/me.png"}
				className="h-auto max-h-[85vh] w-auto object-contain absolute -right-10 -bottom-10 "
			/>
			<div className="absolute left-10 top-[10%] dark:text-black text-white">
				<h1 className="text-[15rem] font-[200] leading-snug">Hello</h1>
				<h2 className="text-5xl leading-[1.15]">
					I'm a <strong>developer</strong> with a knack <br /> for 
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
			</div>
            <div className="text-2xl absolute bottom-0 left-0 ml-10 mb-10 dark:text-black text-white">~ Kunal Dutta</div>
		</div>
	);
}
