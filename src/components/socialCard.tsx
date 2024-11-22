import Link from "next/link";

export default function SocialCard({
	name,
	username,
	img,
	nColor = "black",
	unColor = "black",
	href = "https://www.linkedin.com/in/duttakunal13",
}: any) {
	return (
		<Link href={href} target="_blank">
			<div className="card relative w-64 h-64 rounded-[13px] overflow-hidden group font-[Poppins]">
				{/* <div className="glow-effect gradient-line"></div> */}
				<div className=" glow-container absolute bottom-0 right-0 left-0 h-[20%]"></div>
				<div className="spectrum-line group-hover:opacity-100"></div>
				<img
					src={img}
					alt={name}
					className="w-full h-full object-contain"
				/>
				<div className=" absolute bottom-0 left-0 right-0 group-hover:!h-16"></div>
				<div className="p-4 h-[35%] backdrop-blur-sm absolute bottom-0 left-0 right-0 group-hover:h-full justify-end flex flex-col transition-all ease-in-out bg-white/10 shadow-md">
					<h3 className={`font-semibold text-2xl text-${nColor}`}>
						{name}
					</h3>
					<p className={`text-${unColor}`}>@{username}</p>
				</div>
			</div>
		</Link>
	);
}
