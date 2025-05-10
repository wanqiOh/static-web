import React from "react";

const SectionHeader = ({
  title,
  description,
  textAlign = "left"
}) => {
  return (
    <div className={`flex ${textAlign === "center" ? "flex-col items-center" : "justify-between items-center"} mb-12 px-6`}>
      <h3 className="text-[72px] font-semibold">{title}</h3>
      <p className={`max-w-xl text-[18px] text-white/80 ${textAlign === "center" ? "text-center" : "text-left"}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader; 