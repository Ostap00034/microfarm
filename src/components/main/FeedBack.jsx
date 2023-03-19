import React from "react";
import ComponentLayout from "../layouts/ComponentLayout";
import Button from "../ui/Button";

const FeedBack = () => {
  return (
    <ComponentLayout>
      <h2 className="font-gilroy-bold text-[36px] uppercase leading-[44.57px] text-green">
        Связаться с нами
      </h2>
      <div className="flex w-full flex-row flex-wrap items-center justify-between">
        <form className="flex flex-col items-center justify-center gap-[24px]">
          <input
            type="text"
            placeholder="Ваше имя"
            className="h-[60px] w-auto min-w-[40vw] max-w-[40%] rounded-[12px] py-[20px] px-[16px] font-gilroy-medium text-[16px] leading-[19.41px]"
          />
          <input
            type="text"
            placeholder="Номер телефона"
            className="h-[60px] w-auto min-w-[40vw] rounded-[12px] py-[20px] px-[16px] font-gilroy-medium text-[16px] leading-[19.41px]"
          />
          <textarea
            placeholder="Кратко опишите ваш проект"
            className="h-[176px] w-auto min-w-[40vw] rounded-[12px] py-[20px] px-[16px] font-gilroy-medium text-[16px] leading-[19.41px]"
          ></textarea>
          <Button text="Отправить" />
        </form>

        {/* <iframe
          src="https://yandex.ru/maps/-/CCUO7FxMPB"
          width="52%"
          height="423"
          className="rounded-[12px]"
          allowfullscreen="true"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.5562972699518!2d129.7506451690147!3d62.032420347358766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5bf64bc95254bafd%3A0x9efb00617c6f4273!2zSVQt0J_QsNGA0Log0K_QutGD0YLRgdC6!5e0!3m2!1sen!2sru!4v1679254260481!5m2!1sen!2sru"
          width="52%"
          height="423"
          loading="lazy"
        ></iframe>
      </div>
    </ComponentLayout>
  );
};

export default FeedBack;
