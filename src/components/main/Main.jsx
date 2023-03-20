import Image from "next/image";
import React from "react";
import ComponentLayout from "../layouts/ComponentLayout";

const Main = () => {
  return (
    <ComponentLayout row>
      <div className="">
        <h1 className="font-gilroy-bold text-[48px] leading-[59.42px] text-white">
          Автоматизированные фермы.
        </h1>
        <h1 className="font-gilroy-bold text-[48px] leading-[59.42px] text-green">
          IOT технологии
        </h1>
      </div>
      <Image
        className="rounded-[24px]"
        src="./images/main.jpg"
        width="560"
        height="350"
        alt="main image"
        priority
      />
    </ComponentLayout>
  );
};

export default Main;
