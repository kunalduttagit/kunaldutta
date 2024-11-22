import SplitText from "./animation/splitText";

export default function Projects() {
	return (
		<div className="w-screen mt-24 flex flex-col justify-center items-center text-black dark:text-white">
			<h1 className="text-3xl font-semibold mb-4">{"< Projects />"}</h1>
			<div className="flex flex-col justify-center divide-y-2 w-[75vw]">
				<div className="pt-6 pb-4 arrow-cursor">
                    <div className="text-lg">Hybrid Movie Reccomendor System</div>
                    <h2><SplitText text="Motion" className="text-8xl" delay={50}/></h2>
                </div>
				<div className="pt-6 pb-4 arrow-cursor">
                    <div className="text-lg">One to One & Group Chats</div>
                    <h2><SplitText text="Nifty Chat" className="text-8xl" delay={50}/></h2>
                </div>
				<div className="pt-6 pb-4 arrow-cursor">
                    <div className="text-lg">Mobile Music Player</div>
                    <h2><SplitText text="Records" className="text-8xl" delay={50}/></h2>
                </div>
				<div className="pt-6 pb-4 arrow-cursor">
                    <div className="text-lg">Neural Network Simulation</div>
                    <h2><SplitText text="Self Driving Car" className="text-8xl" delay={50}/></h2>
                </div>
				<div className="pt-6 pb-4 arrow-cursor">
                    <div className="text-lg">Just a calculator</div>
                    <h2><SplitText text="Neumorphic Calculator " className="text-8xl" delay={50}/></h2>
                </div>
			</div>
		</div>
	);
}
