export default function MainContainer({ children, coverImage }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-[15px] m-auto w-[95%] xl:w-[1300px] lg:px-[100px] px-[20px] bg-red-300 bg-opacity-90 rounded-md">
      <div
        className="w-full h-screen fixed top-0 left-0 -z-10"
        style={{
          background: coverImage ? `url(${coverImage})` : "#ffffff",
          backgroundPosition: "center",
        }}
      ></div>
      {children}
    </main>
  );
}