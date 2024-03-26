"use client";
import { useState } from "react";
import Image from "next/image";

import ImageVideoWrapper from "./ImageVideoWrapper";

export default function DescriptionImages({ images }) {
  function handleClick(imageIdx) {
    setSelectedImageIdx(() => imageIdx);
    document.getElementById("image_modal").showModal();
  }

  const [selectedImageIdx, setSelectedImageIdx] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 my-[30px] w-[90%] sm:w-[75%]">
        {images.map((image, idx) => (
          <div
            key={image.id}
            className="border-[4px] border-[#ddd] rounded p-5 h-[150px] bg-[#fff] w-full relative cursor-pointer"
            onClick={() => handleClick(idx)}
          >
            <Image src={image.thumb_url} alt="image" layout="fill" />
          </div>
        ))}
      </div>

      <ImageVideoWrapper
        onClickNext={() => {
          setSelectedImageIdx((prev) => {
            if (prev == images.length - 1) return 0;
            return prev + 1;
          });
        }}
        onClickPrev={() => {
          setSelectedImageIdx((prev) => {
            if (prev == 0) return images.length - 1;
            return prev - 1;
          });
        }}
        count={images.length}
        type="image"
      >
        {selectedImageIdx !== null && (
          <Image
            id={images[selectedImageIdx].id}
            src={images[selectedImageIdx].thumb_url}
            alt="image"
            layout="fill"
          />
        )}
      </ImageVideoWrapper>
    </>
  );
}
