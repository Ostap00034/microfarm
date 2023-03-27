import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header
      id="main"
      className="flex h-[128px] w-full flex-row items-center justify-between"
    >
      <Link href="/" scroll={false}>
        <div className="flex flex-row items-center justify-center gap-[24px]">
          <Image src="/logo.svg" priority width="56" height="56" alt="logo" />
          <h2 className="font-gilroy-bold text-[36px] not-italic  leading-[45px] text-white">
            MiCROFARM
          </h2>
        </div>
      </Link>

      <div className="flex flex-row items-center gap-[48px] font-gilroy-bold text-[18px] leading-[22.28px] text-white">
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
        <Button text="Связаться" />
      </div>
    </header>
  );
};

export default Header;
