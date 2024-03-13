import MainContent from "@/components/single-event-page/MainContent";
import SideBarEventPage from "@/components/single-event-page/SideBarEventPage";
import MainContainer from "@/components/main-container/MainContainer";
import { getSingleEventPerformances } from "@/helpers/api-utils";

export default async function SingleEventPage({ params }) {
  const { eventId } = params;
  const { performances } = await getSingleEventPerformances(eventId);
  console.log(performances);
  const themeColor = "red";
  return (
    <MainContainer
      coverImage={
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      }
    >
      <div className={`ml-auto mr-auto w-[100%] rounded-[8px]`}>
        <div className="flex pb-10 pl-4 pr-2 pt-12 max-xl:block">
          <SideBarEventPage color={themeColor} />
          <MainContent performances={performances} color={themeColor} />
        </div>
      </div>
    </MainContainer>
  );
}
