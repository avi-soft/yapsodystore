import Tab from "@/components/tab/Tab";

export default function Home() {
  const userName = "yaptestaddon4";
  const email = "yaptestaddon4@gmail.com";
  return (
    <main className="flex flex-col items-center  md:pt-10 pt-2 min-h-screen ">
      <h1 className="block text-[28px] my-8 ">{userName}</h1>
      <Tab user={userName} email={email} />
    </main>
  );
}
