import React from "react";

const GradientLabel = ({ width, title }) => {
  return (
    <div
      className={`w-[${width}px] h-[35px] rounded-[8px] ${title === "LIVESTREAM" ? "mb-0" : "mb-4"} flex justify-start items-center ${window.innerWidth < 768 ? "px-4" : "px-8"} font-inter text-[18px] font-semibold relative overflow-hidden bg-[rgba(74,197,223,0.15)]`}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#11CCA8] to-[#4AC5DF] z-10">
        {title}
      </span>
    </div>
  );
};

export default GradientLabel; 