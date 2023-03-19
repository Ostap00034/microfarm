import ComponentLayout from "../layouts/ComponentLayout";

const Progress = () => {
  return (
    <ComponentLayout>
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <h5 className="font-gilroy-medium text-[16px] leading-[19.41px] text-white">
          Наши достижения
        </h5>
        <span className="block h-[2px] w-[40px] rounded-l-[1px] bg-green"></span>
      </div>
      <div className="flex flex-row gap-[72px]">
        <h3 className="font-gilroy-bold text-[18px] uppercase leading-[22.28px] text-gray">
          Акселератор "24 шага"
        </h3>
        <h3 className="font-gilroy-bold text-[18px] uppercase leading-[22.28px] text-gray">
          Умник 2021
        </h3>
        <h3 className="font-gilroy-bold text-[18px] uppercase leading-[22.28px] text-gray">
          Акселератор "B8"
        </h3>
        <h3 className="font-gilroy-bold text-[18px] uppercase leading-[22.28px] text-gray">
          Студенческий стартап
        </h3>
        <h3 className="font-gilroy-bold text-[18px] uppercase leading-[22.28px] text-gray">
          Startup Tour / 2023
        </h3>
      </div>
    </ComponentLayout>
  );
};

export default Progress;
