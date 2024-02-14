import { useState } from "react";
import ComponentLayout from "../layouts/ComponentLayout";
import Button from "../ui/Button";
import { FeedBackService } from "@/services/feedback.service";

const emtpyData = {
  fio: "",
  phone_number: "",
  description: "",
};

const FeedBack = () => {
  const [data, setData] = useState(emtpyData);

  const submit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      await FeedBackService.create(data);
    } catch (error) {
      console.log(error);
    }
    setData(emtpyData);
  };

  return (
    <ComponentLayout col>
      <h2
        id="feedback"
        className="mt-[-128px] pt-[128px]  font-gilroy-bold text-[36px] uppercase leading-[44.57px] text-green"
      >
        Связаться с нами
      </h2>
      <div className="flex w-full flex-col items-center justify-between gap-[24px] xl:flex-row">
        <form
          action="https://getform.io/f/0dNVwDdL"
          method="POST"
          className="flex flex-col items-center justify-center gap-[24px]"
        >
          <input
            value={data.fio}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                fio: e.target.value,
              }))
            }
            type="text"
            name="fio"
            placeholder="Ваше ФИО"
            className="h-[60px] w-[80vw] min-w-[40vw] rounded-[12px] py-[20px] px-[16px] font-gilroy-medium text-[16px] leading-[19.41px] xl:w-auto"
          />
          <input
            value={data.phone_number}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                phone_number: e.target.value,
              }))
            }
            type="text"
            name="phoneNumber"
            placeholder="Номер телефона"
            className="h-[60px] w-[80vw] min-w-[40vw] rounded-[12px] py-[20px] px-[16px] font-gilroy-medium text-[16px] leading-[19.41px] xl:w-auto"
          />
          <textarea
            value={data.description}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                description: e.target.value,
              }))
            }
            name="description"
            placeholder="Кратко опишите ваш проект"
            className="h-[176px] w-[80vw] min-w-[40vw] rounded-[12px] py-[20px] px-[16px] font-gilroy-medium text-[16px] leading-[19.41px] xl:w-auto"
          />
          <Button type="submit" />
          {/* <Button type="submit" onClick={(e) => submit(e)} text="Отправить" /> */}
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.5562972699518!2d129.7506451690147!3d62.032420347358766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5bf64bc95254bafd%3A0x9efb00617c6f4273!2zSVQt0J_QsNGA0Log0K_QutGD0YLRgdC6!5e0!3m2!1sen!2sru!4v1679254260481!5m2!1sen!2sru"
          width="52%"
          height="423"
          loading="lazy"
          className="h-[423px] w-[80vw] rounded-[12px] xl:w-[52vw]"
        ></iframe>
      </div>
    </ComponentLayout>
  );
};

export default FeedBack;
