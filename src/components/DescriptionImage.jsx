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

  // 图片是否在左边：特定 title 才满足
  const imageOnLeft = title === "All-in-one\nplatform";

  // 动态内容宽度
  const contentWidth = isButton ? "w-1/2" : isList ? "w-[400px]" : "w-[439px]";
  const imageWidth = isButton ? "w-1/2" : isList ? "w-[709px]" : "w-[585px]";

  // 图片区块
  const ImageBlock = (
    <div className={imageWidth}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-xl object-cover"
      />
    </div>
  );

  return (
    <div className={`flex items-center gap-12 ${isText ? "pl-[105px] bg-[rgba(74,197,223,0.05)]" : ""}`}>
      {imageOnLeft && ImageBlock}

      <div className={`${contentWidth} text-left`}>
        {isText && (
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <GradientLabel width={131} title="TEMPLATES" />
          </div>
        )}
        <h2 className={`text-[${isButton ? "72" : "36"}px] font-semibold mb-4`}>
          {title}
        </h2>
        <p className="mb-6 whitespace-pre-line">{description}</p>

        {isButton && (
          <Button className="gradient-outline-btn bg-[rgba(74,197,223,0.3)] text-white rounded-full px-6 py-2 font-semibold shadow-md transition border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#11CCA8] hover:border-[#11CCA8] hover:bg-[rgba(74,197,223,0.4)]">
            Button Text
          </Button>
        )}

        {isList && (
          <ul className="space-y-4">
            {items.map((text, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <img src={CheckIcon} alt="check" className="h-5 w-5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {!imageOnLeft && ImageBlock}
    </div>
  );
};

export default DescriptionImage;
