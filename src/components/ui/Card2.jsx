import Image from "next/image";
import React from "react";

const Card2 = ({ src, text, alt }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[24px]">
      <div className="relative h-[50vw] w-[50vw] xl:h-[250px] xl:w-[250px] ">
        <Image className="rounded-[24px]" src={src} fill alt={alt} />
      </div>

      <h4 className="font-gilroy-bold text-[18px] leading-[22.28px] text-white">
        {text}
      </h4>
    </div>
  );
};

export default Card2;
