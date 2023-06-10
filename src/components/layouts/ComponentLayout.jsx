import React from "react";

const ComponentLayout = ({ children, col, bg = "" }) => {
  bg = "bg-" + bg;
  return (
    <div
      className={
        col
          ? "flex w-[calc(100vw-72px)] flex-col items-start justify-between gap-[36px] xl:w-[calc(100vw-144px)] " +
            bg
          : "flex w-[calc(100vw-72px)] flex-col items-start justify-between gap-[36px] xl:w-[calc(100vw-144px)] xl:flex-row " +
            bg
      }
    >
      {children}
    </div>
  );
};

export default ComponentLayout;
