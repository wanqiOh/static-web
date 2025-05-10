import React from "react";
import Aperture from '@/assets/SVG/635d8846e5fc3d4242b856d0_LogoAperture.svg.svg';

const TestimonialBlock = ({ description, writer }) => {
  const isSecond = description === "Get started today";

  return (
    <div className={`${isSecond && "bg-[rgba(74,197,223,0.05)] "} text-white text-center space-y-6 ${isSecond ? "mx-auto w-[1024px] px-4 py-10" : "py-16 px-6"}`}>
      {!isSecond && <div className="flex justify-center items-center space-x-2 opacity-60">
        <img
          src={Aperture}
          alt="Aperture Logo"
          className="w-[162px] h-[47px]"
        />
      </div>}

      <blockquote className={`text-[${isSecond ? "56" : "32"}px] font-medium max-w-3xl mx-auto leading-relaxed`}>
        {description}
      </blockquote>

      <figcaption className={`text-sm ${isSecond ? "px-[200px] text-white/70" : "text-teal-400"}`}>
        {writer}
      </figcaption>

      {isSecond && (
        <form className="flex justify-center mt-6 w-full max-w-xl mx-auto pt-[60px]">
          <div className="flex w-full items-center border border-cyan-400 rounded-full overflow-hidden bg-transparent px-2 py-1">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow bg-transparent text-white px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-2 rounded-full text-black font-semibold"
            >
              Sign up
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TestimonialBlock;