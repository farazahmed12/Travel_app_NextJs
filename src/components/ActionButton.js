"use client";
import React from "react";

const ActionButton = ({ widthCustom, title, isBorder = false }) => {
  return isBorder ? (
    <div
      className={`${widthCustom} px-4 py-3 hover:cursor-pointer hoverScale rounded-md items-center text-center text-[#2F80ED] font-montserrat border-[#2F80ED] border-2 border-solid`}
    >
      {title}
    </div>
  ) : (
    <div
      className={`${widthCustom} bg-[#2F80ED] hover:cursor-pointer hover:scale-150 hoverScale  px-4 py-3 rounded-md items-center text-center  text-white font-montserrat`}
    >
      {title}
    </div>
  );
};

export default ActionButton;
