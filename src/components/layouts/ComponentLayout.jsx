import React from "react";

const ComponentLayout = ({ children, row = false, bg = "" }) => {
  bg = "bg-" + bg;
  return (
    <div
      className={
        row
          ? "flex w-full flex-row items-start justify-between gap-[36px] " + bg
          : "flex w-full flex-col items-start justify-between gap-[36px] " + bg
      }
    >
      {children}
    </div>
  );
};

export default ComponentLayout;
