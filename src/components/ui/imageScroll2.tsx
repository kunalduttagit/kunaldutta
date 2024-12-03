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
            className="scroll-image2"
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
    '/assets/images/workex/spain/es1.png',
    '/assets/images/workex/spain/es2.png',
    '/assets/images/workex/spain/es3.png'
  ];
  
  const column2 = [
    '/assets/images/workex/spain/es4.png',
    '/assets/images/workex/spain/es5.png',
    '/assets/images/workex/spain/es6.png',
  ];
  
  return (
    <div className="mt-8 flex justify-around">
      <ScrollColumn images={column1} duration={25} />
      <ScrollColumn images={column2} duration={15} />
    </div>
  );
};

export default ImageScroll;