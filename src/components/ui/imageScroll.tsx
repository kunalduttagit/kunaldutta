
interface ScrollColumnProps {
  images: string[];
  duration: number;
}

const ScrollColumn: React.FC<ScrollColumnProps> = ({ images, duration }) => {
  return (
    <div className="scroll-column">
      <div 
        className="scroll-content"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            className="scroll-image"
            alt={`scroll-image-${index}`}
            loading="lazy"
          />
        ))}
      </div>
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
    <div className="image-scroll">
      <ScrollColumn images={column1} duration={20} />
      <ScrollColumn images={column2} duration={15} />
      <ScrollColumn images={column3} duration={25} />
    </div>
  );
};

export default ImageScroll;