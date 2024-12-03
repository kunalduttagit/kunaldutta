import SocialCard from "./socialCard";

export default function Socials() {
	return (
		<div className="w-full flex flex-col justify-center items-center ">
			<h1 className="text-3xl font-semibold my-10">My Socials</h1>
			<div className="flex flex-wrap gap-4 md:gap-12 w-full justify-evenly">
				<SocialCard
					name="Linkedin"
					username="duttakunal13"
					img="/assets/images/socialLogos/linkedin.png"
					nColor="white"
					unColor="[#7b7b7b]"
                    href="https://www.linkedin.com/in/duttakunal13/"
				/>
				<SocialCard
					name="Github"
					username="kunalduttagit"
					img="/assets/images/socialLogos/github.png"
					nColor="black"
					unColor="black"
                    href="https://github.com/kunalduttagit"
				/>
				<SocialCard
					name="Monkeytype"
					username="KunalDutta"
					img="/assets/images/socialLogos/monkeytype.png"
					nColor="white"
					unColor="[#7b7b7b]"
                    href="https://monkeytype.com/profile/KunalDutta"
				/>
				<SocialCard
					name="LeetCode"
					username="kunaldutta"
					img="/assets/images/socialLogos/leetcode.png"
					nColor="white"
					unColor="gray-800"
                    href="https://leetcode.com/u/kunaldutta/"
				/>
				<SocialCard
					name="Instagram"
					username="_kunaldutta"
					img="/assets/images/socialLogos/instagram.png"
					nColor="white"
					unColor="[#7b7b7b]"
                    href="https://www.instagram.com/_kunaldutta/"
				/>
				<SocialCard
					name="X"
					username="_KunalDutta"
					img="/assets/images/socialLogos/x.png"
					nColor="white"
					unColor="[#7b7b7b]"
                    href="https://x.com/_KunalDutta"
				/>
				<SocialCard
					name="Quora"
					username="Kunal-Dutta-156"
					img="/assets/images/socialLogos/quora.png"
					nColor="white"
					unColor="[#7b7b7b]"
                    href="https://www.quora.com/profile/Kunal-Dutta-156"
				/>
				<SocialCard
					name="GeeksForGeeks"
					username="kunalduttagfg"
					img="/assets/images/socialLogos/gfg.png"
					nColor="white"
					unColor="[#7b7b7b]"
                    href="https://www.geeksforgeeks.org/user/kunalduttagfg/"
				/>
			</div>
		</div>
	);
}
