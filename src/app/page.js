import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/search";
import EventList from "@/components/Events/EventList";
import SocialMedia from "@/components/social-media/SocialMedia";
import MainContainer from "@/components/main-container/MainContainer";
import SupportContact from "@/components/support-contact/SupportContact";

export default function Home() {
  return (
    <MainContainer
      coverImage={
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      }
    >
      <div className="w-full">
        <div className="p-8 flex justify-center">
          <img src="/store-logo.png" alt="image" />
        </div>
        <SocialMedia position="center" />
        <SupportContact position="center" />
        {/* <Card />
        <Card isCodeAvailable={false} /> */}
      </div>
      <div className="mt-[20px] w-full flex flex-col items-center">
        <Search />
        <Calendar
          highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
          activeColorCode={"blue"}
        />
        <EventList />
      </div>
    </MainContainer>
  );
}
