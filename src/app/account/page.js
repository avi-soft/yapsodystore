import Tab from "@/components/tab/Tab";

export default function Home() {
  const userName = "yaptestaddon4";
  const email = "yaptestaddon4@gmail.com";
  return (
    <main className="flex flex-col items-center  pt-4 min-h-screen md:pt-24 pb-8">
      <h1 className="block text-[28px] my-8 ">{userName}</h1>
      <Tab user={userName} email={email} />
    </main>
  );
}
