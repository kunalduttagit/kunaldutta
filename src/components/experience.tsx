import SkillPill from "./skillPill";
import ImageScroll from "./ui/imageScroll";
import ImageScroll2 from "./ui/imageScroll2";

export default function Experience() {
	return (
		<div className="w-full flex justify-center items-center flex-col px-10">
			<h1 className="text-3xl font-semibold">Experiences</h1>
			<div className="w-full">
				<div className="flex justify-between w-full mt-10">
					<div>
						<h2 className="text-3xl font-[500]">
							Canyfix, Kalyan West, Maharashtra
						</h2>
						<h3 className="text-2xl mt-4 text-[rgb(112,112,112)] dark:text-[rgb(150,150,150)]">
							<span className="mx-3">&#8226;</span>Lead
							Application Developer
						</h3>
					</div>
					<div className="flex flex-col justify-around items-end">
						<div className="text-lg text-[rgb(112,112,112)] dark:text-[rgb(150,150,150)]">
							July 2024 - Present
						</div>
						<div className="flex flex-wrap gap-2">
							<SkillPill skill="Flutter" />
							<SkillPill skill="NextJS" />
							<SkillPill skill="Leadership" />
							<SkillPill skill="UI/UX" />
							<SkillPill skill="Deployment" />
						</div>
					</div>
				</div>

				<div className="flex w-full justify-around gap-8 mt-10">
					<div className=" h-[45vh] w-[55%] overflow-hidden  dark:[mask:linear-gradient(to_bottom,white_50%,white,transparent)]">
						<ImageScroll />
					</div>

					<article className="w-[40%] text-justify leading-relaxed text-[rgb(112,112,112)] dark:text-[rgb(150,150,150)]">
						I'm primarily worked as a{" "}
						<strong>Flutter developer</strong>, collaborating
						closely with my mentor (co-founder) to bring ideas to
						life. He would share his vision, and I would dive into
						figuring out how to make it{" "}
						<strong>user-friendly and efficient</strong>. This
						involved thinking through the interactions, optimizing
						backend processes, deciding how data should flow, and
						designing the UI/UX to ensure everything felt seamless
						for the user.
						<br />
						<br />I{" "}
						<strong>took charge of two major products </strong> in
						our ecosystem, successfully <strong>deploying</strong>{" "}
						one on the PlayStore. I also <strong>led</strong> a
						cross-functional <strong>team of five</strong> devopers
						and designers. I also worked on <strong>NextJS</strong>,
						working on{" "}
						<strong>API integrations and state management</strong>{" "}
						to boost our web application's performance. Throughout
						the journey, I maintained a delicate balance between
						modernizing our design language and staying true to our{" "}
						<strong>brand's identity</strong>.
					</article>
				</div>
			</div>

			<div className="bg-[#7b7b7b] h-[1px] w-full my-10" />
			<div className="flex justify-between w-full">
				<div>
					<h2 className="text-3xl font-[500]">
						University of Valencia, Spain
					</h2>
					<h3 className="text-2xl mt-4 text-[rgb(112,112,112)] dark:text-[rgb(150,150,150)]">
						<span className="mx-3">&#8226;</span>Team Leader
					</h3>
				</div>
				<div className="flex flex-col justify-around items-end">
					<div className="text-lg text-[rgb(112,112,112)] dark:text-[rgb(150,150,150)]">
						Apr 2024 - Sep 2024
					</div>
					<div className="flex flex-wrap gap-2">
						<SkillPill skill="ReactJS" />
						<SkillPill skill="Node Mailer" />
						<SkillPill skill="Role Based Access" />
						<SkillPill skill="ExpressJS" />
					</div>
				</div>
			</div>

			<div className="flex w-full justify-around gap-8 mt-10">
				<article className="w-[40%] text-justify leading-relaxed text-[rgb(112,112,112)] dark:text-[rgb(150,150,150)]">
					I build a football exercise selection platform for athletes,
					their families, coaches, and admins, each with specific{" "}
					<strong>roles and access levels</strong>. Admins could{" "}
					<strong>create</strong> exercises and sessions,{" "}
					<strong>register</strong> coaches, and{" "}
					<strong>manage</strong>
					the platform. Coaches could onboard players, assign
					personalized sessions with timelines, and{" "}
					<strong>communicate</strong> with players in real-time.
					Players had a calendar to <strong>track</strong> their
					assigned sessions and interact with their coaches, while
					family members could monitor their child's progress.
					<br /> <br></br>I handled the <strong>UI/UX</strong> design,{" "}
					<strong>backend</strong> architecture, <strong>APIs</strong>
					, <strong>database</strong> schemas, and{" "}
					<strong>deployment</strong> on the cloud. The platform was
					built using React, Tailwind CSS, Node.js, Express, MongoDB
					Atlas, and Nodemailer for{" "}
					<strong>automated email notifications</strong>. It featured
					robust filtering options for exercises and an interactive{" "}
					<strong>messaging system</strong> to streamline
					communication between coaches and players. This project was
					a full-stack experience that balanced functionality with
					user-centered design.
				</article>

				<div className=" h-[45vh] w-[55%] overflow-hidden dark:[mask:linear-gradient(to_bottom,white_50%,white,transparent)]">
					<ImageScroll2 />
				</div>
			</div>
		</div>
	);
}
