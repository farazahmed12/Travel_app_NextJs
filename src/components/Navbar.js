import Image from "next/image";
import React from "react";
import ActionButton from "./ActionButton";

function Navbar() {
  return (
    <div className="w-12/12 px-10 py-2 flex flex-row justify-between items-center ">
      <div className="inline-flex items-center gap-x-2 ">
        <Image
          src={"/plane.png"}
          width={25}
          height={25}
          className="object-contain"
        />
        <h2 className="text-[#1B1F2D] text-lg font-montserrat font-light ">
          Dream Place
        </h2>
      </div>

      {/* menu */}
      <div className="inline-flex items-center gap-x-10">
        <h3 className="text-md font-montserrat cursor-pointer font-light text-[#1B1F2D] ">
          Home
        </h3>
        <h3 className="text-md font-montserrat cursor-pointer font-light  text-[#1B1F2D] ">
          Discover
        </h3>
        <h3 className="text-md font-montserrat cursor-pointer font-light  text-[#1B1F2D] ">
          Activities
        </h3>
        <h3 className="text-md font-montserrat cursor-pointer  font-light text-[#1B1F2D] ">
          About
        </h3>
        <h3 className="text-md font-montserrat cursor-pointer  font-light text-[#1B1F2D] ">
          Contact
        </h3>
      </div>

      <div className="inline-flex items-center gap-x-3">
        <ActionButton title={"Register"} isBorder={true} />
        <ActionButton title={"Login"} />
      </div>
    </div>
  );
}

export default Navbar;
