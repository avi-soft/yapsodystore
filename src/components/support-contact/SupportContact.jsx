import Support from "../support/Support";
import ContactPresenter from "../contact/ContactPresenter";
import PresenterFaq from "../presentor-faq/PresenterFaq";
export default function SupportContact({
  position,
  iconColor = "black",
  textColor,
  boxBackgroundColor,
  faqCount
}) {
  return (
    
    <div className={`flex gap-x-[18px] justify-${position} flex-wrap pt-[18px] md:pt-[1px]  `}>

      
      <span className="max-sm:mt-[10px] ">
        <Support
          size="size-5"
          iconColor={iconColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          boxBorderColor={iconColor}
        />
      </span>
      <span className="max-sm:mt-[10px]">
        <ContactPresenter size="size-5" color={iconColor} />
      </span>
      {faqCount > 0 && (
        <span className="max-sm:mt-[10px]">
          <PresenterFaq size="size-5" color={iconColor} />
        </span>
      )}
    </div>
    
  );
}
