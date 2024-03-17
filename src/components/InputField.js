import Image from "next/image";
import React from "react";

const InputField = ({
  isImage = false,
  imageSrc,
  placeholder,
  value,
  onchange,
  customStyles,
}) => {
  return (
    <div
      className={`bg-[#F2F2F2] flex flex-row justify-center items-center px-2 rounded-md ${customStyles}`}
    >
      {isImage && (
        <Image
          src={imageSrc}
          width={50}
          height={50}
          className="w-7 h-7 object-contain"
          quality={100}
        />
      )}
      <input
        className="bg-transparent border-0 py-4 text-md font-montserrat text-gray-700 px-2 w-full outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />{" "}
    </div>
  );
};

export default InputField;
