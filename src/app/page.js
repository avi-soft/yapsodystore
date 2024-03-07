import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/search";
<<<<<<< HEAD
import Card from "@/components/Card";
import Contact from "@/components/Contact-form/Contact";
=======
import SocialMedia from "@/components/social-media/SocialMedia";
import MainContainer from "@/components/main-container/MainContainer";
import MainPageEventList from "@/components/events/MainPageEeventList";
import Image from "next/image";
>>>>>>> c04750c834c47db1603dc21015c7b7977a399cb3

export default function Home() {
  const themeColor = "red";
  return (
<<<<<<< HEAD
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Search />
        <Calendar
          highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
          activeColorCode={"blue"}
        />
        <Card />
        <Card isCodeAvailable={false} />

        <Contact/>
=======
    <MainContainer
      coverImage={
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      }
    >
      <div className="w-full">
        <div className="p-8 flex justify-center">
          <Image src="/store-logo.png" alt="image" width={30} height={30} />
        </div>
        <SocialMedia position="center" />
        {/* <Card />
        <Card isCodeAvailable={false} /> */}
>>>>>>> c04750c834c47db1603dc21015c7b7977a399cb3
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
