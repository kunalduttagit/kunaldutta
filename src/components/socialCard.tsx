import Link from "next/link";

interface SocialCardProps {
    name: string;
    username: string;
    img: string;
    nColor: string;
    unColor: string;
    href: string;
}

export default function SocialCard({
	name,
	username,
	img,
	nColor = "black",
	unColor = "black",
	href = "https://www.linkedin.com/in/duttakunal13",
}: SocialCardProps ) {
	return (
		<Link href={href} target="_blank">
			<div className="card relative w-40 h-40 md:w-64 md:h-64 rounded-[13px] overflow-hidden group font-[Poppins] big-dot-cursor">
				{/* <div className="glow-effect gradient-line"></div> */}
				<div className=" glow-container absolute bottom-0 right-0 left-0 h-[20%]"></div>
				<div className="spectrum-line group-hover:opacity-100"></div>
				<img
					src={img}
					alt={name}
					className="w-full h-full object-contain"
					loading="lazy"
				/>
				<div className=" absolute bottom-0 left-0 right-0 group-hover:!h-16"></div>
				<div className="md:p-4 p-2  md:h-[35%] backdrop-blur-sm absolute bottom-0 left-0 right-0 group-hover:h-full justify-end flex flex-col transition-all ease-in-out bg-white/10 shadow-md">
					<h3 className={`font-semibold text-xl md:text-2xl text-${nColor}`}>
						{name}
					</h3>
					<p className={`text-${unColor}`}>@{username}</p>
				</div>
			</div>
		</Link>
	);
}
