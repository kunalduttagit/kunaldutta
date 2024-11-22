"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ScrollColumnProps {
  images: string[];
  duration: number;
}

const ScrollColumn: React.FC<ScrollColumnProps> = ({ images, duration }) => {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight / 2);
    }
  }, [images]);

  useEffect(() => {
    controls.start({
      y: [-containerHeight, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      },
    });
  }, [containerHeight, duration, controls]);

  return (
    <div className="" style={{ height: containerHeight }}>
      <motion.div
        ref={containerRef}
        animate={controls}
        className="flex flex-col"
        // onHoverStart={() => controls.stop()}
        // onHoverEnd={() => controls.start({
        //   y: [-containerHeight, 0],
        //   transition: {
        //     repeat: Infinity,
        //     repeatType: "loop",
        //     duration,
        //     ease: "linear",
        //   },
        // })}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-44 object-contain rounded-[13px] shadow-lg my-4 mx-1"
            alt={`scroll-image-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

const ImageScroll: React.FC = () => {
  const column1 = [
    '/assets/images/workex/canyfix/cany.jpeg',
    '/assets/images/workex/canyfix/cany2.jpeg',
    '/assets/images/workex/canyfix/cany3.png'
  ];
  
  const column2 = [
    '/assets/images/workex/canyfix/cany6.png',
    '/assets/images/workex/canyfix/cany4.png',
    '/assets/images/workex/canyfix/cany7.png',
  ];
  
  const column3 = [
    '/assets/images/workex/canyfix/cany5.png',
    '/assets/images/workex/canyfix/cany8.jpeg'
  ];

  return (
    <div className="mt-8 flex gap-14">
      <ScrollColumn images={column1} duration={20} />
      <ScrollColumn images={column2} duration={15} />
      <ScrollColumn images={column3} duration={25} />
    </div>
  );
};

export default ImageScroll;