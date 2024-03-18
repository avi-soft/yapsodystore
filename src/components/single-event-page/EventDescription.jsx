import he from "he";

export default function EventDescription({ event_description,textColor}) {
  return (
    <div
      className="text-lg font-normal leading-normal my-8"
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: he.decode(event_description) }}
    ></div>
  );
}
