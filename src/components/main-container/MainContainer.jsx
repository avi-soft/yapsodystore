export default function MainContainer({
  children,
  coverImage,
  storeBackground,
  isHome = true,
}) {
  return (
    <main className="pt-24 pb-8">
      <div
        style={{ backgroundColor: storeBackground }}
        className={`flex min-h-screen flex-col items-center font-lato justify-between pb-[15px] m-auto w-[97.5%] md:w-[90%] lg:px-[${
          isHome ? "100px" : "30px"
        }]  bg-300 bg-opacity-90 rounded-md opacity-[0.95]`}
      >
        {children}
      </div>
      <div
        className="w-full h-screen fixed top-0 left-0 -z-10"
        style={{
          background: coverImage ? `url(${coverImage})` : "#ffffff",
          backgroundPosition: "center",
        }}
      ></div>
    </main>
  );
}
