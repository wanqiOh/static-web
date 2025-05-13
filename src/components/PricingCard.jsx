import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CheckIcon from "@/assets/SVG/635c92dce19fbd00a5fcb560_Checkmark.svg.svg";

const plans = [
  {
    name: "Starter",
    price: "$24",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "$72",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit",
    ],
    highlight: true,
  },
];

const PricingCards = () => {
  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      gap-4 sm:gap-6 md:gap-8 
      justify-center 
      w-full 
      max-w-full 
      mx-auto 
      px-4 sm:px-6 md:px-8 lg:px-20
      landscape:grid-cols-2
    ">
      {plans.map((plan, idx) => (
        <Card
          key={idx}
          className={`
            w-full 
            max-w-full 
            sm:max-w-[576px] 
            h-auto 
            min-h-[550px] 
            flex-1 
            rounded-2xl 
            p-1 
            ${plan.highlight
              ? "border border-[#4AC5DF] bg-transparent"
              : "bg-[rgba(74,197,223,0.05)] border-none"
            }
            landscape:max-w-full
          `}
        >
          <CardContent className="
            p-4 sm:p-6 md:p-8 
            space-y-4 sm:space-y-6 
            text-white
            h-full
            flex flex-col
          ">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">{plan.name}</h3>
              <div className="text-xl sm:text-2xl">
                <span className="text-[#24E0C6] font-semibold">
                  {plan.price}
                </span>{" "}
                <span className="text-sm text-white/70">/month</span>
              </div>
              <p className="text-sm sm:text-base text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                orci penatibus sed donec consequat.
              </p>
            </div>

            <div className="flex-grow">
              <h4 className="text-xs sm:text-sm font-semibold tracking-wide mb-2 sm:mb-3">
                WHAT'S INCLUDED
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img 
                      src={CheckIcon} 
                      alt="check" 
                      className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 sm:mt-1 flex-shrink-0" 
                    />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              className={`
                w-full 
                rounded-full 
                px-4 sm:px-6 
                py-2 
                text-sm sm:text-base
                font-semibold 
                border-2 
                transition 
                shadow-md 
                bg-transparent 
                border-[rgba(74,197,223,0.3)] 
                text-white 
                border-cyan-300 
                hover:border-cyan-300 
                hover:bg-cyan-400/10 
                hover:text-white 
                hover:bg-[rgba(74,197,223,0.3)] 
                hover:border-[rgba(74,197,223,0.3)]
                mt-4 sm:mt-6
              `}
            >
              Get started
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingCards;