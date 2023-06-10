import React from "react";
import ComponentLayout from "../layouts/ComponentLayout";

const AboutUs = () => {
  return (
    <ComponentLayout col>
      <h2
        id="about_us"
        className="mt-[-128px] pt-[128px] font-gilroy-bold text-[36px] uppercase leading-[44.57px] text-green"
      >
        О нас
      </h2>
      <h3 className="font-gilroy-bold text-[16px] leading-[29.71px] text-white xl:text-[24px]">
        MiCROFARM – полностью автоматизированное гидропонное решение для сити -
        фермерства. Обеспечивает максимальную плотность установки и экономию
        энергии при минимальном ручном труде.
      </h3>
    </ComponentLayout>
  );
};

export default AboutUs;
