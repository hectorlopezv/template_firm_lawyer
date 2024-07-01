import { QuoteIcon } from "lucide-react";

interface QuoteProps {
  text: string;
  bgClass: string;
  textClass: string;
}

const Quote = ({ text, bgClass, textClass }: QuoteProps) => {
  return (
    <div className={bgClass}>
      <div className="container">
        <div className="relative px-0 py-[50px] lg:px-12 lg:py-[75px]">
          <QuoteIcon
            size={60}
            className="absolute left-0 top-[60px] z-0 text-white opacity-40"
          />
          {text && <p className={`text-[18px] italic lg:text-xl ${textClass}`}>
            {text}
          </p>}

        </div>
      </div>
    </div>
  );
};

export default Quote;
