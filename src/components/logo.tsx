interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
  }
  
  export default function Logo({ width = 80, height = 50, className }: LogoProps) {
      return (
          <svg 
              width={width} 
              height={height} 
              viewBox="0 0 146 90" 
              fill="currentColor"
              className={className}
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M34.688 34.576C27.8613 35.1733 22.656 37.1787 19.072 40.592C15.488 44.0053 12.5867 49.552 10.368 57.232L1.792 90H8.448L17.024 57.616C18.1333 53.1787 19.5413 49.7653 21.248 47.376C22.9547 44.9013 25.2587 43.1093 28.16 42C31.0613 40.8053 34.944 40.08 39.808 39.824L60.8 60.944V90H67.456V0.399994H60.8V52.88L9.216 0.399994H0.767998L34.688 34.576Z"/>
              <path d="M60.84 90V0.399994H99.24C106.067 0.399994 112.296 1.55199 117.928 3.856C123.56 6.07466 128.424 9.18933 132.52 13.2C136.616 17.1253 139.816 21.8187 142.12 27.28C144.424 32.7413 145.576 38.7147 145.576 45.2C145.576 51.6853 144.424 57.7013 142.12 63.248C139.816 68.7093 136.616 73.4027 132.52 77.328C128.509 81.2533 123.645 84.368 117.928 86.672C112.296 88.8907 106.067 90 99.24 90H60.84ZM67.24 85.776L65.448 83.6H98.6C104.403 83.6 109.779 82.6613 114.728 80.784C119.677 78.9067 123.901 76.2613 127.4 72.848C130.984 69.3493 133.757 65.296 135.72 60.688C137.683 55.9947 138.664 50.832 138.664 45.2C138.664 39.6533 137.683 34.576 135.72 29.968C133.757 25.2747 130.984 21.2213 127.4 17.808C123.816 14.3093 119.549 11.6213 114.6 9.744C109.736 7.78133 104.403 6.8 98.6 6.8H65.064L67.24 4.88V85.776Z"/>
          </svg>
      );
  }