import IconLabel from "@/ui/IconLabel";

const PresenterFaq = ({ size, color }) => {
  return (
    <div className=" text-[14px]">
    <IconLabel color={color} size={size} icon="presenterFaq" gap={4}>
      Presenter FAQ
    </IconLabel>
    </div>
  )
};

export default PresenterFaq;
