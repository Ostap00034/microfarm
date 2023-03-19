import Image from "next/image";
import React from "react";

const Card2 = ({ src, text, alt }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[24px]">
      <Image
        className="rounded-[24px]"
        src={src}
        width="250"
        height="250"
        alt={alt}
      />
      <h4 className="font-gilroy-bold text-[18px] leading-[22.28px] text-white">
        {text}
      </h4>
    </div>
  );
};

export default Card2;
