import React from "react";
import Image from "next/image";

const EventImage = ({ event }) => {
  const { event_title1, images } = event;
  const coverImage = images.filter((image) => image.cover_photo === "yes");
  return (
    <article className="mb-15px h-[180px] relative rounded border-4 border-[#ffffff] bg-[#cccccc] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)] overflow-hidden">
      <Image
        src={coverImage[0] ? coverImage[0].url : "/default-img.png"}
        alt="image"
        width={300}
        height={100}
        className=" object-cover h-[100%] w-[100%] "
      ></Image>
      &{!coverImage[0] &&
      <p className="text-center absolute top-0 bottom-0 left-0 right-0 h-fit m-auto rotate-[-30deg] whitespace-nowrap text-[rgba(51,51,51,0.5)] max-xl:rotate-[]">
        {event_title1}
      </p>
}
    </article>
  );
};

export default EventImage;
