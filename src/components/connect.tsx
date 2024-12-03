import Link from "next/link";

export default function Connect() {
    return(
        <div className="w-full flex justify-center items-center relative px-4">
            <video
                    src="/assets/videos/two.mp4"
                    about="background"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="inset-0 max-lg:h-[50vh] w-[90vw] object-cover rounded-[26px] blur-[8px] brightness-[0.8]"
                />
                <p className="absolute overflow-hidden top-14 md:top-20 md:left-24 left-8 text-4xl md:text-7xl lg:text-9xl text-white tracking-tighter font-light drop-shadow-md">Let&apos;s get in <strong className="font-medium">touch</strong> <br/> and build something <strong className="font-semibold">amazing!</strong></p>
                <Link href="mailto:kunalduttaedu@gmail.com" className=" absolute flex justify-center items-center bottom-5 md:bottom-20 lg:right-24 text-3xl ring-white ring-2 pl-4 pr-4 h-20 rounded-full font-[500] text-white hover:text-black hover:bg-white hover:animate-pule transition-all ease-in-out big-dot-cursor">
                    <img loading="lazy" src="/assets/videos/mail.gif" className="w-12 h-12" alt="decoration plane"/>
                    Connect
                    <img loading="lazy" src="/assets/videos/mail.gif" className="w-12 h-12" alt="decoration plane" />
                </Link>
        </div>
    );
}