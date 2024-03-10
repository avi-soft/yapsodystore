import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/search";
import SocialMedia from "@/components/social-media/SocialMedia";
import MainContainer from "@/components/main-container/MainContainer";
import MainPageEventList from "@/components/events/MainPageEeventList";
import SupportContact from "@/components/support-contact/SupportContact";
import Title from "@/components/homepage-header/Title";

export default function Home() {
  const themeColor = "red";
  return (
    <MainContainer
      coverImage={
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      }
    >
      <div className="w-full">
        <Title
          logoImage={
            "https://s3.amazonaws.com/ft-images/venue_logo/92ba6bf256c6fe122cc882700fe996fa825740a6.jpg"
          }
        />
        <SocialMedia position="center" />
        <SupportContact position="center" />
        {/* <Card />
        <Card isCodeAvailable={false} /> */}
      </div>
      <div className="mt-[20px] w-full flex flex-col items-center">
        <Search color={themeColor} />
        <Calendar
          performancesCount={5}
          highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
          activeColorCode={themeColor}
        >
          Upcoming Events
        </Calendar>
        <MainPageEventList color={themeColor} />
      </div>
    </MainContainer>
  );
}
