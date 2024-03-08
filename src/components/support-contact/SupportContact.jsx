import Support from "../support/Support";
import ContactPresenter from "../contact/ContactPresenter";
import PresenterFaq from "../presentor-faq/PresenterFaq";
export default function SupportContact({ position }) {
  return (
    <div className={`flex gap-x-4 gap-y-1 justify-${position}  p-5 flex-wrap`}>
      <span className="max-sm:mt-[10px] ">
        <Support size="size-6" color="var(--highlightColor)" />
      </span>
      <span className="max-sm:mt-[10px]">
        <ContactPresenter size="size-6" color="var(--highlightColor)" />
      </span>
      <span className="max-sm:mt-[10px]">
        <PresenterFaq size="size-6" color="var(--highlightColor)" />
      </span>
    </div>
  );
}