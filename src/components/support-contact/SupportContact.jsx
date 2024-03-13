import Support from "../support/Support";
import ContactPresenter from "../contact/ContactPresenter";
import PresenterFaq from "../presentor-faq/PresenterFaq";
export default function SupportContact({
  position,
  iconColor = "black",
  textColor,
}) {
  return (
    <div
      className={`flex gap-x-4 gap-y-1 justify-${position}  p-5 flex-wrap mb-16`}
    >
      <span className="max-sm:mt-[10px] ">
        <Support size="size-6" color={iconColor} textColor={textColor} />
      </span>
      <span className="max-sm:mt-[10px]">
        <ContactPresenter size="size-6" color={iconColor} />
      </span>
      <span className="max-sm:mt-[10px]">
        <PresenterFaq size="size-6" color={iconColor} />
      </span>
    </div>
  );
}
