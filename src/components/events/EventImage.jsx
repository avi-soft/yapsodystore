const EventImage = ({ src }) => {
  src = src
    ? src
    : "https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg";
  return <img src={src} className="rounded-[2px]  bg-[#cccccc] max-xs:w-[100%]"></img>;
};

export default EventImage;
