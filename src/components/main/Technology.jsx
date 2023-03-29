import React from "react";
import ComponentLayout from "../layouts/ComponentLayout";

import Card2 from "../ui/Card2";

const Technology = () => {
  return (
    <ComponentLayout col>
      <h2
        id="technology"
        className="font-gilroy-bold text-[36px] uppercase leading-[44.57px] text-green"
      >
        Наша технология
      </h2>
      <div className="bg-red flex flex-row items-center justify-center gap-[16px]">
        <h5 className="font-gilroy-medium text-[16px] leading-[19.41px] text-white">
          Современные IOT технологии для автоматизированного фермерства
        </h5>
        <span className="block h-[2px] w-[40px] rounded-l-[1px] bg-green"></span>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-[48px] xl:flex-row">
        <Card2 src="/images/face.png" text="Внешний вид" alt="Внешний вид" />
        <Card2
          src="/images/controlpanel.png"
          text="Панель управления"
          alt="Панель управления"
        />
        <Card2
          src="/images/structure.png"
          text="Внутренняя структура"
          alt="Внутренняя структура"
        />
      </div>
    </ComponentLayout>
  );
};

export default Technology;
