import React from "react";

const SectionHeader = ({
  title,
  description,
  textAlign = "left"
}) => {
  const containerClasses = `
    flex flex-col sm:flex-row
    ${textAlign === "center" ? "items-center" : "items-start sm:items-center"}
    gap-4 sm:gap-8 md:gap-12
    mb-6 sm:mb-8 md:mb-12
    px-4 sm:px-6 md:px-8
    landscape:flex-row landscape:items-center
  `;

  const titleClasses = `
    text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[2rem]
    font-semibold
    leading-tight sm:leading-normal
    w-full sm:w-auto
    ${textAlign === "center" ? "text-center" : "text-left"}
  `;

  const descriptionClasses = `
    text-sm xs:text-base sm:text-lg
    text-white/80
    max-w-full sm:max-w-xl
    leading-relaxed
    ${textAlign === "center" ? "text-center" : "text-left"}
  `;

  return (
    <div className={containerClasses}>
      <h3 className={titleClasses}>{title}</h3>
      <p className={descriptionClasses}>{description}</p>
    </div>
  );
};

export default SectionHeader; 