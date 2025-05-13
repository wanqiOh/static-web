import React from "react";
import GradientLabel from "./GradientLabel";

const FeatureCard = ({
  image,
  imageAlt,
  labelWidth,
  labelText,
  title,
  description,
  imagePosition = "top"
}) => {
  return (
    <div className={`${(imagePosition === "top" || labelText === "ANALYTICS" || (window.innerWidth < 641 && labelText === "DESIGN")) ? "col-span-2" : ""} bg-[rgba(74,197,223,0.05)] rounded-2xl shadow-lg flex flex-col items-start p-8 h-[536px]`}>
      {imagePosition === "top" && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}
      <GradientLabel width={labelWidth} title={labelText} />
      <h4 className="text-[36px] font-semibold font-sans mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        {title}
      </h4>
      <p className="text-[18px] text-white/80 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
        {description}
      </p>
      {imagePosition === "bottom" && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 object-cover rounded-xl mt-6"
        />
      )}
    </div>
  );
};

export default FeatureCard; 