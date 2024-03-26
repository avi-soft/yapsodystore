"use client";
import Image from "next/image";
import { PiPlayCircleLight } from "react-icons/pi";
import { useState } from "react";

import ImageVideoWrapper from "./ImageVideoWrapper";

export default function DescriptionVideos({ videos }) {
  function handleClick(videoIdx) {
    setSelectedVideoIdx(() => videoIdx);
    document.getElementById("video_modal").showModal();
  }
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(null);
  return (
    <>
      <div className="grid grid-cols-2 gap-5 my-12">
        {videos.map((video, idx) => (
          <div
            key={video.id}
            className="aspect-[4/3] bg-[#fff] w-[96%] relative cursor-pointer"
            onClick={() => handleClick(idx)}
          >
            <div>
              <Image
                src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`}
                alt={"image"}
                layout="fill"
              ></Image>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PiPlayCircleLight className="size-16" color="white" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <ImageVideoWrapper
        onClickNext={() => {
          setSelectedVideoIdx((prev) => {
            if (prev == videos.length - 1) return 0;
            return prev + 1;
          });
        }}
        onClickPrev={() => {
          setSelectedVideoIdx((prev) => {
            if (prev == 0) return videos.length - 1;
            return prev - 1;
          });
        }}
        count={videos.length}
        type="video"
      >
        {selectedVideoIdx !== null && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videos[selectedVideoIdx].url}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}
      </ImageVideoWrapper>
    </>
  );
}
