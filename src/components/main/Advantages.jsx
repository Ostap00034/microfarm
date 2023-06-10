import React from "react";
import Card from "../ui/Card";
import ComponentLayout from "@/components/layouts/ComponentLayout";

const Advantages = () => {
  return (
    <ComponentLayout col>
      <h2
        id="advantages"
        className="mt-[-128px] pt-[128px]  font-gilroy-bold text-[36px] uppercase leading-[44.57px] text-green"
      >
        Почему мы?
      </h2>
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <h5 className="font-gilroy-medium text-[16px] leading-[19.41px] text-white">
          При приобретении нашего продукта вы получаете полное сопровождение от
          нас
        </h5>
        <span className="block h-[2px] w-[40px] rounded-l-[1px] bg-green"></span>
      </div>
      <div className="flex flex-col gap-[44px] xl:flex-row">
        <Card
          headline="Хорошая логистика"
          text="Закрытая экосистема позволяет размещать производства в городах и выращивать круглый год"
        />
        <Card
          headline="Экономия площади"
          text="Вертикальные ярусы экономят пространство, фермы устанавливаются в подвалах и цехах заводов"
        />
        <Card
          headline="Масштабирование"
          text="На проектирование монтаж и пусконаладку фермы уходит от 3 месяцев"
        />
        <Card
          headline="Экономия воды"
          text="На 95% употреляют меньше воды, чем обычные методы выращивания"
        />
      </div>
    </ComponentLayout>
  );
};

export default Advantages;
