import React from "react";

const Button = ({ text, type = "button", ...rest }) => {
  return (
    <button
      type={type}
      {...rest}
      className="h-[52px] max-w-[200px] rounded-[26px] bg-green px-[24px] py-[16px] font-gilroy-bold text-[18px] uppercase leading-[22.28px] text-white duration-300 hover:bg-[#0C6B2F]"
    >
      {text}
    </button>
  );
};

export default Button;
