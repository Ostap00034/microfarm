import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-start justify-start gap-[36px] bg-black py-[36px] px-[36px] xl:px-[72px]">
      <div className="flex w-full flex-row items-center justify-between">
        <Link href="/#start" scroll={false}>
          <div className="flex flex-row items-center justify-center gap-[12px] xl:gap-[24px]">
            <div className="relative h-[36px] w-[36px] xl:h-[56px] xl:w-[56px]">
              <Image src="/logo.svg" alt="main image" priority fill />
            </div>
            <h2 className="font-gilroy-bold text-[24px] not-italic leading-[45px]  text-white xl:text-[36px]">
              MiCROFARM
            </h2>
          </div>
        </Link>
        <div className="hidden flex-row items-center gap-[48px] font-gilroy-bold text-[18px] leading-[22.28px] text-white xl:flex">
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
        </div>
        <div className="flex flex-row gap-[24px]">
          <Image
            src="./icons/whatsapp.svg"
            width="24"
            height="24"
            alt="whatsapp logo"
          />
          <Image
            src="./icons/telegram.svg"
            width="24"
            height="24"
            alt="telegram logo"
          />
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <h6 className="font-gilroy-medium text-[14px] leading-[16.98px] text-white">
          пр. Ленина 1, IT Парк, 6 этаж, 623 каб.
        </h6>
        <h6 className="font-gilroy-medium text-[14px] leading-[16.98px] text-white">
          Политика конфиденциальности
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
