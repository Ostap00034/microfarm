import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../ui/Button";
import HiddenMenu from "./HiddenMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HiddenMenu open={open} setOpen={setOpen} />
      <header
        id="main"
        className="flex h-[128px] w-full flex-row items-center justify-between"
      >
        <Link href="/" scroll={false}>
          <div className="flex flex-row items-center justify-center gap-[12px] xl:gap-[24px]">
            <div className="relative h-[36px] w-[36px] xl:h-[56px] xl:w-[56px]">
              <Image src="/logo.svg" alt="main image" priority fill />
            </div>
            <h2 className="font-gilroy-bold text-[24px] not-italic leading-[45px]  text-white xl:text-[36px]">
              MiCROFARM
            </h2>
          </div>
        </Link>

        <div className=" hidden flex-row items-center gap-[48px] font-gilroy-bold text-[18px] leading-[22.28px] text-white xl:flex">
          <Link
            href="/#about_us"
            className="duration-300 hover:text-green"
            scroll={false}
          >
            О нас
          </Link>
          <Link
            href="/#advantages"
            className="duration-300 hover:text-green"
            scroll={false}
          >
            Преимущества
          </Link>
          <Link
            href="/#technology"
            className="duration-300 hover:text-green"
            scroll={false}
          >
            Технология
          </Link>
          <Link href="/#feedback" scroll={false}>
            <Button text="Связаться" />
          </Link>
        </div>
        <div
          className="z-50 flex h-[60px] w-[80px] flex-col items-center justify-around xl:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`${
              open ? "translate-y-[20px] rotate-45" : ""
            } block h-[8px] w-[60px] transform cursor-pointer rounded-[3px] bg-green transition duration-300 ease-in-out`}
          ></span>
          <span
            className={`block h-[8px] ${
              open ? "w-0" : "w-[60px]"
            } cursor-pointer rounded-[3px] bg-green duration-300 ease-in-out`}
          ></span>
          <span
            className={`${
              open ? "-translate-y-[20px] -rotate-45" : ""
            } block h-[8px] w-[60px] transform cursor-pointer  rounded-[3px] bg-green transition duration-300 ease-in-out`}
          ></span>
        </div>
      </header>
    </>
  );
};

export default Header;
