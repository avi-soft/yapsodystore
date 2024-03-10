import React from "react";
import Image from "next/image";

const EventImage = ({ event }) => {
  return (
    <div className="mb-15px h-[180px]  z-[10]">
      <Image
        src="/default-img.jpg"
        alt="image"
        width={300}
        height={100}
        className="mb-[30px] h-[180px] min-w-[100%] rounded border-4 border-[#ffffff] bg-[#cccccc] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]"
      ></Image>
      <p className="absolute mt-[-110px] max-w-[100%] rotate-[-30deg] whitespace-nowrap pl-[95px] text-[rgba(51,51,51,0.5)] max-xl:ml-[100px] max-xl:mt-[-130px] max-xl:rotate-[]">
        {event.name}
      </p>
    </div>
  );
};

export default EventImage;
