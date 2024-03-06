import Calendar from "@/components/calendar/calendar";
import Search from "@/components/search/search";
import Card from "@/components/Card";
import EventList from "@/components/events/EventList";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-0 pr-[120px] pb-[30px] pl-[120px] m-auto" >
      <div>
        <Search />
        <Calendar
          highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
          activeColorCode={"blue"}
        />
        {/* <Card />
        <Card isCodeAvailable={false} /> */}

      </div>
      <div className="mt-[20px] w-[80%]">
       <EventList/>
       {/* <BoxContainer children1={<SideBarEventPage />} children2={<MainContent />} /> */}
       </div>
    </main>
  );
}
