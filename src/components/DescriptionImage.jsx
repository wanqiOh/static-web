import React from "react";
import { Button } from "@/components/ui/button";
import GradientLabel from "@/components/GradientLabel";
import CheckIcon from '@/assets/SVG/635c92dce19fbd00a5fcb560_Checkmark.svg.svg';

const DescriptionImage = ({ title, description, src, alt, sectionPart = "button" }) => {
  const items = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor sit"
  ];

  const isList = sectionPart === "list";
  const isText = sectionPart === "text";
  const isButton = sectionPart === "button";
  const imageOnLeft = title === "All-in-one\nplatform";

  const titleClasses = `
    text-[2rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2rem]
    font-semibold
    leading-tight sm:leading-normal
    ${isButton ? 'lg:text-[2rem]' : 'lg:text-[36px]'}
  `;

  return (
    <div className={`
      flex flex-col sm:flex-row 
      items-start sm:items-center 
      gap-4 sm:gap-8 md:gap-12 
      px-4 sm:px-6 md:px-8 lg:px-20
      ${isText ? "sm:pl-[105px] bg-[rgba(74,197,223,0.05)]" : ""}
      w-full
      max-w-[100vw]
      overflow-x-hidden
    `}>
      {/* Image Section - Handle landscape and small screens */}
      {imageOnLeft && (
        <div className="w-full sm:w-1/2 max-w-full sm:max-w-[585px]">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-xl object-cover
              max-h-[200px] sm:max-h-[300px] md:max-h-[400px] 
              landscape:max-h-[250px] sm:landscape:max-h-[350px]"
          />
        </div>
      )}

      {/* Content Section - Responsive text and spacing */}
      <div className="w-full sm:w-full max-w-full sm:max-w-[439px]">
        {isText && (
          <div className={`flex pt-8 sm:grid sm:grid-cols-${window.innerWidth < 768 ? "3" : "2"} gap-2 sm:gap-4 mb-3 sm:mb-4`}>
          <GradientLabel width={131} title="TEMPLATES" />
        </div>
        )}

        <h2 className={titleClasses}>
          {title}
        </h2>

        <p className="
          text-sm xs:text-base sm:text-lg
          text-white/80 
          mb-4 sm:mb-6 
          whitespace-pre-line
          leading-relaxed
        ">
          {description}
        </p>

        {/* Button Section */}
        {isButton && (
          <Button className="
            gradient-outline-btn 
            bg-[rgba(74,197,223,0.3)] 
            text-white 
            text-sm sm:text-base
            rounded-full 
            px-4 sm:px-6 
            py-2 
            font-semibold 
            shadow-md 
            transition 
            border-2 
            border-transparent 
            focus:outline-none 
            focus:ring-2 
            focus:ring-[#11CCA8] 
            hover:border-[#11CCA8] 
            hover:bg-[rgba(74,197,223,0.4)]
            w-full sm:w-auto
          ">
            Button Text
          </Button>
        )}

        {/* List Section */}
        {isList && (
          <ul className="space-y-2 sm:space-y-4">
            {items.map((text, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <img 
                  src={CheckIcon} 
                  alt="check" 
                  className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" 
                />
                <span className="text-sm sm:text-base">{text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image Section - When not on left */}
      {!imageOnLeft && (
        <div className="w-full sm:w-1/2 max-w-full sm:max-w-[585px]">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-xl object-cover
              max-h-[200px] sm:max-h-[300px] md:max-h-[400px]
              landscape:max-h-[250px] sm:landscape:max-h-[350px]"
          />
        </div>
      )}
    </div>
  );
};

export default DescriptionImage;
