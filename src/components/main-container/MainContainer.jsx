export default function MainContainer({
  children,
  coverImage,
  storeBackground,
  isHome = true,
}) {
  return (
    <main
      style={{ backgroundColor: storeBackground }}
      className={`flex min-h-screen flex-col items-center justify-between pb-[15px] m-auto w-[95%] xl:w-[1300px] lg:px-[${
        isHome ? "100px" : "30px"
      }] px-[20px] bg-300 bg-opacity-90 rounded-md`}
    >
      {children}
    </main>
  );
}
