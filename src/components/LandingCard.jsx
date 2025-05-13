import React from "react";
import Aperture from '@/assets/SVG/635d8846e5fc3d4242b856d0_LogoAperture.svg.svg';

const TestimonialBlock = ({ description, writer }) => {
  const isSecond = description === "Get started today";

  return (
    <div className={`
      ${isSecond ? "bg-[rgba(74,197,223,0.05)]" : ""} 
      text-white 
      text-center 
      space-y-4 sm:space-y-6 
      w-full
      max-w-7xl
      mx-auto
      ${isSecond 
        ? "px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-10" 
        : "py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20"
      }
    `}>
      {!isSecond && (
        <div className="flex justify-center items-center space-x-2 opacity-60">
          <img
            src={Aperture}
            alt="Aperture Logo"
            className="w-[120px] sm:w-[140px] md:w-[162px] h-auto"
          />
        </div>
      )}

      <blockquote className={`
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        ${isSecond ? "lg:text-[56px]" : ""}
        font-medium 
        max-w-3xl 
        mx-auto 
        leading-relaxed
        px-4 sm:px-6
      `}>
        {description}
      </blockquote>

      <figcaption className={`
        text-sm sm:text-base
        ${isSecond 
          ? "px-4 sm:px-8 md:px-[200px] text-white/70" 
          : "text-teal-400"
        }
      `}>
        {writer}
      </figcaption>

      {isSecond && (
        <form className="
          flex 
          justify-center 
          mt-6 
          w-full 
          max-w-xl 
          mx-auto 
          pt-8 sm:pt-[60px]
          px-4 sm:px-6
        ">
          <div className="
            relative
            flex 
            w-full 
            items-center 
            border 
            border-cyan-400 
            rounded-full 
            overflow-hidden 
            bg-transparent 
            px-3 sm:px-4
            py-2 sm:py-3
          ">
            <input
              type="email"
              placeholder="Email address"
              className="
                flex-grow 
                bg-transparent 
                text-white 
                pl-4 sm:pl-6
                pr-28 sm:pr-32
                py-3 sm:py-4
                text-base sm:text-lg
                focus:outline-none
                w-full
                placeholder:text-white/60
              "
            />
            <button
              type="submit"
              className="
                absolute
                right-2 sm:right-3
                bg-gradient-to-r 
                from-teal-400 
                to-cyan-500 
                px-4 sm:px-6
                py-2 sm:py-2.5
                rounded-full 
                text-black 
                font-semibold
                text-sm sm:text-base
                whitespace-nowrap
                hover:opacity-90
                transition-opacity
              "
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