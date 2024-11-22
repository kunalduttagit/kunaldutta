import Link from "next/link";

export default function Connect() {
    return(
        <div className="w-full flex justify-center items-center relative">
            <video
                    src="/assets/videos/two.mp4"
                    about="background"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="inset-0 w-[90vw] object-cover rounded-[26px] blur-sm brightness-[0.8]"
                />
                <p className="absolute overflow-hidden top-20 left-24 text-9xl text-white tracking-tighter font-light drop-shadow-md">Let's get in <strong className="font-medium">touch</strong> <br/> and build something <strong className="font-semibold">amazing!</strong></p>
                <Link href="mailto:kunalduttaedu@gmail.com" className=" absolute flex justify-center items-center bottom-20 right-24 text-3xl ring-white ring-2 pl-4 pr-4 h-20 rounded-full font-[500] text-white hover:text-black hover:bg-white hover:animate-pule transition-all ease-in-out">
                    <img src="/assets/videos/mail.gif" className="w-12 h-12" />
                    Connect
                    <img src="/assets/videos/mail.gif" className="w-12 h-12" />
                </Link>
        </div>
    );
}