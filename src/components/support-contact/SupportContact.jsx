import Support from "../support/Support";
import ContactPresenter from "../contact/ContactPresenter";
import PresenterFaq from "../presentor-faq/PresenterFaq";
export default function SupportContact({
  position,
  iconColor = "black",
  textColor,
<<<<<<< HEAD
}) {
=======
  boxBackgroundColor
}
) {
>>>>>>> 5a3f641b17cc6897c106585a61d02ee00c5c72b9
  return (
    <div
      className={`flex gap-x-4 gap-y-1 justify-${position}  p-5 flex-wrap mb-16`}
    >
      <span className="max-sm:mt-[10px] ">
        <Support
          size="size-6"
          iconColor={iconColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          boxBorderColor={iconColor}
        />
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
