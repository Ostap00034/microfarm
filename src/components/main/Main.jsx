import Image from "next/image";
import React from "react";
import ComponentLayout from "../layouts/ComponentLayout";
const Main = () => {
  return (
    <ComponentLayout>
      <div className="">
        <h1 className="font-gilroy-bold text-[28px] leading-[59.42px] text-white xl:text-[48px]">
          Автоматизированные фермы.
        </h1>
        <h1 className="font-gilroy-bold text-[28px] leading-[59.42px] text-green xl:text-[48px]">
          IOT технологии
        </h1>
      </div>
      <div className="relative h-[50vw] w-[80vw] xl:h-[28vw] xl:w-[45vw]">
        <video
          autoPlay
          loop
          src={require("../../../public/video.mp4")}
          type="video/mp4"
          className="rounded-[24px]"
        />
        {/* Old Logo */}
        {/* <Image
          className="rounded-[24px]"
          src="/images/main.png"
          alt="main image"
          priority
          fill
        /> */}
      </div>
    </ComponentLayout>
  );
};

export default Main;
