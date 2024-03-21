import MainContent from "@/components/single-event-page/MainContent";
import SideBarEventPage from "@/components/single-event-page/SideBarEventPage";
import MainContainer from "@/components/main-container/MainContainer";

export default function SingleEventPage() {
  const themeColor = "red";
  return (
    <div className="pt-24 pb-8 ">
      <MainContainer
        coverImage={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        }
      >
        <div className={`ml-auto mr-auto w-[100%] rounded-[8px]`}>
          <div className=" pb-10 pl-4 pr-4 pt-12 max-xl:block">
            <SideBarEventPage color={themeColor} />
            <MainContent color={themeColor} />
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
