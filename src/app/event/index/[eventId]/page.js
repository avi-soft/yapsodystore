import BoxContainer from "@/components/single-event-page/BoxContainer";
import MainContent from "@/components/single-event-page/MainContent";
import SideBarEventPage from "@/components/single-event-page/SideBarEventPage";
import Link from "next/link";

export default function SingleEventPage() {
  return (
    <div className="mt-[20px] w-[100%]">
      {/* <EventList/> */}
      <BoxContainer
        children1={<SideBarEventPage />}
        children2={<MainContent />}
        color="lightblue"
      />
    </div>
  );
}
