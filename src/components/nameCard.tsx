"use client";
import BlurText from '@/components/animation/blurText';
import {motion} from 'framer-motion';

const nameVariants = {
    hidden: {paddingRight: "120px"},
    visible: {paddingRight: 0, transition: {duration: 1.2}}
}

export default function Name() {
    return (
        <motion.div className="name-card pl-4 dark:text-[#EDDFE0] dark:bg-black bg-[#f8f8f8] rounded-tr-[26px] overflow-hidden" variants={nameVariants} animate="visible" initial="hidden">
            {/* <p className="text-[10rem] tracking-wider mt-10 leading-[0.6]">Kunal</p> */}
            {/* <p className="text-9xl tracking-wider">Dutta</p> */}
            <h2><BlurText text="Kunal" className="md:text-[10rem] text-8xl tracking-wider mt-16 leading-[0.6]" /></h2>
            <h2><BlurText text="Dutta" className="md:text-9xl text-7xl tracking-wider -mb-8" /></h2>
        </motion.div>
    );
}