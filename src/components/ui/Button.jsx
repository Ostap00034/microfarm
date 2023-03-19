import React from "react";

const Button = ({ text }) => {
  return (
    <button className="h-[52px] max-w-[200px] rounded-[26px] bg-green px-[24px] py-[16px] font-gilroy-bold text-[18px] uppercase leading-[22.28px] text-white">
      {text}
    </button>
  );
};

export default Button;
