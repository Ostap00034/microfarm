import React from "react";

const Card = ({ headline, text }) => {
  return (
    <div className="flex h-auto w-[20vw] flex-col gap-[24px] rounded-[24px] bg-darkblue px-[32px] py-[24px]">
      <h3 className="font-gilroy-bold text-[24px] leading-[29.71px] text-green">
        {headline}
      </h3>
      <h4 className="font-gilroy-bold text-[18px] leading-[22.28px] text-white">
        {text}
      </h4>
    </div>
  );
};

export default Card;
