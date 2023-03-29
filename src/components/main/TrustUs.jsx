import Image from "next/image";
import React from "react";
import ComponentLayout from "../layouts/ComponentLayout";

const TrustUs = () => {
  return (
    <ComponentLayout col>
      <h2 className="font-gilroy-bold text-[36px] uppercase leading-[44.57px] text-green">
        Нам доверяют
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-[48px] xl:flex-row">
        <Image
          src="/images/logos/tehnopark.svg"
          width="250"
          height="250"
          alt="Технопарк Якутия"
          priority
        />
        <Image
          src="/images/logos/oreh.svg"
          width="250"
          height="250"
          alt="OREH"
          priority
        />
        <Image
          src="/images/logos/fond.svg"
          width="250"
          height="250"
          alt="Фонд содействия инновациям"
          priority
        />
      </div>
    </ComponentLayout>
  );
};

export default TrustUs;
