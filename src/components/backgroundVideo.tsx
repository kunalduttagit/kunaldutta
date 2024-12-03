import Name from "./nameCard";

export default function Backgroundvideo() {
    return (
        <div className="dark:bg-black bg-[#f8f8f8] relative flex flex-col min-h-[600px] mt-4 md:w-[95%] lg:w-[85%] lg:mr-4">
            <div className="overflow-hidden min-h-[600px] ">
                <video
                    src="/assets/videos/one.mp4"
                    about="background"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute h-full object-cover rounded-[26px] noise-mask"
                />

                {/* Noise filter for video */}
                <div className="video-noise rounded-[26px]"></div>

                <div className="absolute name-container bottom-0 left-0 ">
                    <div className="relative w-full">
                        <svg className=" corner-content-box-one dark:text-black text-[#f8f8f8]" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
                        <Name />
                        <svg className="svg-corner corner-content-box-two dark:text-black text-[#f8f8f8]" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}