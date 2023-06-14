import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

const HiddenMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute left-0 top-0 z-50 ml-[-35px] h-screen w-screen transform bg-dark ${
        open ? "-translate-y-0" : "-translate-y-full"
      } filter transition-transform duration-300 ease-in-out  `}
    >
      <div className="flex h-screen flex-col items-center justify-center gap-[48px] py-[48px] font-gilroy-bold text-[18px] leading-[22.28px] text-white">
        <Link
          onClick={() => {
            setOpen(!open);
          }}
          href="/#about_us"
          className="duration-300 hover:text-green"
          scroll={false}
        >
          О нас
        </Link>
        <Link
          onClick={() => {
            setOpen(!open);
          }}
          href="/#advantages"
          className="duration-300 hover:text-green"
          scroll={false}
        >
          Преимущества
        </Link>
        <Link
          onClick={() => {
            setOpen(!open);
          }}
          href="/#technology"
          className="duration-300 hover:text-green"
          scroll={false}
        >
          Технология
        </Link>
        <Link
          onClick={() => {
            setOpen(!open);
          }}
          href="/#feedback"
          scroll={false}
        >
          <Button text="Связаться" />
        </Link>
      </div>
    </div>
  );
};

export default HiddenMenu;
