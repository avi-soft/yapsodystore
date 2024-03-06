import Calendar from "@/components/calendar/calendar";
import Search from "@/components/search/search";
import Card from "@/components/Card";
import Contact from "@/components/Contact-form/Contact";

export default function Home() {
  return (
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
      </div>
    </main>
  );
}
