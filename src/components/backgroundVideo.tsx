import Name from "./nameCard";

export default function Backgroundvideo() {
    return (
        <div className="dark:bg-black bg-[#f8f8f8] relative flex flex-col min-h-[600px] mt-4 mx-2 w-[75vw]">
            <div className="overflow-hidden px-2 min-h-[600px]">
                <video
                    src="/assets/videos/one.mp4"
                    about="background"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-[26px]"
                />

                <div className="absolute name-container bottom-0 left-0 max-w-[55%] w-[80%]">
                    <div className="relative w-full">
                        <svg className=" corner-content-box-one dark:text-black text-[#f8f8f8]" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
                        <Name />
                        <svg className="svg-corner corner-content-box-two dark:text-black text-[#f8f8f8]" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
                    </div>
                </div>
                        {/* <svg className="svg-corner corner-content-box-one dark:text-black text-white" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg> */}
            </div>
        </div>
    );
}