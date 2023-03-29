import React from "react";

const ComponentLayout = ({ children, col, bg = "" }) => {
  bg = "bg-" + bg;
  return (
    <div
      className={
        col
          ? "flex w-full flex-col items-start justify-between gap-[36px] " + bg
          : "flex w-full flex-col items-start justify-between gap-[36px] xl:flex-row " +
            bg
      }
    >
      {children}
    </div>
  );
};

export default ComponentLayout;
