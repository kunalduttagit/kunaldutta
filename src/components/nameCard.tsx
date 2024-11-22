import BlurText from '@/components/animation/blurText';

export default function Name() {
    return (
        <div className="name-card pl-4 pr-16 dark:text-[#EDDFE0] dark:bg-black bg-[#f8f8f8] rounded-tr-[26px] overflow-hidden">
            {/* <p className="text-[10rem] tracking-wider mt-10 leading-[0.6]">Kunal</p> */}
            {/* <p className="text-9xl tracking-wider">Dutta</p> */}
            <h2><BlurText text="Kunal" className="text-[10rem] tracking-wider mt-16 leading-[0.6]" delay={50} /></h2>
            <h2><BlurText text="Dutta" className="text-9xl tracking-wider -mb-8" delay={50} /></h2>
        </div>
    );
}