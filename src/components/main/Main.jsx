import Image from "next/image";
import React from "react";
import ComponentLayout from "../layouts/ComponentLayout";

const Main = () => {
  return (
    <ComponentLayout>
      <div className="">
        <h1 className="font-gilroy-bold text-[48px] leading-[59.42px] text-white">
          Автоматизированные фермы.
        </h1>
        <h1 className="font-gilroy-bold text-[48px] leading-[59.42px] text-green">
          IOT технологии
        </h1>
      </div>
      <div className="relative h-[50vw] w-[80vw] xl:h-[28vw] xl:w-[45vw]">
        <Image
          className="rounded-[24px]"
          src="/images/main.jpg"
          alt="main image"
          priority
          fill
        />
      </div>
    </ComponentLayout>
  );
};

export default Main;
