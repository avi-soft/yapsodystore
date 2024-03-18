import Link from "next/link";
import Image from "next/image";
import { PiPlayCircleLight } from "react-icons/pi";

export default function DescriptionVideos({ videos }) {
  return (
 
    <div className="grid grid-cols-2 gap-5 my-12">
      {videos.map((video) => (
        <div key={video.id} className="aspect-[4/3] bg-[#fff] w-[96%] relative">
          <Link href={`//www.youtube.com/embed/${video.url}`}>
            <Image
              src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`}
              alt={"image"}
              layout="fill"
            ></Image>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <PiPlayCircleLight className="size-16" color="white" />
            </span>
          </Link>
          {/* <Image src={image.thumb_url} alt="image" layout="fill" /> */}
        </div>
      ))}
    </div>
  );
}
